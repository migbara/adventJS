
//Se trata de saber el tramo más largo que hay de 0s en un array de 0s y 1s teniendo en cuenta que es cíclico
function countTime(leds){
  // console.log(leds);
  let cont = 0;
  let tramos = [];
  for (let i = 0; i < leds.length; i++) {
    if ( (leds[i] == 0) ){
      cont++;
    }
    else{
      if(cont>0){
        tramos.push(cont);
        cont = 0;
      }
    }
  }
  if(cont>0)
    tramos.push(cont);
  // console.log(tramos);
  let nuevoTramo = '';
  if((leds[0] == 0) && (leds[leds.length-1]==0))
    nuevoTramo = tramos[0] + tramos[tramos.length-1];
  if(nuevoTramo)
    tramos.push(nuevoTramo);

  // console.log(tramos);
  if(tramos.length>0)
    return Math.max(...tramos) * 7;
  else
    return 0;
}


// const leds = [0, 1, 1, 0, 1];
// const leds = [1, 1, 1, 1, 1];
// const leds = [0, 1, 1, 0, 0, 0, 0, 1, 0];
const leds = [1, 1, 0, 0, 0, 0];
console.log(countTime(leds));