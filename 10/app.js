// checkear si los números de un array hacen una parábola es decir:
// primero tienen que ascender hasta llegar al punto más alto
// luego tienen que descender
// y no puede volver a ascender

function checkJump(heights) {
  let pila = [];
  let i = 0;
  heights.forEach(element => {
    // console.log(element);
    if(i>0 && (element > heights[i-1]) && pila[pila.length-1]!='S'){
      pila.push("S");
    }
    if(i>0 && (element < heights[i-1]) && pila[pila.length-1]!='B'){
      pila.push("B");
    }
    i++;
  });
  // console.log(pila);
  return pila.length == 2 && pila[0]=='S' && pila[1]=='B'
}


const heights = [1, 3, 4, 4, 6, 11, 8, 7, 7, 5, 2];
// const heights = [2, 2, 2, 2];
// const heights = [1, 2, 1, 2];
// const heights = [-2,-1,0,-1,-2];

console.log(checkJump(heights));