const d = document,
      $main = d.querySelector("main"),
      $provincias = d.querySelector(".provincias"),
      $departamentos = d.querySelector(".departamentos");
      
const apiArgentina = async () => {
  try {
    let res = await fetch("https://apis.datos.gob.ar/georef/api/provincias"),
        json = await res.json();

    if (!res.ok) {throw{status: res.status, statusText: res.status}}

    json.provincias.forEach(el => {
      let $options = d.createElement("option");
      $options.textContent = el.nombre;
     $provincias.appendChild($options)
    });


} catch (err) {
  let message = err.statusText || "Ocurrió un error picho";
  $main.innerHTML = `error ${err.status}: ${message}`
}
}




async function dep(provincias) {
  try {
    let res = await fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincias}&campos=id,nombre&max=100`),
    json = await res.json();
   
    if (!res.ok) {throw{status: res.status, statusText: res.status}}
    

    let $options = d.createElement("option"); 

      json.departamentos.forEach(el => {
        $options += `<option value="">${el.nombre}</option>`;
      });
      $departamentos.innerHTML = $options
      
      
    } catch (err) {
      let message = err.statusText || "Ocurrió un error picho";
      $main.innerHTML = `error ${err.status}: ${message}`
  }
}





d.addEventListener("DOMContentLoaded", apiArgentina)

$provincias.addEventListener("change", (e)=>{
  dep(e.target.value)
  $departamentos.classList.remove("none")
})
d.addEventListener("click", (e)=>{
  if (e.target.matches(".provincias") && e.target.value === "Elegi una provincia") {
    $provincias[0].remove()
  }
  if (e.target.matches(".departamentos") && e.target.value === "Elegi un departamento") {
    $departamentos[0].remove()
  }
})
