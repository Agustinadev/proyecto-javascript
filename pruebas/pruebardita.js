







//DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!!!!
console.log(document)
//imprimir dom
console.log(document.head)
//imprimir head
console.log(document.body)
//imprimir body
console.log(document.documentElement)
//imprimir todo, head y body con etiqueta html
console.log(document.doctype)
//imprimir el doctype
console.log(document.charset)
//imprimir utf
console.log(document.title)
//imprimir title
console.log(document.links)
//imprimir enlace
console.log(document.images)
//imprimir imágenes
console.log(document.forms)
//imprimir formularios
console.log(document.styleSheets)
//imprimir estilo
console.log(document.scripts)
//imprimir scripts
// setTimeout(() => {
  //   console.log(document.getSelection().toString())
  // }, 3000);
  //get selection 
  document.write("<h2>hola mundo</h2>")
  //escribir html: se escriba abajo 


console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
//los tres de arriba no se usan, asi que a olvidarseeee

console.log(document.getElementById("menu"))


// //tenes que especificar pero podes seleccionar el tipo que quieras de los anteriores
// console.log(document.querySelector("#menu"))
// //te va a traer el primero
// console.log(document.querySelector("a"))
// //te va a traer todos, reemplaza a get element by tagname y classname
// console.log(document.querySelectorAll("a"))

// console.log(document.querySelectorAll("a").length)
//TIENE algunos métodos de los arreglos

// //el console log lo tiene dentro del método forEach
// document.querySelectorAll("a").forEach((el) => {console.log(el)})

// console.log(document.querySelectorAll(".card")[2])

// console.log(document.querySelectorAll("ul li")[3])




// console.log(document.documentElement.lang)

// console.log(document.documentElement.getAttribute("lang"))

// console.log(document.querySelector(".link-dom").href)
// console.log(document.querySelector(".link-dom").getAttribute("href"))


// document.documentElement.lang = "en"
// console.log(document.documentElement.lang)


// document.documentElement.setAttribute("lang", "es") 
// console.log(document.documentElement.lang)
// otra forma de imprimirlo
// console.log(document.documentElement.getAttribute("lang"))







//para variables que tengan que ver con elementos del dom, es usa $ antes del nombre.
const $linkDom = document.querySelector(".link-dom");

$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://youtube.com");

console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));



//data atribute cambiarlo.
console.log($linkDom.getAttribute("data-description"));
 console.log($linkDom.dataset);
 console.log($linkDom.dataset.description);
 $linkDom.setAttribute("data-description", "objeto modelo");
 console.log($linkDom.dataset.description);

//acceder a estilos.
console.log($linkDom.style)
// la palabra literal, aqua
console.log($linkDom.style.backgroundColor)
console.log($linkDom.style.color)
console.log($linkDom.getAttribute("style"))

console.log(window.getComputedStyle($linkDom))
//te manda rgb
console.log(window.getComputedStyle($linkDom).getPropertyValue("color"))
//se escribe con guión y minúscula, sino no anda.
console.log(window.getComputedStyle($linkDom).getPropertyValue("background-color"))

$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.setProperty("text-align", "center");
$linkDom.style.setProperty("display", "block");
$linkDom.style.width = "50%";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "10px";
$linkDom.style.borderRadius = "20%";



const $html = document.documentElement,
      $body = document.body;


// $body.style.color("--color")


// document.querySelector("--dark-color")




const $card = document.querySelector(".card")
console.log($card)
console.log($card.className)
//te devuelve el nombre de la clase. 
console.log($card.classList)
//te deuelve un objeto raro, un mapeo de las clases que tiene el objeto seleccionado
console.log($card.classList.contains("rotate-45"))
//tiene métodos, contains es si tiene o no, una clase
$card.classList.add("rotate-45")
//agregar una clase al elemento, se pueden varias
$card.classList.remove("rotate-45")
//removerla. Se pueden varias
$card.classList.toggle("rotate-45")
//si al tiene la elimina, si no la tiene la pone
$card.classList.replace("rotate-45", "rotate-10")
//te reeplaza una clase por otra
//ESTOS MÉTODOS NO SE PUEDEN UTILIZAR SI ESTAMOS CON UN QUERY SELECTOR ALL 
// console.log($card.classList)
// console.log($card.classList)











