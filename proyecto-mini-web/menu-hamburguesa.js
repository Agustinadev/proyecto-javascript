export default function hamburger(icono, nav) {
  const d = document,
        c = document.querySelector(".icono-cancelar"),
        m = document.querySelector(".icono-menu");

  d.addEventListener("click", (e)=>{
    if (e.target.matches(`${icono} *`)) {
      d.querySelector(nav).classList.toggle("is-active");
      c.classList.toggle("none")
      m.classList.toggle("none")
    }

    if (e.target.matches("nav a")) {
      d.querySelector(nav).classList.toggle("is-active");
      c.classList.toggle("none")
      m.classList.toggle("none")
    }
  })
}