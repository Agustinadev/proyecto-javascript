const d = document,
      $main = d.querySelector("main");


fetch("javascript.md")
.then((res) => {
  return res.ok
  ? res.text()
  : Promise.reject(res)  
})
  .then((text) => {
    console.log(text)
    $main.innerHTML = new showdown.Converter().makeHtml(text)
  })
  .catch((err) => {
    console.log(err)
    let message = err.statusText  ||  "Ha ocurrido un error";
    $main.innerHTML = `<h2>Error ${err.status}: ${message}</h2>`
  })