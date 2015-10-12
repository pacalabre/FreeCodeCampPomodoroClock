$(document).ready(function(){

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
      var mins = 25;
      var seconds = 60;
   function count() {
      seconds-=1;
      console.log(seconds);
      setTimeout(count,1000);
      }
      count();
});
