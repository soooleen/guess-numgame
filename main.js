// 필요한 html elements 다 가져오기
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; // 남은 기회
let userValueList = []; // 유저가 입력한 숫자들 리스트

chanceArea.innerHTML = `남은 기회 : ${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  // 랜덤숫자 뽑기

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNumber);
}

function play() {
  // 숫자 추측하기
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1~100 사이 숫자만 입력해줘!";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 값이야! 다른 숫자를 입력해줘";
    resultAreaImg.src =
      "https://blog.kakaocdn.net/dn/brqwRF/btq0BDKGgiE/RKpJkf9S8ZK7ZF5JhQMlW0/img.gif";
    return;
  }

  chances--;
  chanceArea.innerHTML = `남은 기회 : ${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://phinf.pstatic.net/image.nmv/blogucc28/2017/05/05/1912/bd923e0a43e10ada0ebea1b330dbbba8b951_ugcvideo_270P_01_16x9_logo.jpg?type=w2";
    resultText.textContent = "UP!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://mblogthumb-phinf.pstatic.net/MjAxODAyMjFfMjQ3/MDAxNTE5MTk1NjA5NDg2.SdJsvEQj0eygNKlabs51pTxT8_OEUXljUmPp8AN8630g.NwqGnLVLJ15boKBE1ID-Dmxj-MXU91b3vGwKw33lEmcg.GIF.hsb7827/giphy_%2848%29.gif?type=w800";
    resultText.textContent = "DOWN!";
  } else {
    resultAreaImg.src =
      "https://fimg4.pann.com/new/download.jsp?FileID=40255372";
    resultText.textContent = "정답이야, 퇴근 성공!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
   if(userValue == computerNumber) {
      resultAreaImg.src =
        "https://fimg4.pann.com/new/download.jsp?FileID=40255372";
      resultText.textContent = "정답이야, 퇴근 성공!";
   } else {
    resultText.textContent = "퇴근 실패...";
    resultAreaImg.src =
      "https://lh3.googleusercontent.com/proxy/t5auLm3pNN9CvHpnkV2kovK7vYKrzMwBaMmvcqkMgOc5blNKWB6GCn-yP94eebewlWTUWGrWVGACy9R1DlA-fVRd4NWjKp1UPLDNozaAfMjhmijMND1ypvPh91KW5td7v2cH53BqKYKw9uA4LG6xE1U2mawdJ4wF1ILjNfeI_6T4Le3fGTLJ-vo";

   }
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //리셋
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "http://psytimes.co.kr/data/cheditor4/2111/8c9e4eac6d279122f6bcba37d745e858df16ec10.jpg";
  resultText.textContent = "♡ 1~100 사이 숫자를 입력하기 ♡";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `남은 기회 : ${chances}`;
  userValueList = [];
}

pickRandomNumber();