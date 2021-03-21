//Global Constants
const cluePauseTime = 333;                //how long to pause in between each clue sound/hold in milliseconds
const nextClueWaitTime = 1000;            //how long to wait before starting playback of the next clue sequence in milliseconds

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4, 6, 5, 3]    //keeps track of secret pattern of button presses
var progress = 0;                         //assigned an integer that represents how far along the player is in guessing the pattern
var gamePlaying = false;                  //assigned a boolean value that will keep track of whether game is active or not
var tonePlaying = false;                  //assigned a boolean value that shows whether sound is playing or not
var volume = 1.0;                         //must be between 0.0 and 1.0 to adjust volume of sound
var guessCounter = 0;                     //keeps track of where the user is in the clue sequence
var clueHoldTime = 1500;                  //how long to hold each note, changes every turn

function startGame() {
  //initialize game variables
  clueHoldTime = 1500;
  progress = 0;
  gamePlaying = true;
  
  //swaps start to end button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  //starts playing clue sounds
  playClueSequence()
}

function stopGame() {
  //deinitialize game
  gamePlaying = false;
  
  //swaps end to start button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 300,
  6: 500
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  //initializes number of guesses
  guessCounter = 0;
  
  //sets the delay to initial wait time
  let delay = nextClueWaitTime;
  
  //for each clue that is revealed so far
  for(let i=0; i<=progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) //set a timeout to play the clue
    delay += clueHoldTime
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 20;
  }
}

//alerts player that they won the game
function winGame() {
  stopGame();
  alert("Game Over! You Won!");
}

//alerts user that they lost the game
function loseGame(){
  stopGame();
  alert("Game Over! You Lost.");
}

function guess(btn) { 
  console.log("user guessed: " + btn);
  
  //checks whether user is playing the game
  if (!gamePlaying){
    return;
  }
  else {
    if (btn == pattern[guessCounter]){
      if (progress == guessCounter) {
        if (progress == pattern.length - 1) {
          winGame();
        }
        else {
          progress++;
          playClueSequence();
        }
      }
      else {
        guessCounter++;
      }
    }
    else {
      loseGame();
    }
  }
}