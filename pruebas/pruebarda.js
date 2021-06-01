// //EJERCICIO 11

// const factorial = (numberin = undefined) => {
//   if(numberin === undefined) return console.log("poneme un numero")

//   if(Math.sign(numberin) == -1) return console.log("el numero que ingresaste es negativo, necesitas uno positivo")

//   if (typeof numberin !== "number") return console.log("el valor que ingresaste nu es un numero")

//   if(numberin === 0) return console.log("no puedes poner el cero")


// let guardo = 1
//   while (numberin > 1) {
//    guardo = numberin * (numberin - 1)
//   }
//   console.log(`el factorial de ${numberin} es ${guardo}`)
// }
// factorial(6)

// //``````````````````````
// const factorialDos = (numberin2 = undefined)=>{
//   if(numberin2 === undefined) return console.log("poneme un numero")

//   if(Math.sign(numberin2) == -1) return console.log("el numero que ingresaste es negativo, necesitas uno positivo")

//   if (typeof numberin2 !== "number") return console.log("el valor que ingresaste nu es un numero")

//   if(numberin2 === 0) return console.log("no puedes poner el cero")

// let factorin = 1;

// for (let i = numberin2; i > 1; i--) {
//   factorin = factorin * i;
 
// }

// return console.log(`el factorial de ${numberin2} es ${factorin}`)

// }
// factorialDos(5)
// factorialDos(8)




// // //EJERCICIO 12
// // const primo = (numedo = undefined)=>{
// //   if(numedo === undefined) return console.log("poneme un numero")

// //   if(Math.sign(numedo) == -1) return console.log("el numero que ingresaste es negativo, necesitas uno positivo")

// //   if (typeof numedo !== "number") return console.log("el valor que ingresaste nu es un numero")

// //   if(numedo === 0) return console.log("no puedes poner el cero")

// //   if(numedo === 1) return console.log("no puedes poner el uno")

// // divisible = false;

// // for (let i = 2; i < numedo; i++) {
// //  if((numedo % i) === 0) {
// //  divisible = true;
// //  break
// // }
 
 
// // }

// // return console.log(`el factorial de ${numedo} es ${divisible}`)

// // }



//EJERCICIO 13
//  const parOImpar = (numedin = 0)=>{
//   if(numedin === undefined) return console.log("poneme un numero")
//   if (typeof numedin !== "number") return console.log("el valor que ingresaste nu es un numero")
//   if(numedin === 0) return console.log("no puedes poner el cero")
//   return (numedin % 2 === 0) 
//   ? console.log(`El número ${numedin} es par`)
//   : console.log(`El número ${numedin} es impar`)
//   }
//   parOImpar(4)
//   parOImpar(15)

// //EJERCICIO 14``````````````````````
// const convertirGrados = (grados = undefined, unidad = "") => {
//   if(unidad === undefined) return console.log("no ingresaste la unidad")
//   if(grados === undefined) return console.log("no ingresaste los grados")
//   if(typeof unidad !== "string") return console.log("no ingresaste la unidad")
//   if(typeof grados !== "number") return console.log("no ingresaste los grados")
//   if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.log("tienes que ingresar un solo valor")


//    if (unidad === "C"){
//      return console.log(`${grados}ºC = ${Math.round((grados * (9/5)) + 32)}ºF`) 
//     } else if (unidad === "F") { 
//       return console.log(`${grados}ºF = ${Math.round((grados * (9/5)) - 32)}ºC`)
//     }
// }
// convertirGrados()
// convertirGrados(100, "C")
// convertirGrados(32, "C")




// //EJERCICIO 15 ejercicio más difícil de curso
// const covertirNumero = (numero = undefined, base = undefined) => {
//   if(numero === undefined && base === undefined) return console.log("no ingresaste el número")
//   if(typeof numero !== "number" && typeof base !== "number") return console.log("no ingresaste un número a convertir o una base")
//   if(base !== 2 && base !== 10) return console.log("Solo podes ingresar los números 2 y 10 para la base")


//   if (base === 2) {
//    return console.log(`El número binario "${numero}" base ${base}, se convierte a ${parseInt(numero, base )} base 10`)
//   } else if (base === 10) {
//    return console.log(`El número decimal "${numero}" base ${base}, se convierte a ${(numero.toString(2))} base 2`)
//    }
// }

// covertirNumero(128, 2)




// //EJERCICIO 16

