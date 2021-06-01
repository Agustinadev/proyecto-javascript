const d = document;
export function digitalClock(clock, botonPlay, botonStop) {
  let tempo;
  d.addEventListener("click", (e)=>{
    if (e.target.matches(botonPlay)) {
     tempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
      }, 0);
      e.target.disabled = true;
    }
    
    if (e.target.matches(botonStop)) {
      clearInterval(tempo)
      d.querySelector(clock).innerHTML = null;
      d.querySelector(botonPlay).disabled = false;
      d.querySelector(clock).innerHTML= `<h3>00:00:00</h3>`

    }
  })
}

export function alarm(sound, botonPlay, botonStop) {
  const $alarm = d.createElement("audio")
  $alarm.src = sound;
  
  d.addEventListener("click", (e)=>{
    if (e.target.matches(botonPlay)) {
        $alarm.play()
      e.target.disabled = true;
    }
    if (e.target.matches(botonStop)) {
      $alarm.pause()
      $alarm.currentTime = 0;
       d.querySelector(botonPlay).disabled = false;
    }
      })}