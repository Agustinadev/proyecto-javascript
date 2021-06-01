const d = document,
      $shows = d.getElementById("shows"),
      $template = d.getElementById("show-template").content,
      $fragment = d.createDocumentFragment();


      d.addEventListener("keypress", async (e)=>{
      if (e.target.matches("#search")) {
        if (e.key === "Enter") {
          try {
            $shows.innerHTML = `<img src="assets/puff.svg" alt="">`
            let query = e.target.value.toLowerCase(),
                api =  `http://api.tvmaze.com/search/shows?q=${query}`,
                res = await fetch(api),
                json = await res.json()
                console.log(json)
                if (!res.ok) throw { status: res.status, statusText: res.statusText}

                if (json.length === 0) { $shows.innerHTML = `<h2>No existen resultados de búsqueda para <mark>${query}</mark></h2>`} else {
                  json.forEach(el => {
                    $template.querySelector("h3").textContent = el.show.name;

                    $template.querySelector("img").src = el.show.image.medium
                    ? el.show.image.medium
                    : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"

                    $template.querySelector("img").alt = el.show.name

                    $template.querySelector("div").innerHTML = el.show.summary
                    ? el.show.summary
                    : `Sin descripción` 

                     $template.querySelector("a").href = el.show.url
                     ? el.show.url
                     : `#`

                     $template.querySelector("a").target = el.show.url
                     ? "_blank"
                     : `_self`

                      $template.querySelector("a").textContent = el.show.url
                     ? "Ver más..."
                     : ``

                    let $clone = d.importNode($template, true)
                    $fragment.appendChild($clone)
                  });
                  $shows.innerHTML = ``
                  $shows.appendChild($fragment)
                }


          } catch (err) {
            let message = err.statusText  || "ocurrio error";
            $shows.innerHTML = `${err.status}: ${message}`
          }
        }
      }
      })