const $whatsIsDom = document.getElementById("que-es")

let text = `<div class = "pingo">
<p>Lorem ipsum dolor sit, amet consectetur <i>adipisicing</i> elit. Earum, iure impedit illum voluptas vitae error quas consectetur dolores architecto, at iste dicta perspiciatis adipisci deleniti, fuga aperiam cupiditate consequatur animi</p> <br>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, iure impedit illum voluptas vitae error quas consectetur dolores architecto, at iste dicta perspiciatis adipisci deleniti, fuga aperiam cupiditate consequatur animi</p> <br>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, iure impedit illum voluptas vitae error quas consectetur dolores architecto, at iste dicta perspiciatis adipisci deleniti, fuga aperiam cupiditate consequatur animi</p> <br> </div>`


$whatsIsDom.innerText = text3
// //el innerText ya no está en el estándar, solo te reemplaza tu texto original por el de la variable text respetando la indentanción que te dan las template strings. No reconoce etiquetas html

$whatsIsDom.textContent = text
// // esta propiedad devuelve lo mismo, excepto que no respeta la indentación

$whatsIsDom.innerHTML = text
// //reconoce las etiquetas html y respeta la indentación. El problema es que agarra el elemento con el id "que-es" y dentro, agrega todos los párrafos de la variable text.

$whatsIsDom.outerHTML = text
//En cambio, con esta propiedad, elimina el texto con el id original, y lo reemplaza por el nuevo



const $cards = document.querySelector(".cards")
console.log($cards.children)
//te muestra todos los hijos
console.log($cards.children[2])
//se puede acceder como si fueran arreglo
console.log($cards.childNodes)
//hijos, e hijos nodos
console.log($cards.parentElement)
//el padre

//nodos
console.log($cards.firstChild)
//te devuelve literalmente lo primero, un espacio en este caso, ya que tengo prettier y no me permite juntar el codigo. Primer nodo
console.log($cards.lastChild)
//literalmente lo último. Nodo


//elementos
console.log($cards.firstElementChild)
//el primer elemento real
console.log($cards.lastElementChild)
//el último elemento real


console.log($cards.previousSibling)
//el nodo anterior
console.log($cards.previousElementSibling)
//el elemento anterior
console.log($cards.nextElementSibling)
//el elemento anterior
console.log($cards.closest("body"))
//te tira el ancestro más cercano que le especifiques, puede devolver null
console.log($cards.children[3].closest("section"))



//agregar elementos de forma dinámica
const $figure = document.createElement("figure")
      $figure2 = document.createElement("figure")
      $figure3 = document.createElement("figure")

      $img = document.createElement("img")
      $img3 = document.createElement("img")

      $figcaption = document.createElement("figcaption")
      $figcaption3 = document.createElement("figcaption")

      $figcaptionText = document.createTextNode("Animals")
      $figcaptionText3 = document.createTextNode("people")


      
$figure.appendChild($img)  
$img.setAttribute("src", "https://placeimg.com/400/400/animals")   
$img.setAttribute("alt", "Animals")   
$figure.appendChild($figcaption)
$figcaption.appendChild($figcaptionText)
$cards.appendChild($figure)
$figure.classList.add("card")



$figure2.innerHTML = `<img src="https://placeimg.com/400/400/animals" alt="Animals">
                      <figcaption>Animals</figcaption>                  ` 
$cards.appendChild($figure2)
$figure2.classList.add("card")


$figure3.appendChild($img3)
$img3.setAttribute("src", "https://placeimg.com/400/400/people")   
$img.setAttribute("alt", "people")   
$figure3.appendChild($figcaption3)
$figcaption3.appendChild($figcaptionText3)
$cards.appendChild($figure3)
$figure3.classList.add("card")


