$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode===39) {
    goForward(100) 
  }
  else if
    (keydownEvent.keyCode===37) {
      turn()
      goForward (500)
      turn()
    }
})




//function polygon (distance, n) {
//  for (i=0; i<n; i++){
//    goForward(distance)
//    turn(n)
//}}
//
//polygon (100, 10)
//

