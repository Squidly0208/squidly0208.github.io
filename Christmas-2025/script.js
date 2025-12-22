function unlock() {
  const input = document.getElementById("codeInput").value.trim().toLowerCase();
  const person = data.find(p => p.person.toLowerCase() === input);

  if (!person) {
    document.getElementById("error").textContent = "Invalid code ❄️";
    return;
  }

  document.getElementById("login").classList.add("hidden");
  document.getElementById("gift").classList.remove("hidden");

  document.getElementById("name").textContent = person.person;
  document.getElementById("message").textContent = person.message;

  const list = document.getElementById("memories");
  list.innerHTML = "";

  if (person.memories.length === 0) {
    list.innerHTML = "<li>So many memories, too many to list ❤️</li>";
  } else {
    person.memories.forEach(m => {
      const li = document.createElement("li");
      li.textContent = m;
      list.appendChild(li);
    });
  }
}

/* ❄️ Snow Effect */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
let w, h, flakes = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 120; i++) {
  flakes.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 3 + 1,
    d: Math.random() + 1
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.beginPath();

  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });

  ctx.fill();
  moveSnow();
}

let angle = 0;
function moveSnow() {
  angle += 0.01;
  flakes.forEach(f => {
    f.y += Math.pow(f.d, 2) + 0.5;
    f.x += Math.sin(angle) * 0.5;

    if (f.y > h) {
      f.y = 0;
      f.x = Math.random() * w;
    }
  });
}

setInterval(drawSnow, 33);
