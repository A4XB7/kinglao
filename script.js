function showMessage() {
  alert("Happy Birthday Selina! ❤️🎂\n\nMay your day be filled with happiness, beautiful memories, laughter and love. 🌸✨");
}

const hearts = ["❤️", "💕", "💖", "🌸", "✨"];

for (let i = 0; i < 22; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 5 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(heart);
}