// const descuentos = (numb = undefined, descuento = undefined) => {
// if (numb === undefined || descuento === undefined) return console.log("Ingresa un número y un descuento a aplicar")
// if (typeof numb !== "number" || typeof descuento !== "number") return console.log("tiene que ser número")
// if (numb === 0) return console.log("no se puede el cero")
// if (Math.sign(numb) === -1) return console.log("no se pueden numeros negativos")
// if (descuento === 0) return console.log("no se puede el cero")
// if (Math.sign(descuento) === -1) return console.log("no se pueden numeros negativos")



// console.log(`${numb} menos el descuento del ${descuento}%, quedaria en: ${numb - (numb * descuento) / 100}`)
// }
// descuentos(1000, 20)

// //EJERCICIO 17
// const calcularAños = (fecha = undefined) => {
//   if(!fecha instanceof Date) return console.warn("INGRESA UNA FECHA VÁLIDA")
//   if(fecha === undefined) return console.warn("INGRESA UNA FECHA")


//   let fechaDeHoy = new Date().getTime() - fecha.getTime()
//       añosEnMS = 1000 * 60 * 60 * 24 * 365;
//       añosHumanos = Math.floor(fechaDeHoy / añosEnMS);


//     return(Math.sign(añosHumanos) === -1)
//       ? console.log(`Faltan ${Math.abs(añosHumanos)}años desde ${fecha.getFullYear()}`)
//       : (Math.sign(añosHumanos) === 1)
//         ?console.log(`Han pasado ${Math.abs(añosHumanos)} años desde ${fecha.getFullYear()}`)
//         :console.log(`estamos en el año actual ${fecha.getFullYear()}`)
// }

// calcularAños(new Date(2004, 10, 1))



// //EJERCICIO 18^^^^^^^
// const consonantesYVocales = (chain = "") => {
//   if(!chain) return console.log("ingresa una cadena")
//   if(typeof chain !== "string") return console.log("no ingresaste la cadena string");
 
//   let vocales = 0,
//    consonantes = 0;

//   chain = chain.toLowerCase();

//   for (const i of chain) {
//     if(/[aeiouáéíóú\s\d\W]/gi.test(i))
//     vocales++;
  

//     if(/[^aeiouáéíóú\s\d\W]/gi.test(i))
//     consonantes++;
  
//   }

//   return console.info({
//     chain,
//     vocales,
//     consonantes
//   })
// }
// consonantesYVocales("holaa")


// //EJERCICIO 19
// const validarNombre = (nombre = "") => {
//   if(!nombre) return console.warn("no ingresaste nombre valido")
//   if(typeof nombre !== "string") return console.warn("valor incorrecto")

//   let regExp = /^[A-Za-zuáéíóúÁÉÍÓÚñÑ\s]+$/g.test(nombre);

//   return (regExp)
//   ? console.log(`El nombre "${nombre}" es valido`)
//   : console.log(`El nombre "${nombre}" no es valido`)
// }

// validarNombre("agustina valentin")




// //EJERCICIO 19
// const validarEmail = (email = "") => {
//   if(!email) return console.warn("no ingresaste nombre valido")
//   if(typeof email !== "string") return console.warn("valor incorrecto")

//   let regExp = /[a-z0-9]+(.[_a-z0-9]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,15})/i.test(email);

//   return (regExp)
//   ? console.log(`El email "${email}" es valido`)
//   : console.log(`El email "${email}" no es valido`)
// }

// validarEmail("agustina.belen@gmail.com")





// //EJERCICIO 20
// const arreglo = (arregli = []) => {
//   if(!arregli instanceof Array) return console.warn("tienes que ingresar un arreglo")
//   if(arregli === undefined) return console.warn("tienes que ingresar un arreglo")
//   if(arregli.length === 0) return console.log("el arreglo está vacio, ingresa algo")
//   for (const num of arregli) {
//     if(typeof num !== "number"){
//       return console.log(``el ${arregli} no es un numero`)
//     }
//   }

// const newarregli = arregli.map(arregli => arregli * arregli)
// return console.info(`arreglo original: ${arregli} / arreglo potencia: ${newarregli}`)
// }

// arreglo([4, 16, 3, 4])


// //EJERCICIO 22

// const numeroMayorYMenor= (array = []) => {
// if(!array instanceof Array) return console.warn("tienes que ingresar un arreglo")
//   if(array === undefined) return console.warn("tienes que ingresar un arreglo")
//   if(array.length === 0) return console.log("el arreglo está vacio, ingresa algo")
//   for (const num of array) {
//     if(typeof num !== "number"){
//       return console.log(`el ${array} no es un numero`)
//     }
//   }
  
//  return console.log(`el numero mas chico es ${Math.min(...array)} y el grande es ${Math.max(...array)}` )

// }
// numeroMayorYMenor([2, 4, 5, 7, 7])







