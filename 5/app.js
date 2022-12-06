
//Dado un array de regalos en ciudades, un entero con el límite de regalos y otro entero de límite de ciudades
//calcular el número máximo de regalos que se pueden repartir en las ciudades cubriendo siempre el número de regalos que se deben dejar en cada ciudad
// y sin superar el límite máximo de regalos totales, y el número máximo de ciudades
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  
  
  let sliceArray = giftsCities;
  let mincont = maxGifts;

  while (sliceArray.length > 0 && mincont > 0){
    let max = maxCities;
    let cont = maxGifts;
    sliceArray.forEach(el => {
      // console.log(max,cont,el,mincont,sliceArray);
      if(max > 0 && cont > 0){
        if(el <= cont){
          cont -= el;
          max--;
        }
      }
    });
    if (cont < mincont)
      mincont = cont;
    // console.log(maxGifts - mincont);
    sliceArray = sliceArray.slice(1);
  }
  
  return (maxGifts - mincont);
}

//Intento por hacer una función recursiva - pero no funciona
function getMaxGiftsR(giftsCities, maxGifts, maxCities) {

  const recursiveFunction = (giftsCities, maxGifts, maxCities, maxValue) => {
    if(maxCities <= 0 || maxGifts <= 0){
      return 0;
    }
    else{
      if(giftsCities.length == 1){
        if(giftsCities[0] > maxGifts)
          return 0;
        else
          return Math.max(giftsCities[0],maxValue);
      }
      else{
        if(giftsCities[0] <= maxGifts)
          return giftsCities[0] + recursiveFunction(giftsCities.slice(1),maxGifts-giftsCities[0],maxCities-1)
        else
          return recursiveFunction(giftsCities.slice(1,giftsCities.length),maxGifts,maxCities);
      }
    }
  }
}

// const giftsCities = [12, 3, 11, 5, 7];
// const maxGifts = 20;
// const maxCities = 3;
// console.log(getMaxGifts(giftsCities, maxGifts, maxCities));
// console.log(getMaxGiftsR(giftsCities, maxGifts, maxCities));


// console.log(getMaxGifts([50], 15, 1)); // 0
// console.log(getMaxGifts([50], 100, 1)); // 50
// console.log(getMaxGifts([50, 70], 100, 1)); // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
// console.log(getMaxGifts([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15, 15)); // 15
// console.log(getMaxGifts([1], 1, 1)); // 1

// console.log(getMaxGiftsR([50], 15, 1)); // 0
// console.log(getMaxGiftsR([50], 100, 1)); // 50
console.log(getMaxGiftsR([50, 70], 100, 1)); // 70
// console.log(getMaxGiftsR([50, 70, 30], 100, 2)); // 100
// console.log(getMaxGiftsR([50, 70, 30], 100, 3)); // 100
// console.log(getMaxGiftsR([50, 70, 30], 100, 4)); // 100
// console.log(getMaxGiftsR([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15, 15)); // 15
// console.log(getMaxGiftsR([1], 1, 1)); // 1


