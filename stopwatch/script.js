let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");

const buttonToggle = document.getElementById("bt_toggle");
const buttonReset = document.getElementById("bt_reset");

let intervalId; //setInterval()로 실행 중인 타이머의 ID 저장
let isRunning = false; //현재 상태 저장 변수

buttonToggle.classList.add("start"); //초기화면

buttonToggle.onclick = function(){ //bt_toggle을 클릭했을 때
  if(!isRunning){
    //타이머 시작
    intervalId = setInterval(operateTimer, 10); //operateTimer()를 10ms마다 반복 실행
    buttonToggle.textContent = "STOP";
    buttonToggle.classList.remove("start");
    buttonToggle.classList.add("stop");
    isRunning = true;
  }else{
    //타이머 정지
    clearInterval(intervalId); //타이머 중단 (반복 작업을 멈추는 함수)
    buttonToggle.textContent = "START";
    buttonToggle.classList.remove("stop");
    buttonToggle.classList.add("start");
    isRunning = false;
  }
};

buttonReset.onclick = function(){
    clearInterval(intervalId)
    temMillis = 0; seconds = 0; minutes = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"

}

//10ms 마다 시간에 대한 숫자가 증가
function operateTimer(){
  tenMillis++; 
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis //화면에 두 자리로 나타내기 위해 삼항 연산자 사용
  if(tenMillis > 90){
    seconds++; //초 증가가
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    tenMillis = 0
    appendTens.textContent = "00"
  }
  if(seconds >59){
    minutes++; //분 증가가
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0
    appendSeconds.textContent = "00"
  }
}