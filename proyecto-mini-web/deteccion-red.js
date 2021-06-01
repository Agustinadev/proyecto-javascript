const d = document,
      n = navigator,
      w = window;
export default function networkStatus() {
const isOnline = () =>{
  const $div = d.createElement("div")


  if (n.onLine) {
    $div.textContent = "Conexión reestablecida";
    $div.classList.add("online");
    $div.classList.remove("offline");
  } else{
     $div.textContent = "Conexión perdida";
    $div.classList.add("offline");
    $div.classList.remove("online");
  }

  d.body.insertAdjacentElement("afterbegin", $div)
  setTimeout(() => {
    d.body.removeChild($div)
  }, 2000);
}





  w.addEventListener("online",(e) => isOnline())
  w.addEventListener("offline", (e)=> isOnline())
 
}