const d = document,
      w = window;

export default function video() {
//     const $video = d.querySelectorAll("video[data-video]"),
          
    
//        cb = (entries) =>{
//       // console.log(entries)
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.play()
//         } else{
//           entry.target.pause()
//         }

//         w.addEventListener("visibilitychange", ()=>{
//           d.visibilityState === "visible"
//           ?entry.target.play()
//           :entry.target.pause()
//         })
//       });

//     }

// const observer = new IntersectionObserver(cb, {
//      threshold: [0.5],
//   })
  
//   $video.forEach((el) => {
//     observer.observe(el);
    
//   });
  
const $video = d.querySelector(".vidio")

const callback = (entries) => {
  if (entries[0].isIntersecting) {
    $video.play()
  } else{
    $video.pause()
  }
  
  d.addEventListener("visibilitychange", ()=>{
     if (d.visibilityState === "visible") {
     if ($video.isIntersecting) {
    $video.play()
  }
    } else {
      $video.pause()
    }
  })
}


const observer = new IntersectionObserver(callback, {
threshold : .5
})
observer.observe($video)
}