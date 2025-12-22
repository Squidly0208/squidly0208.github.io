let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];

const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");
const restartBtn = document.getElementById("restart-btn");

// Load JSON files dynamically from /json folder
async function loadQuestions() {
  const response = await fetch('./json/questions.json'); // replace with your folder path
  const data = await response.json();
  questions = data.questions;
  startQuiz();
}

// Randomly pick next question, prioritizing ones not answered correctly
function getNextQuestion() {
  if (answeredQuestions.length >= 10) return null;
  
  let remainingQuestions = questions.filter((q, index) => !answeredQuestions.includes(index));
  
  // If none left, repeat incorrectly answered ones
  if (remainingQuestions.length === 0) {
    remainingQuestions = answeredQuestions.filter(i => questions[i].wrong).map(i => questions[i]);
  }

  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  return remainingQuestions[randomIndex];
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answeredQuestions = [];
  scoreDisplay.textContent = '';
  showQuestion();
}

function showQuestion() {
  const q = getNextQuestion();
  if (!q) {
    questionText.textContent = `Quiz finished! Your score: ${score}/10`;
    answerInput.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  questionText.textContent = q.question;
  answerInput.value = '';
  answerInput.focus();
  nextBtn.onclick = () => checkAnswer(q);
}

function checkAnswer(q) {
  const userAnswer = answerInput.value.trim();
  if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
    score++;
    q.wrong = false;
  } else {
    q.wrong = true;
  }

  answeredQuestions.push(questions.indexOf(q));
  currentQuestionIndex++;
  scoreDisplay.textContent = `Score: ${score}`;
  showQuestion();
}

restartBtn.onclick = startQuiz;

// Load questions on page load
loadQuestions();
