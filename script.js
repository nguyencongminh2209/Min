function showMessage() {
    alert("Anh Min của bé Nhun chúc em yêu ngày 20/10 thật nhiều niềm vui 💕\n\nEm xứng đáng với tất cả những điều tốt đẹp nhất!\n\nYêu em vô cùng tận 😘");
  }

// Typing effect
const text = "Nhân ngày Phụ nữ Việt Nam 20/10,\nanh muốn gửi đến em yêu những lời chúc ngọt ngào nhất! 💖";
const typingEl = document.querySelector(".typing");
let i = 0;
function typeText() {
  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}
typeText();

// Heart animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 500);

// Music toggle
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.onclick = () => {
  if (playing) {
    music.pause();
    btn.textContent = "🎵 Bật nhạc";
  } else {
    music.play();
    btn.textContent = "🔇 Tắt nhạc";
  }
  playing = !playing;
};
// Petal falling
setInterval(() => {
  const petal = document.createElement("div");
  petal.className = "heart";
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 20 + 10 + "px";
  petal.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 5000);
}, 700);