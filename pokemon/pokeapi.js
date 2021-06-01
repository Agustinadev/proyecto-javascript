//       $template = d.querySelector(".template").content,
//       $fragment  = d.createDocumentFragment();

// fetch("https://pokeapi.co/api/v2/pokemon")
// .then((res) => {
//   // console.log(res)
//   return res.ok
//   ?res.json()
//   : Promise.reject(res);

// })
// .then((json)=>{
//   let jsonFor = json.results;
//   const $ul = d.createElement("ul")
 
//   jsonFor.forEach(el => {
//   console.log(el.name)
//   const $li = d.createElement("li")
//   $li.textContent =el.name
//   $ul.insertAdjacentElement("afterbegin",$li)
// });

    
// $template.insertAdjacentElement("afterbegin",$ul)
// $fragment.insertAdjacentElement("afterbegin",$template)
// body.insertAdjacentElement("afterbegin",$fragment)
// // $main.insertAdjacentElement("afterbegin",$ul)
// })
// .catch((err)=>{
  //   console.log(err)
  //   let message = err.statusText  || "Ha ocurrido un pokerror";
  //   d.createElement("h2").innerHTML = `Error ${err.status}: ${message}`
  
  // })
  
  
  
  
  
  
  const d = document,
      $main = d.querySelector("main"),
      $links = d.querySelector(".links")
      ;

let POKEapis = "https://pokeapi.co/api/v2/pokemon"
async function loadPokemon(url) {
  try {
    $main.innerHTML = `<img src="assets/hearts.svg" alt="Cargando..." class="loader">`
    let res = await fetch(url),
        json = await res.json(),
        $template = "",
        $prevLink,
        $nextLink;

        if (!res.ok) {
          throw {status: res.status, statusText: res.statusText}
        }
  


    for (let i = 0; i < json.results.length; i++) {
      try {
        const pokemon = json.results[i];
          let res = await fetch(pokemon.url),
              poke = await res.json();
          console.log(res)
           if (!res.ok) {
          throw {status: res.status, statusText: res.statusText}
        }

        $template += `<figure>
        <img src="${poke.sprites.front_default}" alt="${poke.name}">  <figcaption>${poke.name}</figcaption>
                      </figure>` 
      } catch (err) {
        let message = err.statusText  || "Ha ocurrido un pokerror al intentar llamar a la url";
        $main.innerHTML = `Error ${err.status}: ${message}`
      }
    }
    
    $main.innerHTML = $template;
   

    $prevLink = 
    json.previous
    ? `<img src="assets/flecha.png" class="flecha-izq" data-url="${json.previous}">` 
    : "";

    $nextLink = 
    json.next
    ? `<img src="assets/flecha (1).png" class="flecha-der" data-url="${json.next}">` 
    : "";



    $links.innerHTML = $prevLink + `` + $nextLink;



  } catch (err) {
    console.log(err)
    let message = err.statusText  || "Ha ocurrido un pokerror al llamar a la API";
    $template += `<figure>
      <figcaption>${err.status} ${message}</figcaption>
                      </figure>` 
  }

}

d.addEventListener("DOMContentLoaded", (e)=>{
  loadPokemon(POKEapis)
})


d.addEventListener("click", (e)=>{
if (e.target.matches(".links img")) {
  loadPokemon(e.target.getAttribute("data-url"))
}
})