// //EJERCICIO 23
// const paresOImpares= (arrayobjeto = []) => {
// if(!arrayobjeto instanceof Array) return console.warn("tienes que ingresar un arreglo")
//   if(arrayobjeto === undefined) return console.warn("tienes que ingresar un arreglo")
//   if(arrayobjeto.length === 0) return console.log("el arreglo está vacio, ingresa algo")
//   for (const numi of arrayobjeto) {
//     if(typeof numi !== "number"){
//       return console.log(`el ${arrayobjeto} no es un numero`)
//     }
//   }


  
//  return console.log({
//    pares: arrayobjeto.filter(numi => numi % 2 === 0),
//    impares: arrayobjeto.filter(numi => numi % 2 !== 0)
//   })

// }
// paresOImpares([2, 4, 5, 7, 7])




// //EJERCICIO 24
// const ascendenteDescendiente= (numerandos = []) => {
// if(!numerandos instanceof Array) return console.warn("tienes que ingresar un arreglo")
//   if(numerandos === undefined) return console.warn("tienes que ingresar un arreglo")
//   if(numerandos.length === 0) return console.warn("el arreglo está vacio, ingresa algo")
//   for (const numin of numerandos) {
//     if(typeof numin !== "number"){
//       return console.log(`el ${numerandos} no es un numero`)
//     }
//   }


  
//  return console.log({
//    ascendientes: numerandos.map(el => el).sort(),
//    descendientes: numerandos.map(el => el).sort().reverse()
//   })

// }
// ascendenteDescendiente([2, 4, 5, 7, 7])





// //EJERCICIO 25
// const duplicados= (aday = []) => {
// if(!aday instanceof Array) return console.warn("tienes que ingresar un arreglo")
//   if(aday === undefined) return console.warn("tienes que ingresar un arreglo")
//   if(aday.length === 0) return console.log("el arreglo está vacio, ingresa algo")
//   for (const numin of aday) {
//     if(typeof numin !== "number"){
//       return console.log(`el ${aday} no es un numero`)
//     }
//   }
//  return console.log({
//    aday,
//    SinDuplicados: aday.filter((value, index, self) => self.indexOf(value) === index)})
// }
// duplicados([2, 4, 5, 7, 7])




// //EJERCICIO 26
// const promedios= (numeros = []) =>{
//   const paraReducir = (acumula, curenvalue) => acumula + curenvalue;
//   let pija = (numeros.reduce(paraReducir));
//   console.log(pija / (numeros.length))
// }
// promedios([6, 6, 6])



//EJERCICIO 27
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios. !!
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números. !!
//   - Valida que el título no rebase los 100 caracteres.!!
//   - Valida que el director no rebase los 50 caracteres.!!
//   - Valida que el año de estreno sea un número entero de 4 dígitos.!!
//   - Valida que el país o paises sea introducidos en forma de arreglo.!!
//   - Valida que los géneros sean introducidos en forma de arreglo.!!
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados.!!
//   - Crea un método estático que devuelva los géneros aceptados.!!
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.!!
//   - Crea un método que devuelva toda la ficha técnica de la película.!!
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.
// Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/
// class Pelicula  {
//   constructor({id, titulo, director, año, pais, genero, calificacion}){
//   this.id = id,
//   this.titulo = titulo,
//   this.director = director,
//   this.año = año,
//   this.pais = pais,
//   this.genero = genero,
//   this.calificacion = calificacion,
//   //métodos
//   this.validarId(id),
//   this.validarTitulo(titulo),
//   this.validarDirector(director),
//   this.validarAño(año),
//   this.validarPais(pais),
//   this.validarGeneros(genero),
//   this.validarCalificacion(calificacion);
// }



//                       static get generos(){
//                         return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History",  "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western" ]

//                       }

//                       static generosAceptados (){
//                         return console.info(`Los géneros aceptados son : ${Pelicula.generos.join(", ")} `)
//                       }



//                       validarCadena(propiedad, valor) {
//                         if(!valor)
//                         return console.log(`El valor de ${propiedad}"${valor}" esta vacio`);

//                         if(typeof valor !== "string") return console.warn("el valor no es una cadena de texto");
//                           return true;
//                       }
//                       validarNumero(propiedad, numero) {
//                         if(!numero) 
//                         return console.log(`El numero de ${propiedad}"${numero}" esta vacio`);

//                         if(typeof numero !== "number") 
//                         return console.warn("el valor no es una número");
//                           return true;
//                       }

//                       validarArray(propiedad, arreglo) {
//                         if(!arreglo) 
//                         return console.log(`El numero de ${propiedad}"${arreglo}" esta vacio`);

