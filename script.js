
$("body").keydown(function(keydownEvent) {
  console.log(keydownEvent.keycode)
    if (keydownEvent.keycode===13) {
      console.log ("start") 
    goForward(100);
    turnLeft();
     }
})

