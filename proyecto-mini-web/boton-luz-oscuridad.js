export default function dark(boton, datadark, dataspecial, datasvg) {
  const d = document,
        ls = localStorage,
      $selectores = d.querySelectorAll("[data-dark]"),
        $selectoresSpecial = d.querySelectorAll("[data-special]"),
        $selectoresSvg = d.querySelector("[data-svg]"),
        $moon =  d.querySelector(".oscuridad"),
        $light =  d.querySelector(".luz");
        console.log($selectores);
        
        
        const darkMode = () => {
          $selectores.forEach(e => {
            e.classList.add(datadark)
          });
          $selectoresSpecial.forEach(e => {
            e.classList.add(dataspecial)
          });

          
          
            $selectoresSvg.classList.add(datasvg)
         
            
         
          
     
       
    
     $light.classList.add("hidden")
     $moon.classList.remove("hidden")
     localStorage.setItem("theme", "dark")
  }

const lightMode = () => {
 $selectores.forEach(e => {
       e.classList.remove(datadark)
     });
     $selectoresSpecial.forEach(e => {
       e.classList.remove(dataspecial)
     });
      $selectoresSvg.classList.remove(datasvg)
     
     $light.classList.remove("hidden")
     $moon.classList.add("hidden")
     localStorage.setItem("theme", "light")
}



  d.addEventListener("click", (e)=>{
  if (e.target.matches(`${boton} *`)) {
   if (e.target.matches(".luz")) {
     darkMode()
   }
   if (e.target.matches(".oscuridad")) {
     lightMode()
   }
  }
  })

  d.addEventListener("DOMContentLoaded", (e)=>{
   if (ls.getItem("theme") === null) {
     ls.setItem("theme", "light")
   }


   if (ls.getItem("theme") === "light") {
      lightMode()
   }


   if (ls.getItem("theme") === "dark") {
      darkMode()
      
   }
  })
}
