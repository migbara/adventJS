
//Dado un array de palabras packOfGifts, hallar el peso (suma de las longitudes de las palabras)
//Dado un array de palabras reindeers, hallar la capacidad (suma de las longitudes de las palabras * 2)
//Calcular capacidad / peso
function distributeGifts(packOfGifts, reindeers) {

  let peso = 0;
  packOfGifts.forEach(element => {
    peso += element.length;
  });
  
  let capacidad = 0;
  reindeers.forEach(element => {
    capacidad += element.length * 2;
  });
  return Math.floor(capacidad / peso);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

console.log(distributeGifts(packOfGifts,reindeers));
