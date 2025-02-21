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
