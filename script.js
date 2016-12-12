//$("body").keydown(function(keydownEvent) {
//  console.log(keydownEvent.keyCode)
//    if (keydownEvent.keyCode===13) {
//      goForward(150);
//      turnLeft();
//      goForward(150);
//     }
//})


function polygon (distance, n) {
  for (i=0; i<n; i++){
    goForward(distance)
    turn(n)
}}

polygon (100, 10)


