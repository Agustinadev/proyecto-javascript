const d = document,
      w = window;

export default function mediaQuery(id, mediaquery, escritorio, movil) {
  let breakpoint = w.matchMedia(mediaquery);
const responsive = (e) => {
  if(e.matches){
    d.getElementById(id).innerHTML = escritorio;
  } else{
    d.getElementById(id).innerHTML = movil;
  }
  console.log(breakpoint, e.matches)
};

breakpoint.addEventListener("change", responsive);
responsive(breakpoint);
}