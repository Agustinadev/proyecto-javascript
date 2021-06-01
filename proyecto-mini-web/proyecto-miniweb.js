import hamburger from "./menu-hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {pelota, atajos} from "./teclado.js";
// import {countDown} from "./cuenta-regresiva.js";
import scroll from "./scroll.js";
import dark from "./boton-luz-oscuridad.js";
import mediaQuery from "./objeto-responsive.js";
import responsiveTester from "./responsive-tester.js";
import networkStatus from "./deteccion-red.js";
import webcam from "./webcam.js";
import getGeolocation from "./geolocalizacion.js";
import filtro from "./filtro-de-busqueda.js";
import sorteoDigital from "./sorteo-digital.js";
import carrousel from "./carrousel.js";
import spy from "./scroll.espia.js";
import video from "./video-inteligente.js";
import forms from "./ejercicios-de-forms.js";
import lectorVoz from "./lector-de-voz.js";

const d = document;
 d.addEventListener("DOMContentLoaded", (e)=>{
   hamburger(".icono", ".nav")
   digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
   alarm("SONIDO/gatito.mp3", "#activar-alarma", "#desactivar-alarma")
  //  countDown()
   scroll()
   mediaQuery("youtube",
    "(min-width: 1024px)",
    `<h3>Ver video</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank" rel="noopener">Ver video de Jon Mircha</a>`
    )
   mediaQuery("gmaps",
    "(min-width: 1024px)",
    `<h3>Ver mapa</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0397202842264!2d-64.2067462496319!3d-31.41303170314098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298830933ad09%3A0xb72fd713f4c77c4e!2sNuevocentro%20Shopping!5e0!3m2!1ses!2sar!4v1619667295118!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
    `<a href="https://goo.gl/maps/6rqRQFLdouatsEKc9" target="_blank" rel="noopener">Ver mapa del Nuevo Centro shopping Córdoba</a>`
    )

    responsiveTester("responsive-tester")
    webcam("webcam")
    getGeolocation("geolocation")
    filtro(".input-buscar",".card")
    sorteoDigital("#winner-btn", ".player")
    carrousel()
    spy()
    video()
    forms()
  })
  networkStatus()
  dark(".boton-luz-oscuridad", "clase-dark", "clase-special", "clase-svg")
  lectorVoz()
  



 d.addEventListener("keypress", (e)=>{
    // atajos(e)
    pelota(e, ".ball", ".stage")
 })

 


 



// const $icono = document.querySelector(".icono"),
//       $btnCancelar = document.querySelector(".icono-cancelar"),
//       $nav = document.querySelector(".nav"),
//        $btnMenu = document.querySelector(".icono-menu");

// const btnMenu = () => {
//   if ($btnMenu.classList.contains("icono-menu")){
//   $nav.classList.remove("none")
//   $btnCancelar.classList.remove("none")
//   $btnMenu.classList.add("none")  
//  }
// }

// const btnCancelar = () => {
//   if ($btnCancelar.classList.contains("icono-cancelar")) {
//    $nav.classList.add("none")
//     $btnCancelar.classList.add("none")
//      $btnMenu.classList.remove("none")
//   }
// }

// const navegador = () => {
//    if ($nav.classList.contains("nav")) {
//     $nav.classList.add("none")
//     $btnCancelar.classList.add("none")
//     $btnMenu.classList.remove("none")
//   }
// }

// document.addEventListener("click", (e)=>{
// if(e.target.matches(".icono-menu")){
//   btnMenu()
// }
// if(e.target.matches(".icono-cancelar")){
//   btnCancelar()
// }
// if(e.target.matches("a")){
//   navegador()
// }

// })
