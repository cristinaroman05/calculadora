
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            console.error("Invalid operator");
    }
}


var operator = "+";
var num1 = 5;
var num2 = 3;
var result = operate(operator, num1, num2);
console.log(result); // 8




//Declaramos variables
let operacionA;
let operacionB;
let operacion;


//variables
let resultado = document.getElementById('result');
console.log(resultado);
let reset = document.getElementById('ac');
let suma = document.getElementById('+');
let resta = document.getElementById('-');
let multiplicacion = document.getElementById('*');
let division = document.getElementById('/');
let igual = document.getElementById('=');
let uno = document.getElementById('1');
let dos = document.getElementById('2');
let tres = document.getElementById('3');
let cuatro = document.getElementById('4');
let cinco = document.getElementById('5');
let seis = document.getElementById('6');
let siete = document.getElementById('7');
let ocho = document.getElementById('8');
let nueve = document.getElementById('9');
let cero = document.getElementById('0');
console.log(cero);



//Eventos de click
uno.onclick = function(x){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(x){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(x){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(x){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(x){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(x){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(x){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(x){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(x){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(x){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(x){
    resetear();
}
suma.onclick = function(x){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(x){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(x){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(x){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(x){
    operandob = resultado.textContent;
    resolver();
}
onclick();

function limpiar(){
    resultado.textContent = "";
  }
  
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    let res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }