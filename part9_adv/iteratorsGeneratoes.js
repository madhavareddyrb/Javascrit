function* number(){
  yield 1;
  yield 2;
  yield 3;
}

let gen = number();
let genTwo = number();

console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);

