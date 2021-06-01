const d = document,
      n = navigator,
      w = window;
export default function getGeolocation(id) {
  const $id = d.getElementById(id),
  t = d.createElement("h3"),
        options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximunAge: 0,
        },
        
        success = (position) => {
          console.log(position)
          const coords = position.coords,
                latitude = coords.latitude,
                longitude = coords.longitude;
                
                t.textContent = `Tu ubicación`
                $id.insertAdjacentElement( "beforebegin", t)
                

                $id.innerHTML = `<h3><mark>Latitud: ${latitude}</mark></h3>
                <h3><mark>Longitud: ${longitude}</mark></h3>
                <a href="https://google.com/maps/@${latitude}, ${longitude},4z" rel= noopener target= _blank >ver en maps</a>`
                
        },
        error = (err) => {
          console.log(err)
        };
      
n.geolocation.getCurrentPosition(success, error, options)

}