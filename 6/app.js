
//Representar un cubo de size bloques como estos
/*

--Size 1

/\_\
\/_/

--Size 2

 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/

 --Size 3

  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/


 --Size 4

   /\_\_\_\_\
  /\/\_\_\_\_\
 /\/\/\_\_\_\_\
/\/\/\/\_\_\_\_\
\/\/\/\/_/_/_/_/
 \/\/\/_/_/_/_/
  \/\/_/_/_/_/
   \/_/_/_/_/
*/

//Primera versión
function createCube(size) {
  let cubo = '';

  //Mitad superior del cubo
  for (let i = size; i > 0; i--) {
    
    for (let j = i-1; j > 0; j--) {
      cubo += ' ';
    }
    // cubo += "/\\";
    for(let j = (size-i+1); j > 0; j--){
      cubo += "/\\"
    }
    for(let j = (size); j > 0; j--){
      cubo += "_\\"
    }
    cubo += "\n";
  }

  //Mitad inferior del cubo
  for (let i = size; i > 0; i--) {
    
    for (let j = size-i; j > 0; j--) {
      cubo += ' ';
    }
    // cubo += "\\/";
    for(let j = i; j > 0; j--){
      cubo += "\\/"
    }
    for(let j = (size); j > 0; j--){
      cubo += "_/"
    }
    if(i > 1)
      cubo += "\n";
  }

  return cubo;
}

//Versión mejorada con string.repeat y un solo bucle principal
function createCube2(size) {
  let cubo = '';
  let blank = ' ';
  let cad1 = "/\\";
  let cad2 = "_\\";
  let cad3 = "\\/";
  let cad4 = "_/";

  let cads = [];
  cads["up"] = [];
  cads["down"] = [];

  //Mitad superior del cubo
  for (let i = size; i > 0; i--) {
    
      cads["up"].push(blank.repeat(i-1));
      cads["up"].push(cad1.repeat(size-i+1));
      cads["up"].push(cad2.repeat(size));
      cads["up"].push("\n");

      cads["down"].push(blank.repeat(size-i));
      cads["down"].push(cad3.repeat(i));
      cads["down"].push(cad4.repeat(size));
      if(i>1)
        cads["down"].push("\n");
  }

  cads["up"].forEach(element => {
    cubo += element;
  });

  cads["down"].forEach(element => {
    cubo += element;
  });

  return cubo;
}
console.log(createCube2(4));
