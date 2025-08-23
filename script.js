let data = {};
let filteredCards = [];
let currentCardIndex = 0;

async function loadData() {
    try {
        const res = await fetch('data.json');
        data = await res.json();
        populateFilters();
    } catch (err) {
        alert("Could not load flashcards. Please run a local server.");
        console.error(err);
    }
}

function populateFilters() {
    const subjectSelect = document.getElementById('subjectSelect');
    subjectSelect.innerHTML = data.subjects.map(s => `<option value="${s}">${s}</option>`).join('');

    const weeks = [...new Set(data.cards.map(c => c.week))];
    weeks.forEach(w => {
        document.getElementById('weekSelect').innerHTML += `<option value="${w}">Week ${w}</option>`;
    });

    const categories = [...new Set(data.cards.map(c => c.category))];
    categories.forEach(c => {
        document.getElementById('categorySelect').innerHTML += `<option value="${c}">${c}</option>`;
    });
}

document.getElementById('startBtn').addEventListener('click', () => {
    const subject = document.getElementById('subjectSelect').value;
    const week = document.getElementById('weekSelect').value;
    const category = document.getElementById('categorySelect').value;

    filteredCards = data.cards.filter(card =>
        card.subject === subject &&
        (week === "" || card.week === week) &&
        (category === "" || card.category === category)
    );

    if (!filteredCards.length) {
        alert("No flashcards found.");
        return;
    }

    currentCardIndex = 0;
    document.getElementById('flashcardContainer').style.display = 'block';
    showCard();
});

function showCard() {
    const card = filteredCards[currentCardIndex];
    document.getElementById('cardFront').textContent = card.front;
    document.getElementById('cardBack').textContent = card.back;
    document.getElementById('cardCounter').innerText = `Card ${currentCardIndex + 1} of ${filteredCards.length}`;
    document.getElementById('flashcard').classList.remove('flipped');
    updateProgress();
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    const flipped = flashcard.classList.contains('flipped');
    flashcard.setAttribute('aria-pressed', flipped);
}

function markAnswer(correct) {
    const card = filteredCards[currentCardIndex];

    // Track answer
    card.userAnswer = correct ? 'correct' : 'wrong';

    // Update stats if they exist
    if (!card.stats) card.stats = { correct: 0, wrong: 0 };
    if (correct) card.stats.correct++;
    else card.stats.wrong++;

    currentCardIndex++;

    if (currentCardIndex >= filteredCards.length) {
        showResults(); // Show summary at the end
        document.getElementById('flashcardContainer').style.display = 'none';
    } else {
        showCard();
    }
}

function showResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous

    let correctCount = 0;
    let wrongCount = 0;

    filteredCards.forEach((card, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${card.userAnswer}`;

        resultItem.innerHTML = `
        <strong>Card ${index + 1}:</strong> ${card.front}<br>
        <em>Your answer:</em> ${card.userAnswer}
      `;

        resultsContainer.appendChild(resultItem);

        if (card.userAnswer === 'correct') correctCount++;
        else wrongCount++;
    });

    const summary = document.createElement('div');
    summary.className = 'result-summary';
    summary.innerHTML = `
      <h3>Results:</h3>
      <p>✅ Correct: ${correctCount}</p>
      <p>❌ Wrong: ${wrongCount}</p>
    `;
    resultsContainer.prepend(summary);

    resultsContainer.style.display = 'block';
}


function updateProgress() {
    const percent = ((currentCardIndex) / filteredCards.length) * 100;
    document.getElementById('progressBar').style.width = `${percent}%`;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Accessibility: allow flipping card with keyboard (Enter or Space)
document.getElementById('flashcard').addEventListener('keydown', e => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flipCard();
    }
});

// Dark mode toggle
document.getElementById('themeSwitcher').addEventListener('change', e => {
    document.body.classList.toggle('dark', e.target.checked);
});

loadData();
