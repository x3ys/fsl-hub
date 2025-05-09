function openLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
    document.getElementById('registerPopup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'block';
}

function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

function openRegisterPopup() {
    document.getElementById('registerPopup').style.display = 'block';
    document.getElementById('loginPopup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'block';
}

function closeRegisterPopup() {
    document.getElementById('registerPopup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

function showSign(letter) {
    const modal = document.getElementById('signModal');
    const image = document.getElementById('signImage');
    const label = document.getElementById('signLabel');
  
    image.src = `assets/images/${letter}.png`;
    label.textContent = `ASL Sign for '${letter}'`;
    modal.style.display = 'flex';
}
  
function closeModal() {
    document.getElementById('signModal').style.display = 'none';
}

const questions = [
    { image: "/assets/images/A.png", answer: "A" },
    { image: "/assets/images/B.png", answer: "B" },
    { image: "/assets/images/C.png", answer: "C" },
    { image: "/assets/images/D.png", answer: "D" },
    { image: "/assets/images/E.png", answer: "E" },
    { image: "/assets/images/F.png", answer: "F" },
    { image: "/assets/images/G.png", answer: "G" },
    { image: "/assets/images/H.png", answer: "H" },
    { image: "/assets/images/I.png", answer: "I" },
    { image: "/assets/images/J.png", answer: "J" },
    { image: "/assets/images/K.png", answer: "K" },
    { image: "/assets/images/L.png", answer: "L" },
    { image: "/assets/images/M.png", answer: "M" },
    { image: "/assets/images/N.png", answer: "N" },
    { image: "/assets/images/O.png", answer: "O" },
    { image: "/assets/images/P.png", answer: "P" },
    { image: "/assets/images/Q.png", answer: "Q" },
    { image: "/assets/images/R.png", answer: "R" },
    { image: "/assets/images/S.png", answer: "S" },
    { image: "/assets/images/T.png", answer: "T" },
    { image: "/assets/images/U.png", answer: "U" },
    { image: "/assets/images/V.png", answer: "V" },
    { image: "/assets/images/W.png", answer: "W" },
    { image: "/assets/images/X.png", answer: "X" },
    { image: "/assets/images/Y.png", answer: "Y" },
    { image: "/assets/images/Z.png", answer: "Z" },
    { image: "/assets/images/1.png", answer: "1" },
    { image: "/assets/images/2.png", answer: "2" },
    { image: "/assets/images/3.png", answer: "3" },
    { image: "/assets/images/4.png", answer: "4" },
    { image: "/assets/images/5.png", answer: "5" },
    { image: "/assets/images/6.png", answer: "6" },
    { image: "/assets/images/7.png", answer: "7" },
    { image: "/assets/images/8.png", answer: "8" },
    { image: "/assets/images/9.png", answer: "9" },
    { image: "/assets/images/10.png", answer: "10" }
];

let score = 0;
let questionCount = 0;
const totalQuestions = 10;
let currentQuestion;

function startGame() {
  console.log("Game started");
  document.querySelector(".play-section").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  score = 0;
  questionCount = 0;
  document.getElementById("score").textContent = score;
  loadQuestion();
}

function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

function loadQuestion() {
  if (questionCount >= totalQuestions) {
    endGame();
    return;
  }
  currentQuestion = getRandomQuestion();
  document.getElementById("quizImage").src = currentQuestion.image;
  document.getElementById("userInput").value = "";
  document.getElementById("feedback").textContent = "";
}

function submitAnswer() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (input === currentQuestion.answer) {
    feedback.textContent = "✅ Correct!";
    score++;
  } else {
    feedback.textContent = `❌ Incorrect. Answer: ${currentQuestion.answer.toUpperCase()}`;
  }

  document.getElementById("score").textContent = score;
  questionCount++;

  setTimeout(loadQuestion, 1500);
}

function endGame() {
  document.getElementById("quizContainer").style.display = "none";
  document.querySelector(".play-section").style.display = "block";

  const popup = document.querySelector(".popup");
  popup.innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your score: ${score} / ${questionCount}</p>
    <button onclick="startGame()">Play Again</button>
  `;
}

const registerForm = document.querySelectorAll("form")[1];
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = registerForm.querySelector("#email").value.trim();
        const password = registerForm.querySelector("#password").value;
        const confirmPassword = registerForm.querySelector("#confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (localStorage.getItem(email)) {
            alert("Account already exists!");
            return;
        }


        localStorage.setItem(email, JSON.stringify({ password }));
        alert("Account created successfully!");
        registerForm.reset();
        openLoginPopup();
    });

  const loginForm = document.querySelectorAll("form")[0];
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginForm.querySelector("#email").value.trim();
        const password = loginForm.querySelector("#password").value;

        const user = JSON.parse(localStorage.getItem(email));

        if (!user) {
            alert("No account found with this email.");
            return;
        }

        if (user.password !== password) {
            alert("Incorrect password.");
            return;
        }

        alert("Login successful!");
        location.href = "homepage.html";
      
      });