//                         if(!(arreglo instanceof Array)) 
//                         return console.warn("lo que ingresaste no es un arreglo");
//                           return true;
//                       }


//   validarId(id){
//     if(this.validarCadena("IMDB id", id)){
//     if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
//       return console.warn(`IMDB id ${id} debe tener 2 letras y 7 números`)
//       }
//     }
//   }

//   validarTitulo(titulo){
//     if(this.validarCadena("Título de la película", titulo)){
//       if(titulo.length > 50) {
//         return console.warn(`Tu título ${titulo} ha sobrepasado los 50 caractéres`)
//       }
//   } 
//   }

//   validarDirector(director){
//     if(this.validarCadena("Nombre del Director", director)){
//       if(director.length > 50) {
//         return console.warn(`El nombre del director "${director}" ha sobrepasado los 50 caractéres`)
//       }}}




//   validarAño(año){
//       if(this.validarNumero("Año de estreno", año)){
//       if(año === undefined) {
//       return console.warn("tienes que ingresar 4 dígitos del año de estreno de la película")}

//       if(!(/^([0-9]){4}$/.test(año))) { 
//         return console.warn(`El año de estreno ${año} no tiene 4 dígitos`)} 
//     }
//   }





//   validarPais(pais){
//     if(this.validarArray("País de origen", pais)){
//       for (const iterador of pais) {
//         if(typeof iterador !== "string") return console.error(`el pais "${pais}", tiene que ser una cadena de texto`)
//       }
//       }
//   }



//   validarGeneros(genero){
//     if(this.validarArray("Género de la película", genero)){
//       for (const iterador of genero) {
       
//         if(!(Pelicula.generos.includes(iterador))) {console.error(`El género ingresado "${genero}" no está entre los permitidos`)
//         Pelicula.generosAceptados()}
//       }
//       } 
//   }



//   validarCalificacion(calificacion){
//     if(this.validarNumero("Calificación de la película", calificacion)){
//       return(calificacion < 0 	|| calificacion > 10)
//       ? console.error("La calificación debe ser un número entre el 0 y el 10")
//       : this.calificacion = calificacion.toFixed(1);
//       }
//       }




//   fichaTecnica() {
//     console.info(`Ficha técnica: \nTítulo: "${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.año}"\nPaís: "${this.pais.join("-")}"\nIMDB id: "${this.id}"`)
//   }}
//                     misPelis = [
//                     {
//                       id:"tt0332280",
//                       titulo: "Diario de una pasión",
//                       director: "Nick Cassavetes",
//                       año: 2004,
//                       pais: ["Estados Unidos"],
//                       genero:["Romance"],
//                       calificacion: 10,
//                     },  


//                     {
//                       id:"tt0327597",
//                       titulo: "Coraline",
//                       director: "Henry Selick",
//                       año: 2009,
//                       pais: ["Estados Unidos"],
//                       genero:["Adventure" , "Fantasy" , "Mystery"],
//                       calificacion: 10, 
//                     },

//                     {
//                       id:"tt0241527",
//                       titulo: "Harry Potter y la Piedra Filosofal",
//                       director: "Chris Columbus",
//                       año: 2001,
//                       pais: ["Estados Unidos, Reino Unido"],
//                       genero:["Adventure" , "Fantasy" , "Mystery"],
//                       calificacion: 10,
//                     }

//                     ]
//                     misPelis.forEach(el => new Pelicula(el).fichaTecnica());
                    // diarioDeUnaPasion.fichaTecnica()


                    //FIN DE LOS EJERCICIOS !!!!!!!!!!!!!


// const temporizador = setTimeout(() => {
  
// }, timeout);


// //CALLBACK HELL EJEMPLO 1 DE MIRCHA EL FRAUDULENTO
// function cuadradoCallback(value, callback){
//   setTimeout(() => {
//     callback(value, value*value);
//   }, 2000);
// }
// cuadradoCallback(0, (value,result)=>{
// console.log("inicia callback");
// console.log(`${value} ${result}`);
//   cuadradoCallback(1, (value,result)=>{
//   console.log(`${value} ${result}`);
//     cuadradoCallback(2, (value,result)=>{
//     console.log(`${value} ${result}`);
//       cuadradoCallback(3, (value,result)=>{
//       console.log(`${value} ${result}`);
//         cuadradoCallback(4, (value,result)=>{
//         console.log(`${value} ${result}`);
// })
// })
// })
// })
// })




