function addNumbers(...numbers){
   return numbers.reduce((sum , num) => sum+num ,0);
}
function subtractNumbers(...numbers){
    return numbers.reduce((subtract, num)=> subtract-num);
}
