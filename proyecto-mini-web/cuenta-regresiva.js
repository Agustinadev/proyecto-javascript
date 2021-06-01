// export function countDown() {
//      let end = new Date('05/30/2021 9:30 AM');

//    let second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//      day = hour * 24,
//     timer;

//         let now = new Date(),
//         distance = end - now;

//        if (distance < 0) {

//            clearInterval(timer);
//            document.getElementById('countdown').outerHTML = '<h3>EXPIRED!</h3>'; return  } 


//           let days = Math.floor(distance / day),
//               hours = Math.floor((distance % day) / hour),
//               minutes = Math.floor((distance % hour) / minute),
//               seconds = Math.floor((distance % minute) / second);

//       document.getElementById('countdown').innerHTML = `${days} dias,  ${hours} horas, ${minutes} minutos y ${seconds} segundos` ;

//        timer = setInterval(countDown, 1000);
// }


//CODIGO LETAL