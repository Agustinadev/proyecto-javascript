const d = document;

export default function carrousel() {
  const $nextBoton = d.querySelector(".slider-boton .next"),
        $prevBoton = d.querySelector(".slider-boton .prev"),
        $slides = d.querySelectorAll(".slider-slide");

let i = 0;

function prev() {
  $slides[i].classList.remove("active");
  i--;

if (i < 0) {
  i = $slides.length - 1;
}

 $slides[i].classList.add("active");
}



function next() {
  $slides[i].classList.remove("active");
  i++;
  
  if (i > ($slides.length - 1)) {
    i = 0;
  }
  $slides[i].classList.add("active");

}


d.addEventListener("click", (e)=>{
    if (e.target === $prevBoton) {
      e.preventDefault();
      prev()
  }
    if (e.target === $nextBoton) {
      e.preventDefault();
      next()
      }
})


  
  setInterval(() => {
   next();
  }, 5000);
 

  
};