//CALLBACK EJEMPLO DE UN WASO DE POR AHI
// const timeOut = (milisegundos) => {
//   setTimeout(() => {
//     let segundos = milisegundos / 1000;
//     console.log(`han transcurrido ${segundos} segundos`)
//   }, milisegundos);
// }
// timeOut(3000);
// timeOut(4000);
// timeOut(5000);

// //EJERCICIO 1
// const pipo = (nombre) => {
// console.log(nombre.length)
// }
// pipo("hoal")

// //EJERCICIO 2
// const pipa = (palabra, numero) => {
//   let slice = palabra.slice(0, numero);
// console.log(`${palabra} va a quedar en: ${slice}`)
// }
// pipa("hola mundo", 4)



// //EJERCICIO 3
// const pipe = (string, separador) => {
//   console.log(`el texto ${string} se va a convertir en un arreglo separado por ${separador}`);
// console.log(string.split(separador));
// }
// pipe("matilda, matilde, pipo", ", ")


// //EJERCICIO 4
// const repetirTexto = (frase = "", catida = undefined) => {
//   console.log(frase.repeat(catida))
// }
// repetirTexto("HOLA QUE TAL ", 3)


// //EJERCICIO 5
// const darVuelta = (palabristica = "") => {
//   let darvueltita = palabristica.split(" ").reverse().join(" ");
//   console.log(darvueltita)
// }
// darVuelta("HOLA PICHO")


// //EJERCICIO 6
// const contarPalabras = (palabra = "", ocurrencia = "") => {
//   console.log(`la frase "${palabra}" tiene repetida la palabra ${ocurrencia} ${palabra.match(new RegExp(ocurrencia, "gi")).length} veces`)
// }
// contarPalabras("hola hola hola ¿Cómo estás?", "hola")


//  const buscarPalabra = (textillo = "", palabraEncontrada = "") => {
//  if (!textillo) return console.warn("tenés que ingresar un texto")
//  if (!palabraEncontrada) return console.warn("tenés que ingresar una palabra para que sea contada")

// let i = 0,
// contador = 0;
//  while (i !== -1) {
//    i = textillo.indexOf(palabraEncontrada, i)
//    if(i !== -1){
//      i++
//      contador++
//    }

//  }
//    return console.info(`La palabra ${palabraEncontrada} ha sido encontrada ${contador} veces`)
//  }
//  buscarPalabra("hola hola rdia hola vi", "hola")


//  //EJERCICIO 7
//  const palindromito = (palabra="") => {
//    (palabra === palabra.split("").reverse().join(""))
//    ?  console.log("si es un palimdromo")
//    :  console.log("no lo es");
//  }
//  palindromito("salaras")

//  //EJERCICIO 8
//  const borrarPartes = (frase = "", parteABorrar = "") => {
//    let frasiña = frase.replace(new RegExp(parteABorrar, "gi"), "");
//    console.log(`${frase}, va a quedar asi: "${frasiña}"`)
   
//  }
//  borrarPartes("hola como estas como como como", "como")


//  //EJERCICIO 9
//  const numeroAleatorio = () => {
//    let hola = Math.floor(Math.random() * (601 - 500) + 501 )
//    console.info(hola)
//  }
//  numeroAleatorio()


//  //EJERCICIO 10
//  const capicua = (numero) => {
//    let numba = numero.toString();
//    (numba === numba.split("").reverse().join(""))
//    ?  console.log("si es un capicua")
//    :  console.log("no lo es");
//  }
//  capicua(474)

//  //EJERCICIO 11
//  const capicuan = (numero) => {
   
//   let factorial = 1;
//     for (let i= numero; i > 1; i--) {
//       factorial = factorial * i;
//     }
//  }

//  capicuan(5)



//  function prueba(callback) {
//    callback("roberto");
//    console.log("aga")
//     callback("roberto");
//      callback("roberto");
//       callback("roberto");
//        callback("roberto");
//  }

//  function decirNombre(nombre) {
//    console.log(nombre);
   
//  }

 
//  prueba(decirNombre);




// //  const segundaCallback = (nombre, callback) => {
// //   callback(nombre);
// //  }

// //  segundaCallback("Maria", function(nombre) {
// //    console.log(`Este es un callback y este es un nombre: ${nombre}`);
// //  })

//  const sumaCallback = (num1, num2, callback) => {
//   callback(num1 + num2);
//  }

//   const cuadradoCallback = (num, callback) => {
//     callback(num*num);
//   }

//    const dividirCallback = (num, callback) => {
//     callback(num/2);
//   }


