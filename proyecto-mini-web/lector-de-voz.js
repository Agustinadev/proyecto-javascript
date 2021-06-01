const d = document,
      w = window;


export default function lectorVoz() {
  const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speechBoton = d.getElementById("speech-boton"),
        speechMessage = new SpeechSynthesisUtterance();
        let voces = [];
        
        d.addEventListener("DOMContentLoaded", (e)=>{
          w.speechSynthesis.addEventListener("voiceschanged", (e)=>{
            voces = w.speechSynthesis.getVoices()
            console.log(voces)
             
            voces.forEach(el => {
              const $option = d.createElement("option");
              $option.value = el.name;
              $option.textContent = `${el.name} ${el.lang}`
              $speechSelect.appendChild($option)
            });
          })
  })
   d.addEventListener("change", (e)=>{
     if (e.target === $speechSelect) {
       speechMessage.voice = voces.find((voice) => 
         voice.name === e.target.value);

        }
        console.log(speechMessage)
      })
      
      d.addEventListener("click", (e)=>{
if (e.target === $speechBoton) {
  speechMessage.text = $speechTextarea.value;
  w.speechSynthesis.speak(speechMessage)
  
}
console.log($speechTextarea)
console.log($speechBoton)
      })
      
}