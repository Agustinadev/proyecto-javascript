const d = document,
      w = window;
export default function scroll() {
  const $violin = d.querySelector(".violin"),
         $violinBoton = d.querySelector(".violin-boton");
        console.log(window.scrollY)

d.addEventListener("scroll", (e)=>{
 if (window.scrollY > 1000) {
         $violinBoton.classList.remove("hidden")
        }

  else {
     $violinBoton.classList.add("hidden")

  }
})
      
d.addEventListener("click", (e)=>{
  if (e.target.matches(".violin")) {
    w.scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }
})
}