const estaciones = ["verano", "otoño", "invierno", "primavera"]
document.write("<h3>Estaciones del año</h3>") 

const $ul = document.createElement("ul")
document.body.appendChild($ul)
//por cada estación, li devolverá un texto con el "el", que va a ser cada una de las estaciones, y luego meteremos esa li dentro de ul, que a su vez está dentro de body
estaciones.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el;
  $ul.appendChild($li)
});


const continentes = ["América", "Europa", "Asia", "Oceanía", "África", "Antártida"]
document.write("<h3>Continentes</h3>")

const $ul2 = document.createElement("ul")
document.body.appendChild($ul2)

continentes.forEach(el => {
  $ul2.innerHTML += `<li>${el}</li>` 
});





//los métodos de atributo son solo para atributos html, las clases tienen sus propios métodos, y en los estilo usamos .style.get/setProperty


//preubas

// console.log($card.style)

// console.log(window.getComputedStyle($card))

// console.log(getComputedStyle($html))



let color = getComputedStyle($html).getPropertyValue("--color");
let fondo = getComputedStyle($html).getPropertyValue("--fondo");
let border = getComputedStyle($html).getPropertyValue("--border");

console.log(color)
console.log(fondo)
console.log(border)


$body.style.color = color;
$body.style.setProperty("color", color)


$body.style.fondo = fondo;
$body.style.setProperty("background-color", fondo)


$body.style.border = border;
$body.style.setProperty("border", border)




$html.style.setProperty("--fondo", "black")
fondo = getComputedStyle($html).getPropertyValue("--fondo")

$body.style.setProperty("background-color", fondo)


$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-10")
console.log($card.classList.replace("rotate-10", "rotate-45"))











//fragmentos
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

document.write("<h3>Meses</h3>") 
const $ul3 = document.createElement("ul")
      $fragmento = document.createDocumentFragment()

meses.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el;
  $fragmento.appendChild($li)
  
});
$ul3.appendChild($fragmento)
document.body.appendChild($ul3)



//otro ejemplo
const $cardi = document.querySelector(".cards"),
      $template = document.getElementById("template-card").content,
      $fragment = document.createDocumentFragment(),
      cardElementos = [
        {
          title: "Animales",
          img:"https://placeimg.com/200/200/animals"
        }
,
        {
          title: "Gente",
          img:"https://placeimg.com/200/200/people"
        }
,
        {
          title: "Naturaleza",
          img:"https://placeimg.com/200/200/nature"
        }
,
        {
          title: "Arquitectura",
          img:"https://placeimg.com/200/200/arch"
        }
,
         {
          title: "Tecnología",
          img:"https://placeimg.com/200/200/tech"
        }
      ]

cardElementos.forEach(el => {
  $template.querySelector("img").setAttribute("src", el.img)
  $template.querySelector("img").setAttribute("alt", el.title)
  $template.querySelector("figcaption").textContent = el.title;



  let clones = document.importNode($template, true);
  $fragment.appendChild(clones)
});

$cardi.appendChild($fragment)



const $newCard = document.createElement("figure"),
      $newHTML = `<img src="https://placeimg.com/400/400/nature" alt="nature">
                      <figcaption></figcaption>`

$cards.insertAdjacentElement("beforeend", $newCard)
$newCard.insertAdjacentHTML("beforeend", $newHTML)
$newCard.querySelector("figcaption").insertAdjacentText("beforeend", "any")
$newCard.classList.add("card")



// const $p = document.createElement("p"),
//       $textoDeP = `<p>im <i>developer web</i> with pepinicho</p>`;

// //funciona igual que el inner html, no reemplaza, sino que mete adentro del existente
// // $p.insertAdjacentHTML("afterbegin", $textoDeP)
// $body.appendChild($p)
//  $p.outerHTML = $textoDeP





 

