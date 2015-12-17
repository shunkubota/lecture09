var player = document.querySelector("audio");
player.addEventListener("play", hello);
player.addEventListener("pause", goodbye);

var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playMusic);

var pauseButton = document.querySelector("#pauseButton");
pauseButton.addEventListener("click", pauseMusic);

window.addEventListener("load", initialize);

function initialize(event){
   pauseButton.hidden = true;
}

function hello(event){
  console.log("hello");
  console.log(event);
}

function goodbye(event){
  console.log("good bye");
}

function playMusic(event){
   player.play("playMusic");
   pauseButton.hidden = false;
   playButton.hidden = true;
}

function pauseMusic(event){
  player.pause("pauseMusic");
  pauseButton.hidden = true;
  playButton.hidden = false;
}

var skipButton = document.querySelector("#skipButton");
skipButton.addEventListener("click", skip10sec);

function skip10sec(event){
   player.currentTime = player.currentTime + 10;
}

var backButton = document.querySelector("#backButton");
backButton.addEventListener("click", back10sec);

function back10sec(event){
   player.currentTime = player.currentTime - 10;
}

var volumenControl = document.querySelector("volumeControl");
volumeControl.addEventListener("change", changeVolume);

function changeVolume(event){
  player.volume = volumeControl.value / 100.0;
}
