// this and binding context
const person = {
  name : 'madhava',
  number : 98667,
  age : 23,
  greet(){
    //console.log('these is printing not const variable');
    
    console.log(`hi my name is ${this.name} and my number is ${this.number}`);  
  }
}
// person.greet() // hi my name is madhava and my number is 98667


const greetFunction = person.greet;
greetFunction();  // hi my name is undefined and my number is undefined

// for personnum the context is missing that's the problem when we declare variables of object this to overcome we use bind and it

const boungGreet = person.greet.bind({name : 'madhava'})
boungGreet(); // hi my name is madhava and my number is undefined
const boungGreet2 = person.greet.bind({name : 'madhava', number : 9615172266})
boungGreet2(); // hi my name is madhava and my number is 9615172266



