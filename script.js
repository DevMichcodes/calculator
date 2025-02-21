function addNumbers(...numbers){
   return numbers.reduce((sum , num) => sum+num ,0);
}
function subtractNumbers(...numbers){
    return numbers.reduce((subtract, num)=> subtract-num);
}
function multiplyNumbers(...numbers){
    return numbers.reduce((product, num)=> product * num );
}
console.log(multiplyNumbers(-15,-9));