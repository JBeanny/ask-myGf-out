function startQuestions() {
  document.getElementById("questions").style.display = "block";
}

function answerYes() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "YEY YEY 🎉😗🫡 SEE YOU";
  document.getElementById("image").setAttribute("src", "./images/happy.png");
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText =
    "O can response in our chat as: '1' (លេខមួយ) so that I know o can go out on Thursday na 🫰💖";
  showConfetti();
}

function answerNo() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "So sad បាត់ទៅហើ់យចឹង 😭";
  document.getElementById("image").setAttribute("src", "./images/cry.png");
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText =
    "O can response in our chat as: '0' (លេខសូន្យ) so that I know o can't go out on Thursday na 😭";
}

// Function to show confetti
function showConfetti() {
  const confettiSettings = {
    target: "confetti-canvas",
    respawn: true,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
    confetti.clear();
  }, 5000);
}