const $div = document.createElement("div"),
      $i = document.createElement("i"),
      $textP = `<p>soy un fucking pepinicho</p>`
      $textI = `pepinicho`;

      $i.insertAdjacentText("afterbegin", $textI)
      $div.appendChild($i)
      $body.appendChild($div)
      $div.classList.add("divi")

      $i.outerHTML = $textP
console.log("separadorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
//EVENTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOS

//manejador de elementos con html
function holaMundo() {
  alert("Alerta de manejador con html")
  console.log(Event)
}



//UNO POR VEZ, SE PUEDE USAR UNA YA CREADA O UNA CREADA EN EL MOMENTO

 const $manejadorSemantico = document.getElementById("manejador-semantico")
 $manejadorSemantico.onclick = holaMundo
 $manejadorSemantico.onclick = (e) => {
    alert("Alerta de manejador con el semántico")
    console.log(Event)
    console.log(e)
}


//SE PUEDEN LLAMAR A VARIAS FUNCIONES, YA QUE ES MÚLTIPLE

const $manejadorMultiple = document.getElementById("manejador-listener")
$manejadorMultiple.addEventListener("click", (e) => {

alert("Alerta de manejador con add event listener")
  console.log(e)
  //tipo de evento
  console.log(e.type)
  //todo el botón
  console.log(e.target)
  console.log("Im nanicho picho pepinicho de Pufita, manejador semántico")

})
$manejadorMultiple.addEventListener("click", holaMundo)

//ponerle parámetros a nuestros eventos. saludo tiene que estar 

function saludo(nombre = "desconocido") {
  alert(`Hola, ${nombre}, ¿Cómo estás?`)
}
//otra instancia de la variable manejador múltiple que hicimos antes
$manejadorMultiple.addEventListener("click", ()=>{
  saludo("nanicho pepinicho")
})




const remove = document.getElementById("remover-listener")

const removerDobleClick = (e) => {
  alert("remover")
  console.log(e)
remove.removeEventListener("dblclick",removerDobleClick)
}

remove.addEventListener("dblclick", removerDobleClick)

//ejercicios de victor robles
// function summma(a, b) {
//   if(a === b) return console.log(`${a} y ${b} son iguales`);

//   if (a > b) {
//     return console.log(`el número ${a} es mayor, ${b} es menor`);
//   }

//   else {
//      return console.log(`el número ${b} es mayor, ${a} es menor`);
//   }
// }
// summma(2, 3)


//  const $divContainer = document.querySelectorAll(".eventos-flujos div")
// const $link = document.querySelector(".eventos-flujos a")





function div(d) {
  console.log(`hola te saluda ${this.className}, el mensaje lo origino  ${d.target.className}`)
  d.stopPropagation()
  
}

// $divContainer.forEach(e => {
//   //burbuja
//   e.addEventListener("click", div)
  //burbuja
  //e.addEventListener("click", div, false)
  //captura, lo contrario a burbuja. del mas externo al mas interno
    // e.addEventListener("click", div, true)
    //  e.addEventListener("click", div, {
    //    capture: false,
    //   //que una sola vez se ejecute, hayas tocado 1, 2 o 3. es como el remove de remove event listener
    //   // once: true,
    // })
// });


// $link.addEventListener("click", (e2)=>{
//   alert("el link")
//   //para que no tome como que tocaste la caja 3, sino solo el link y no imprime nada más que el alert
//   e2.stopPropagation()
//   e2.preventDefault()
// })


function clickk(e) {
  alert("saco el evento por defecto");
  e.preventDefault()
  
}



//al documento. Una sola insercion de click
document.addEventListener("click", (e) => {
  // console.log("hiciste click en" , e.target);
  if (e.target.matches(".eventos-flujos a")) {
    //  clickk(e)
    alert("saco el evento por defecto");
  e.preventDefault()
  }
  if (e.target.matches(".eventos-flujos div")){
    div.apply(e.target,[e])
  }
})


//BOM

console.log(innerWidth)
console.log(innerHeight)
console.log(outerWidth)
console.log(outerHeight)