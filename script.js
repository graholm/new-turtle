$("body").keydown(function(keydownEvent) {
  console.log ("go")
    if (keydownEvent.keycode===13) {
    goForward (100);
    turnLeft();
     }})

