
function checkPart1(part) {
  let palindromo = true;
  // for (let i = 0; i < (Math.floor(part.length/2)); i++) {
  let i = 0;
  while((i < Math.floor(part.length/2)) && palindromo){
    // console.log(i);
    // console.log(part.substr(i,1));
    // console.log(part.substr(-(i+1),1));
    if(part.substr(i,1) != part.substr(-(i+1),1)){
      palindromo = false;
    }
    i++;
  }
  // console.log(palindromo);
  if(!palindromo && (part.length > 2)){
    //Probando a quitar 1 letra
    let first_part, second_part = '';
    let i = 0;
    while (i < part.length && !palindromo){
    // for (let i = 0; i < part.length; i++) {
      let pal = true;
      if(i>0)
        first_part = part.slice(0,i);
      else
        first_part = '';
      if(i<(part.length-1))
        second_part = part.slice(i+1);
      else
        second_part = '';
      const part2 = first_part.concat(second_part);
      // console.log(part2);
      let j = 0;
      while((j < Math.floor(part2.length/2)) && pal){
        // console.log(j);
        // console.log(part2.substr(j,1));
        // console.log(part2.substr(-(j+1),1));
        if(part2.substr(j,1) != part2.substr(-(j+1),1)){
          pal = false;
        }
        j++;
      }
      palindromo = pal;
      i++;
    }
  }
  
  return palindromo;
}

function checkPart2(part){
  // let palindromo = true;
  // let part1 = part.substr(0,Math.floor(part.length/2));
  // let part2 = part.substr(Math.round(part.length/2));
  // part2 = part2.split("").reverse().join("");
  // // console.log(part1);
  // // console.log(part2);
  // let palindromo = (part1 == part2);

  const isPalindromo = function (word) {
    let part1 = word.substr(0,Math.floor(word.length/2));
    let part2 = word.substr(Math.round(word.length/2));
    part2 = part2.split("").reverse().join("");
    return (part1 == part2);
  };

  let palindromo = isPalindromo(part);

  if(!palindromo && (part.length > 2)){
    //Probando a quitar 1 letra
    let first_part, second_part = '';
    let i = 0;
    while (i < part.length && !palindromo){
    // for (let i = 0; i < part.length; i++) {
      let pal = true;
      if(i>0)
        first_part = part.slice(0,i);
      else
        first_part = '';
      if(i<(part.length-1))
        second_part = part.slice(i+1);
      else
        second_part = '';
      const p = first_part.concat(second_part);
      // console.log(part2);

      palindromo = isPalindromo(p);
      
      // let part1 = p.substr(0,Math.floor(p.length/2));
      // let part2 = p.substr(Math.round(p.length/2));
      // part2 = part2.split("").reverse().join("");
      // // console.log(part1);
      // // console.log(part2);
      // palindromo = (part1 == part2);
      i++;
    }
  }

  return palindromo;
}

function checkPart(part){
  
  const isPalindromo = function (word) {
    let part1 = word.substr(0,Math.floor(word.length/2));
    let part2 = word.substr(Math.round(word.length/2));
    part2 = part2.split("").reverse().join("");
    return (part1 == part2);
  };

  let palindromo = isPalindromo(part);

  if(!palindromo && (part.length > 2)){
    //Probando a quitar 1 letra
    
    const quitaLetra = function (word,i) {
      return word.slice(0,i) + word.slice(i+1);
    }

    let i = 0;
    while (i < part.length && !palindromo){
      palindromo = isPalindromo(quitaLetra(part,i));
      i++;
    }
  }

  return palindromo;
}

const part = 'auwua';//true
// const part = 'auqwertyuiopwpoiuytrewqua';//true
// const part = 'auqwertyuiopwpoiuymtrewqua';//true
// const part = 'auua';//true
// const part = 'aina';//true
// const part = 'midu';//false
console.log(checkPart(part));
