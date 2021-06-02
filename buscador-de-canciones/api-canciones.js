const d = document,
      $form = d.getElementById("song-search"),
      $loader = d.querySelector(".loader"),
      $error = d.querySelector(".error"),
      $main = d.querySelector("main"),
      $artist = d.querySelector(".artist");
  
      $form.addEventListener("submit", async (e)=>{
        e.preventDefault();
        try {
          $loader.style.display = "block";
          let artist = e.target.artist.value.toLowerCase(),
              $artistTemplate = "",
              artistAPI = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
              artistFetch = fetch(artistAPI),
              [artistRes] = await Promise.all([artistFetch]),
              artistJson = await artistRes.json();
         
              console.log(artistRes)
              console.log(artistJson)
              if (artistJson.artists === null) {
                $artistTemplate = `<h2>no existe el interprete <mark>${artist}</mark></h2>`
              }else{
                let artist = artistJson.artists[0];
                $artistTemplate = `<h3>${artist.strArtist}</h3>
                <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
                <p>${(artist.intBornYear || "Sin info de cuando comenzó")}-${artist.intDiedYear || "está presente"} </p>
                <p>${artist.strCountry}</p>
                <p>${artist.strGenre}- ${artist.strStyle}</p>
                <a href="https://${artist.strWebsite}" target="_blank">Sitio web</a>
                <p>${(artist.strBiographyES || "Sin biografia")}</p>`                    
              }

              $loader.style.display = "none";
              $artist.innerHTML = $artistTemplate
              



        } catch (err) {
          console.log(err)
          let message = err.statusText  || "Ocurrió un error picho";
          $error.innerHTML =`<p>${err.status}: ${message}</p>`
        }
      })