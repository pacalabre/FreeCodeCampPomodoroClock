$(document).ready(function(){
  var mins = 25;
  var secs = 1;

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
  }

  // if reset button is pressed, reset the clock
  $('#resetButton').mousedown(function(){
    reset();
  })

  //counter
  var counter = function countdown() {
    secs-=1;
    setTimeout(countdown,1000);
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
    console.log(mins);
    console.log(secs);

    // if seconds reach 0 -- reset secs to 60 and subtract a minute
    if (secs === 0) {
      secs = 60;
      mins-=1;
      }

    // if mins reach 0 -- sound alarms
    if (secs === 0 && mins === 0) {
      playButton1();
    }
  }

  //start counter
  $('#startButton').mousedown(function(){
    counter();
  });

  // print mins and seconds to the page
  document.getElementById("mins").innerHTML = mins;


});
