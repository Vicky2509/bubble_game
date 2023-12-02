var bubbleVal;
var hitBubble;
var timer = 60;
var score = 0;

function makeBubble() {
  var bubbleCreate = `<div class="bubble">2</div>`;
  for (let i = 1; i < 114; i++) {
    bubbleVal = Math.floor(Math.random() * 10);
    bubbleCreate += `<div class="bubble">${bubbleVal}</div>`;
  }
  document.querySelector("#pannelBottom").innerHTML = bubbleCreate;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timing").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pannelBottom").innerHTML = `<h1>Ooops..Game Over !</h1>`;
    }
  }, 1000);
}

function hit() {
  hitBubble = Math.floor(Math.random() * 10);
  document.querySelector(".hitting").textContent = hitBubble;
}

function updateScore() {
  score += 10;
  document.querySelector(".scoring").textContent = score;
}

document
  .querySelector("#pannelBottom")
  .addEventListener("click", function (dets) {
    var clickedBubble = Number(dets.target.textContent);

    if (clickedBubble === hitBubble) {
      updateScore();
      makeBubble();
      hit();
    }
  });

makeBubble();
hit();
runTimer();
