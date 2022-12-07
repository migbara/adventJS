
//Buscar elementos que solo se encuentren una vez
function getGiftsToRefill(a1, a2, a3) {
  let a1u = [...new Set(a1)];
  let a2u = [...new Set(a2)];
  let a3u = [...new Set(a3)];
  
  // let all =  a1u.concat(a2u,a3u);

  return a1u.concat(a2u,a3u).filter(element => {
    return a1.includes(element) + a2.includes(element) + a3.includes(element) == 1;
  });
}

const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];
console.log(getGiftsToRefill(a1,a2,a3));
