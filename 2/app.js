
//Dado un eaño y un array de festivos de vacaciones de ese año en formato DD/MM
//LLevar un conteo consistente en, para cada día de vacaciones de ese año que caiga de L a V, sumar 2
function countHours(year, holidays) {
  // const event = new Date(year, 11, 4);

  let sum = 0;
  holidays.forEach(el => {
    // console.log(el);

    if( (el.length == 5) && el.includes("/") ){
      const mes = el.substring(0,2) - 1;
      const dia = el.substring(3,5);

      // console.log(dia);

      

      const day = new Date(year,mes,dia);

      if(day.toString() != "Invalid Date"){

        const dow = day.getDay();

        dow > 0 && dow < 6 ? sum += 2 : sum;

      }
    }
  });

  
  return sum;
}


console.log(countHours(2022,["AA/GF"]));
