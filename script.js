
$("body").keydown(function(keydownEvent) {
  console.log(keydownEvent.keyCode)
    if (keydownEvent.keyCode===13) {
      console.log ("start") 
      goForward(100);
      turnLeft();
      goForward(100);
      turnLeft();
      goForward(100);
      turnLeft();
      goForward(100);
     }
})


$("body").keydown(function(keydownEvent) {
  console.log(keydownEvent.keyCode)
  if (keydownEvent.keyCode===32) {
    console.log ("start") 
    goForward(100);
    turnLeft();
    goForward(100);
    turnLeft();
    goForward(100);
    turnLeft();
    goForward(100);
  }
})

