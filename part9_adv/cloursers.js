// Clourusers : A function returning another function is call clousures

function outerFun(){
  let counter = 0;
  return function (){
    counter++;
    return counter;
  }
}

let increment = outerFun()
console.log(increment());
console.log(increment());
console.log(increment());

