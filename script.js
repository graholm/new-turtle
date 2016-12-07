
$("body").keydown(function(keydownEvent) {
  

    if (keydownEvent.keycode===13) {
      console.log ("start") 
    goForward(100);
    turnLeft();
     }
})

