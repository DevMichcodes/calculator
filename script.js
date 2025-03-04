function addNumbers(...numbers){
   return numbers.reduce((sum , num) => sum+num ,0);
}
function subtractNumbers(...numbers){
    return numbers.reduce((subtract, num)=> subtract-num);
}
function multiplyNumbers(...numbers){
    return numbers.reduce((product, num)=> product * num );
}
function divideNumbers(...numbers){
    return numbers.reduce((divide, num)=> divide/num);
}
let display = document.getElementById("display");

function appendCharacter(character) {
    display.value += character;
}
 function clearOne(){
display.value = display.value.slice(0,-1);
 }
 function clearDisplay(){
    display.value = "";
 }
 function calculateResult(){
    try{
        display.value = evaluateExpression(display.value);
    }
    catch(error)
    {
   display.value ="Error";
    }
  
 }
 function evaluateExpression(expression){
    expression = expression.replace(/%/g, "/100")

      // Ensure only valid characters are processed
      if (/^[0-9+\-*/.%\s]+$/.test(expression)) {
        return new Function("return " + expression)(); // Safely evaluate
    } else {
        throw new Error("Invalid Expression");
    }

 }