//   const restarCallback = (num, callback) => {
//     callback(num - 100);
//   }
  
  






  
// sumaCallback(3, 4, function(valorDeLaSuma) {
// console.log(`La suma da como resultado: ${valorDeLaSuma}`);
//         cuadradoCallback(valorDeLaSuma, function(valorDeCuadrado) {
//         console.log(`el cuadrado es ${valorDeCuadrado}`)
//             dividirCallback(valorDeCuadrado, function(valorDeDividir) {
//             console.log(`la division da  ${valorDeDividir}`)
//                 restarCallback(valorDeDividir, function(valorDeResta) {
//                 console.log(`si le restas 100, queda asi: ${valorDeResta}`)
//             });
//         });
//     });
// })




// // //CALLBACK HELL EJEMPLO 1 DE MIRCHA EL FRAUDULENTO
// function cuadradonCallback(value, callback){
//   setTimeout(() => {
//     callback(value, value*value);
//   }, Math.random() * 100);
// }
// cuadradonCallback(0, (value,result)=>{
// console.log("inicia callback");
// console.log(`${value} ${result}`);
//   cuadradonCallback(1, (value,result)=>{
//   console.log(`${value} ${result}`);
//     cuadradonCallback(2, (value,result)=>{
//     console.log(`${value} ${result}`);
//       cuadradonCallback(3, (value,result)=>{
//       console.log(`${value} ${result}`);
//         cuadradonCallback(4, (value,result)=>{
//         console.log(`${value} ${result}`);
// })
// })
// })
// })
// })




// const promesa = new Promise((resolve, reject) => {
//   let nombre =  "nanicho picho";
//   if(nombre !== "nanicho picho") reject(`El nombre ${nombre} esta mal.`);
//   else resolve(`El nombre si es ${nombre}.`)
// })

// promesa.then((resultado) => {
//   console.log(resultado)
//  }) .catch((error) => {
//   console.log(error)
//  })

// let nombri = "pingui";
// const promesitas = new Promise((resolve, reject) => {
//   if(nombri !== "pingui") reject("esta mal")
//   else resolve(nombri)
// })
// promesitas.then((hu)=>{
// console.log(hu)
//  }).catch((pi)=>{
//   console.log(pi)
// })



// sumaCallback = (num1, num2, callback) => {
// callback(num1 + num2);
// }
// sumaCallback(callback);


// async function promesitas(resolve, reject) {
//   try{
//     console.log("Inicio de async");
//     let objeto = sumaCallback();
//     console.log("luego del objeto")
//   }

//   catch{


//   }
// }
// promesitas()


// function variable() {
// let nombre = "no finalizado";

// setTimeout(() => {
//   nombre = "finalizado";
//   console.log(nombre)
//   }, 500);
// console.log(nombre)
// }
// variable();


// const valorDuplicado = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(typeof valor !== "number")
//       reject("el valor tiene que ser un numero");

//       resolve(valor * 2);
//     }, 1000);
//   })}

// valorDuplicado(4)
//   .then((resultado)=>{
//     console.log(resultado)
//   })
//   .catch((err)=>{
//     console.log(err)
// });



// const textarraco = (texto) => {
// return new Promise(resolve => {
// setTimeout(() => resolve(console.log(texto)), 1000);
// });
// };

// Promise.resolve()
// .then(()=> textarraco("texto 1"))
// .then(()=> textarraco("texto 2"))
// .then(()=> textarraco("texto 3"))
// .then(()=> textarraco("texto 4"))
// .then(()=> textarraco("texto 5"))
// .then(()=> textarraco("texto 6"));








//  function duplicados(valor) {
//   return new Promise(resolve => {
// setTimeout(() => resolve(valor * 2), 2000)
// });
// }

// async function asyncFuncion() {
//     const variable = await duplicados(2);
//       console.log(variable);
//     const variable2 = await duplicados(4);
//       console.log(variable2);
//     const variable3 = await duplicados(6);
//       console.log(variable3);
//     const variable4 = await duplicados(8);
//       console.log(variable4);
// }
// asyncFuncion()



// class Persona {
//   constructor(nombre, instagram){
//     this.nombre = nombre,
//     this.instagram = instagram;
//   }
// };

// const data = [
//   ["lucas dalto", "@soydalto"],
//   ["nanicho picho", "@picho"],
//   ["benillo", "@guafguaf"],
//   ["killita", "@kidita"],

// ];

// const personas = [];

// for (let i = 0; i < data.length; i++) {
//   personas[i] = new Persona(data[i][0], data[i][1]);
// }

// console.log(personas)





// const obtenerPersona = (id) => {
//   return new Promise((resolve, reject)=>{
//     if (personas[id] === undefined) reject("el nombre no esta definido");
//     else resolve(personas[id])
//   })}




