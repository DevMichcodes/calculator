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