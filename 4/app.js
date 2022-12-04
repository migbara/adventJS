
//Dado un array de cajas con alto, ancho y largo, determinar si se pueden empaquetar todas las cajas en una sola
function fitsInOneBox(boxes) {
  let cabe = true;

  for (let i = 0; i < boxes.length; i++) {
    const el1 = boxes[i];
    for (let j = i+1; j < boxes.length; j++) {
      const el2 = boxes[j];
      if( (el1.l > el2.l && el1.w > el2.w && el1.h > el2.h) || (el1.l < el2.l && el1.w < el2.w && el1.h < el2.h) ) {
        //Si todo es menor o todo es mayor, una cabe dentro de la otra 
      }
      else{
        cabe = false;
      }
    }
  }

  return cabe;
}

//Con foreach, parece que los for penalizan en el puntaje
function fitsInOneBox2(boxes) {
  let i = 0;
  let cabe = true;
  boxes.forEach(el1 => {
    boxes.slice(i+1,boxes.length).forEach(el2 => {
      if( (el1.l <= el2.l || el1.w <= el2.w || el1.h <= el2.h) && (el1.l >= el2.l || el1.w >= el2.w || el1.h >= el2.h) ) {
        cabe = false;
      }
    });
    i++;
  });
  return cabe;
}

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 }
// ];

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 }
// ];

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
];

console.log(fitsInOneBox2(boxes));