// const obtenerInstagram = (id) => {
//    return new Promise((resolve, reject)=>{
//     if (personas[id].instagram === undefined) reject("el insta no esta definido");
//     else resolve(personas[id].instagram)
//   })}



// obtenerPersona(2).then((persona)=>{
//   console.log(persona.nombre);
//   return obtenerInstagram(2)
// }).then((insta)=>{
//     console.log(insta);
//   }).catch((err)=>{console.log(err)})


//   const SALUDAR = Symbol()
//   const NOMBRE = Symbol()

//   const persona = {
//     [NOMBRE]: "Agus",
//     [SALUDAR]: function() {
//     console.log("holas")
//     }
//   }

// console.log(persona)
// persona.NOMBRE = "valentin"
// console.log(persona)
// persona[SALUDAR]()
// //las funciones se llaman sin console log

// console.log(Object.getOwnPropertySymbols(persona))


// //SET
// const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// set.add("holarda");
// console.log(set)
// console.log(set.size)
// set.delete()
// console.log(set)
// console.log(set.has())
// set.clear()
// console.log(set)



// //para recorrer
// for (const numbin of set) {
//   console.log(numbin)}

// //para recorrer 2
//   set.forEach(hola => {
//     console.log(hola)
//   });


  
//   const buckbeak = Array.from(set)
//   console.log(buckbeak[4])
//   console.log(buckbeak[10])
//   console.log(buckbeak[9])
//   console.log(buckbeak[10])




//   //MAPAS
//   const mapa = new Map()
//   mapa.set(19, "diecinueve")
//   console.log(mapa)





//   const mapa2 = new Map([
//   ["nombre", "kenai"]
//   ])
//   console.log(mapa)
  


// //   let iterador = iterable();
// //   console.log(iterador.next())

// // const arr = [...iterable()];
// // console.log(arr)

// const iterable = new Map();

// iterable.set("hola","hola")
// iterable.set("mimi","mimi")
// iterable.set("pipi","pipi")
// iterable.set("ods","ods")
// iterable.set("aa","aa")
// console.log(iterable)


// const iterador = iterable[Symbol.iterator]()
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());

// let iterator = iterador.next();

// while (!iterator.done) {
// console.log(iterator.value);
//  iterator = iterador.next();
// }










// function cuadrado(valor) {
//   setTimeout(() => {
//     return console.log({valor, resultado: valor*valor})
//   },  1000);

// }
//   function* generador() {
//     console.log("inicia");
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
//     yield cuadrado(5);
//     console.log("finaliza");
//   }

//   let gen = generador();

//   for (const y of gen) {
//     console.log(y)
//   }
  


  //PROXIES
//   const individuo = {
//     nombre: "",
//     apellido: "",
//     edad: 0
// }
//   const manejador = {
//     set(obj, prop, valor){
//       if(Object.keys(obj).indexOf(prop) === -1){
//         return console.error(`la propiedad ${prop} no se encuentra en el objeto original`)
//       }
//       if((prop === "nombre" || prop === "apellido") && !(/^[A-Za-zuáéíóúÁÉÍÓÚñÑ\s]+$/g.test(valor))){
//         return console.log(`la propiedad ${prop} solo acepta letras y espacios en blanco`)
//       }

//       obj[prop] = valor;
//     }
//   }

//   const nanicho = new Proxy(individuo, manejador);{
//     nanicho.nombre = "Nanicho",
//     nanicho.apellido = "Picho",
//     nanicho.edad = 16
//     // nanicho.insta = "@benitokaa"
//   }
//   console.log(nanicho)
//   console.log(individuo)
//   console.log(manejador)



// let aleatorio =Math.round(Math.random()*100 + 5)
//   const objUsuario = {
//     [`id_${Math.round(Math.random()*100 + 5)}`]
//   }
// console.log(this)
// console.log(window)
// console.log(this === window)



// this.nombre = "contexto global"
// console.log(this.nombre)




// function imprimir() {
//   console.log(this.nombre)
// }
// imprimir()




// const obj1 = {
//   nombre: "contexto objeto 1",
//   imprimir: function() {
//   console.log(this.nombre)
// }
// }
// obj1.imprimir()






// const obj2 = {
//   nombre: "contexto objeto 2",
//   imprimir
//   //la hace ejecutar acá, en este objeto
// }
// obj2.imprimir()



// const obj3 = {
//   nombre: "contexto objeto 3",
//   imprimir: () => {
//     console.log(this.nombre)
//     //las arrow usan el contexto global
//   }

// }
// obj3.imprimir()



// function Persona(nombre) {
//   this.nombre = nombre;
  
