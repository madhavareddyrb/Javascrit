function createCounter() {
  return function  ()  {
      let counter = 0;
        counter++;
        return counter;
    }
}
let increment = createCounter();
console.log(increment());
