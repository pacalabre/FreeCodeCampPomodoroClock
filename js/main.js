$(document).ready(function() {
  var mins = 25;
  var secs = 1;
  var startClicked = 0;

 // print mins
  document.getElementById("mins").innerHTML = mins;

  //play sound
  function playButton1() {
    var audioButton = new Audio();
    audioButton.src = 'sound.mp3';
    audioButton.play();
  }

  //reset clock
  function reset() {
    mins = 25;
    secs = 1;
    startClicked +=2;
  }

  //add five mins to counter
  function plusFive() {
    mins = mins+5;
    document.getElementById("mins").innerHTML = mins;
  }

  //minus five mins to counter
  function minusFive() {
    mins = mins-5;
    document.getElementById("mins").innerHTML = mins;
  }

  function test() {
    mins = 0;
    secs = 5;
  }

  $('#test').mousedown(function(){
    test();
  })

  // if reset button is pressed, reset the clock
  $('#resetButton').mousedown(function(){
    reset();
  })

  //if plusFive button is pressed, add five mins
  $('#plusFive').mousedown(function(){
    plusFive();
  })

  //if minusFive button is pressed, subtract five mins
  $('#minusFive').mousedown(function(){
    minusFive();
  })

  //counter
  var counter = function countdown() {
    secs-=1;
    var startTime = setTimeout(countdown,1000);
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;

    //timeout secs
    function stopTime() {
      clearTimeout(startTime);
    }

    // if mins reach 0 -- sound alarms
    if (secs === 0 && mins === 0) {
          playButton1();
          stopTime();
        }

    // if seconds reach 0 -- reset secs to 60 and subtract a minute
    if (secs === 0) {
      secs = 60;
      mins-=1;
      }

    //if reset button is clicked stop counter
    if (startClicked > 1) {
      stopTime();
    }
  }

  //start counter
  $('#startButton').mousedown(function(){

    startClicked ++;
    if(startClicked === 1) {
      console.log(startClicked);
      counter();
    }
  });
});
