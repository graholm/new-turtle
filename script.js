console.log ("start")
$("body").keydown(function(keydownEvent) {
    if (keydownEvent.keycode===13) {
      
    goForward(100);
    turnLeft();
     }
})

