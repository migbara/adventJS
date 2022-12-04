// ESTA FUE MI PRIMERA IDEA

// function wrapping(gifts) {

//   const result = [];

//   gifts.forEach(element => {

//     let regalo = "";

//     const length = element.length;
//     // console.log(length);

//     let str = "";
//     for (let i = 0; i < length+2; i++) {
//       str = str + "*";
      
//     }
//     // console.log(str);

//     regalo = str + "\n" + "*" + element + "*" + "\n" + str;

//     result.push(regalo)
//   });

//   return result;
// }

// LUEGO HICE ESTO VIENDO ALGO DE MAP Y USANDO LA OPCION REPEAT
function wrapping(gifts) {
  return gifts.map( gift => "*".repeat((gift.length + 2)) + "\n" + "*" + gift + "*" + "\n" + "*".repeat((gift.length + 2)))
}

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
