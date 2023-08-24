let conversions = {
  celciusToKelvin : function(celcius){
     let kelvin = 273.15+celcius;
     return kelvin+' '+'K'; 
  }, 
  kelvinToCelcius : function(kelvin){
    let celcius = kelvin - 273.15;
    return celcius+' '+' °C'
  },
  celciusToFarhenheit : function(celcius){
    let farhenheit = (1.8*celcius)+32;
    return farhenheit+' '+'°F';
  },
  farhenheitToKelvin : function(farhenheit){
    let kelvin = (farhenheit-32)*0.56+273.15
    return kelvin+' '+'K'
  },
  farhenheitToCelcius : function(farhenheit){
    let celcius = (farhenheit-32)*0.56;
    return celcius + ' °C'
  }
};

console.log(conversions.farhenheitToCelcius(3233))

let newArray = []
let accept = prompt(`1. celcius to kelvin \n 2. kelvin to celcius \n 3. celcius to farhenheit \n 4. farhenheit to kelvin \n 5. farhenheit to celcius`)

if(accept == '1'){
  let acceptAgain = parseInt(prompt('Enter a celcius number'));
  alert(conversions.celciusToKelvin(acceptAgain));
}
else if(accept == '2'){
  let acceptAgain = parseInt(prompt('Enter a kelvin number'));
  alert(conversions.kelvinToCelcius(acceptAgain));
}
else if(accept == '3'){
  let acceptAgain = parseInt(prompt('Enter a celcius number'));
  alert(conversions.celciusToFarhenheit(acceptAgain));
}
else if(accept == '4'){
  let acceptAgain = parseInt(prompt('Enter a farhenheit number'));
  alert(conversions.farhenheitToKelvin(acceptAgain));
}
else if(accept == '5'){
  let acceptAgain = parseInt(prompt('Enter a farhenheit number'));
  alert(conversions.farhenheitToCelcius(acceptAgain));
}
else{
  alert('go an ask your grand father')
}


