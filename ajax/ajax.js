const d = document;
! function () {
  const xhr = new XMLHttpRequest(),
        $xhr = d.getElementById("xhr"),
        $fragment = d.createDocumentFragment();
        xhr.addEventListener("readystatechange", (e)=>{
          if (xhr.readyState !== 4) return;
          console.log(xhr)
          if (xhr.status >= 200 && xhr.status < 300) {
             console.log("exito")
             let json = JSON.parse(xhr.responseText);
             console.log(json)

          json.forEach(el => {
            // console.log(`el nombre de la persona es ${el.name}, su numero de celular es ${el.phone}, su sitio web es ${el.website}`)
            const $li = document.createElement("li")
            $li.textContent = `el nombre de la persona es ${el.name}, su numero de celular es ${el.phone}, su sitio web es ${el.website}, su mail es ${el.email}`
            $fragment.appendChild($li)
          });
          $xhr.appendChild($fragment)

          }else{
              console.log("error")
               let message = xhr.statusText  || `Ha ocurrido un error`
              $xhr.innerHTML = `Error ${xhr.status} :${message}`
          }
        })
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
        xhr.send();
}()
;

! function() {
  const $fetch = d.getElementById("fetch"),
        $fragment = d.createDocumentFragment(); 


  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res)
    return res.ok
    ? res.json()
    : Promise.reject(res)
    })
    .then((json) => {
      console.log(json)
        json.forEach(el => {
          const $li = document.createElement("li")
          $li.innerText = `el nombre de la persona es ${el.name}, su numero de celular es ${el.phone}, su sitio web es ${el.website}, su mail es ${el.email}`;
          $fragment.appendChild($li)
          $fetch.appendChild($fragment)
        });
    })
  .catch((err) => {
    console.log(err)
      let message = err.statusText  || `Ha ocurrido un error`
              $fetch.innerHTML = `Error ${err.status} :${message}`
              console.log(message);
    })

  .finally(()=>{
    console.log("Esto se ejecuta independientemente")
  })
}();


(() =>{
    const $fetchAsyncAwait = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
    async function getData(){
        try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
        if(!res.ok){
            throw{status: res.status, text: res.statusText}
        }
        console.log(res, json)
        json.forEach(el => {
            const $li = document.createElement("li")
            $li.innerHTML = `el nombre de la persona es ${el.name}, su numero de celular es ${el.phone}, su sitio web es ${el.website}, su mail es ${el.email}`;
            $fragment.appendChild($li)
        });
        // $fragment.insertAdjecentHTML($fetchAsyncAwait)

      $fetchAsyncAwait.appendChild($fragment)
        //  $fetchAsyncAwait.insertAdjacentElement("afterbegin", $fragment);
    } 
    catch(err){
        let message = err.statusText || "Ocurrió un error";
        $fetchAsyncAwait.textContent = `Error número ${err.status} --- Mensaje: ${message}`
        console.log(err.status, message)
    }
    }
    getData();
})();




! function() {
  const $axios = d.getElementById("axios"),
        $fragment = d.createDocumentFragment();

        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
          console.log(res)
          res.data.forEach(el => {
            const $li = document.createElement("li")
            $li.textContent = `el nombre de la persona es ${el.name}, su numero de celular es ${el.phone}, su   sitio web es ${el.website}, su mail es ${el.email}`
            $fragment.appendChild($li)
            
          });
          $axios.appendChild($fragment)
        })
        .catch((err)=>{
          console.log("estamos en el catch", err.response) 
          //err.response devuelve un objeto de error, y err solo te da un mensaje de error ya hecho
          let message = err.response.statusText || `Un error picho`;
          $axios.innerHTML = `${err.response.status}, ${message}`
        })
        .finally(()=>{
          console.log("independientemente de axios")
        })
}() 


! function () {
  const $axiosAsync = d.getElementById("axios-async"),
        $fragment = d.createDocumentFragment();

       async function axiosAsyncAwait() {
         try {
           let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;


          json.forEach(el => {
            const $li = d.createElement("li");
            $li.textContent = `el nombre de la persona es ${el.name}, su numero de celular es ${el.phone}, su   sitio web es ${el.website}, su mail es ${el.email}`
            $fragment.appendChild($li)
          });
          $axiosAsync.appendChild($fragment)

         } catch (err) {
             console.log("estamos en el catch", err.response);
             console.log(err.response)
          let message = err.response.statusText || `Un error picho`;
          $axiosAsync.innerHTML = `${err.response.status}, ${message}`;
         }
          
        }
        axiosAsyncAwait()
}()