const d = document;

export default function sorteoDigital(boton, selector) {
  // const getWinner = (selector) =>{
  //   const $players = d.querySelectorAll(selector),
  //         $random = Math.floor(Math.random() * $players.length),
  //         numbers = $players[$random];


  // console.log($players,  numbers)
  // return `El ganador es ${numbers.textContent}`
  // }

  d.addEventListener("click", (e)=>{
    if (e.target.matches(boton)) {
      let result = getWinner(selector)
      alert(result);
      console.log(result)
    }
  })


  const getWinner = (selector) =>{
    const $players = document.querySelectorAll(selector),
          $random = Math.floor(Math.random() * $players.length),
          numbers = $players[$random];


  console.log($players,  numbers);
  return `El ganador es: ${numbers.textContent}`
  }

}