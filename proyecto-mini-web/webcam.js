const d = document,
      n = navigator,
      w = window;
export default function webcam(id) {
  const $video = d.getElementById("webcam")
  // console.log(n.mediaDevices.getUserMedia)
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices.getUserMedia({video:true, audio: false}).then((stream)=>{
        console.log(stream);
        $video.srcObject = stream;
        $video.play()
      }).catch((err)=>{ 
        $video.insertAdjacentHTML("afterend", `<h3><mark>¡Sucedió el siguiente error! ${err}</mark></h3>`)
      console.log(`¡Sucedió el siguiente error! ${err}`)})
  }
}