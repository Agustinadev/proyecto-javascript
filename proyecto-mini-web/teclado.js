const d = document;
let x = 0,
    y = 0;
export function pelota(e, ball, stage) {
  const $ball = d.querySelector(".ball"),
        $stage = d.querySelector(".stage"),
        $limitBall = $ball.getBoundingClientRect(),
        $limitStage = $stage.getBoundingClientRect();
console.log(e.keyCode)
console.log(e.key)
console.log($limitBall, $limitStage)


switch (e.keyCode) {
  case 97:
    // e.preventDefault()
    if ($limitBall.left > $limitStage.left) x--;
    break;

  case 119:
     // e.preventDefault()
    if ($limitBall.top > $limitStage.top) y--;
    break;

  case 100:
      // e.preventDefault()
    if ($limitBall.right < $limitStage.right) x++;
    break;

  case 115:
      // e.preventDefault()
    if ($limitBall.bottom < $limitStage.bottom) y++;
    break;
}
$ball.style.transform = `translate(${x*10}px, ${y*10}px)`

}

export function atajos(e) {
  // console.log(e)
  // console.log(e.type)
  // console.log(e.key)
  // console.log(e.keyCode)
  // console.log(e.ctrlKey)
  // console.log(e.shiftKey)

  if (e.key === "g") {
    alert("hola, hiciste un atajo de teclado para alert")
  }
}
