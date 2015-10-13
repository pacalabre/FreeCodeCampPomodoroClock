$(document).ready(function(){
  var mins = 25;
  var seconds = 60;
  //play sound

  function playButton1() {
    var audioButton = new Audio();
    audioButton.src = '.mp3';
    audioButton.play();
  }

  $('#audioButton').mousedown(function(){
    playButton1();
  });

  //counter
   var counter = function count() {
      seconds-=1;
      console.log(mins);
      console.log(seconds);
      setTimeout(count,1000);
      if (seconds === 0) {
        seconds = 60;
        mins-=1;
      }
      }
      counter();



});
