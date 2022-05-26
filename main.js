//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호 Down!!!
//랜덤번호 > 유저번호 Up!!!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disabled)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다

let computerNum = 0;

let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let history = [];
let chances = 5;
let gameOver = false;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("answer", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "Please enter number between 1 and 100";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "Number already been tried, please enter another number.";
    return;
  }

  chances--;
  chanceArea.textContent = `Chances left : ${chances} / 5`;

  if (userValue < computerNum) {
    resultArea.textContent = "UP ⬆";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN ⬇";
  } else {
    resultArea.textContent = "THAT'S RIGHT ";
    playButton.disabled = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    playButton.disabled = true;
  }
}

function reset() {
  //user input창이 깨끗하게 정리되고
  userInput.value = "";
  //새로운 번호가 생성되고
  pickRandomNum();
  resultArea.textContent = "Result";
  playButton.disabled = false;
  chances = 5;
  history=[];
}

pickRandomNum();