//   //las funciones anónimas necesitan el nombre defindo dentro de ellas
//   // return function() {
//   //   console.log(this.nombre)
//   // }


//   //las arrow rompen el scope en el que están y van al más cercano
//   return () => {
//      console.log(this.nombre)
//   }
// }
// let nanicho = new Persona("nanicho")
// nanicho()


// //prueba del bind 
// const pina = {
//   nombre: "jon",
//   apellido: "mircha",
//   edad: 35,
//   saludar: function(edad) {
//     console.log(`holarda ${this.nombre} ${this.apellido} de ${edad} años`)
//   }
// }
// pina.saludar(25)



// const pino = {
//   saludar: pina.saludar.bind(pina)
// }
// pino.saludar(25)

// //programa que habla
// let texto = "duce nani duce duce nai nani pichito nanananicho picho";
// const hablar = (texto) => speechSynthesis.
// speak(new SpeechSynthesisUtterance(texto));
// hablar(texto);



// //CLASES JAVASCRIPT
// class Node {
//   constructor(data){
//    this.data = data;
//    this.next = null;
//   }
// }

// class List {
//   constructor(){
//    this.head = null;
//   }
//   push(data){
//     let node = new Node(data)
//   if (this.head === null) {
//     this.head = node;
//   }
//   else {
//     this.last.next = node;
//   }
//   this.last = node;
//   }
// }
// const myList = new List()
// myList.push(3)
// myList.push(4)
// myList.push(5)
// myList.push(2)
// console.log(myList)

















//DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!!!!
//imprimir dom
console.log(document)
//imprimir head
console.log(document.head)
//imprimir body
console.log(document.body)
//imprimir todo, head y body con etiqueta html
console.log(document.documentElement)
//imprimir el doctype
console.log(document.doctype)
//imprimir utf
console.log(document.charset)
//imprimir title
console.log(document.title)
//imprimir enlace
console.log(document.links)
//imprimir imágenes
console.log(document.images)
//imprimir formularios
console.log(document.forms)
//imprimir estilo
console.log(document.styleSheets)
//imprimir scripts
console.log(document.scripts)
//get selection 
setTimeout(() => {
  console.log(document.getSelection().toString())
}, 3000);
//escribir html: se escriba abajo 
document.write("<h2>hola mundo</h2>")


console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
//los tres de arriba no se usan, asi que a olvidarseeee

console.log(document.getElementById("menu"))


//tenes que especificar pero podes seleccionar el tipo que quieras de los anteriores
console.log(document.querySelector("#menu"))
//te va a traer el primero
console.log(document.querySelector("a"))
//te va a traer todos, reemplaza a get element by tagname y classname
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)
//el console log lo tiene dentro del método forEach
document.querySelectorAll("a").forEach((el) => {console.log(el)})

console.log(document.querySelectorAll(".card")[2])

console.log(document.querySelectorAll("ul li")[3])

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))

console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))


document.documentElement.lang = "en"
console.log(document.documentElement.lang)


document.documentElement.setAttribute("lang", "es") 
console.log(document.documentElement.lang)
// otra forma de imprimirlo
// console.log(document.documentElement.getAttribute("lang"))







//para variables que tengan que ver con elementos del dom, es usa $ antes del nombre.
const $linkDom = document.querySelector(".link-dom");

$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://youtube.com");

console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));



//data atribute cambiarlo.
console.log($linkDom.getAttribute("data-description"));
 console.log($linkDom.dataset);
 console.log($linkDom.dataset.description);
 $linkDom.setAttribute("data-description", "objeto modelo");
 console.log($linkDom.dataset.description);

//acceder a estilos.
console.log($linkDom.style)
//la palabra literal, aqua
console.log($linkDom.style.backgroundColor)
console.log($linkDom.style.color)
console.log($linkDom.getAttribute("style"))
console.log(window.getComputedStyle($linkDom))
//te manda rgb
console.log(window.getComputedStyle($linkDom).getPropertyValue("color"))
//se escribe con guión y minúscula, sino no anda.
console.log(window.getComputedStyle($linkDom).getPropertyValue("background-color"))

$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.setProperty("text-align", "center");
$linkDom.style.setProperty("display", "block");
$linkDom.style.width = "50%";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "10px";
$linkDom.style.borderRadius = "20%";



const $html =document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")


    $body.style.backgroundColor = varDarkColor;
    $body.style.color = varYellowColor;



$linkDom.style.setProperty("--yellow-color", "red");



document.querySelector("--dark-color")



$linkDom.style.setProperty("background-color", "green")
$linkDom.getAttribute("background","green")
