// this and binding context
const personDetailes = {
  name : 'madhava',
  number : 98667,
  age : 23,
  greet(){
    //console.log('these is printing not const variable');
    
    console.log(`hi my name is ${this.name} and my number is ${this.number}`);  
  }
}
// person.greet() // hi my name is madhava and my number is 98667


const greetFunction = personDetailes.greet;
greetFunction();  // hi my name is undefined and my number is undefined

// for personnum the context is missing that's the problem when we declare variables of object this to overcome we use bind and it 

const boungGreet = personDetailes.greet.bind({name : 'madhava'})
boungGreet(); // hi my name is madhava and my number is undefined
const boungGreet2 = personDetailes.greet.bind({name : 'madhava', number : 9615172266})
boungGreet2(); // hi my name is madhava and my number is 9615172266


// The call() method invokes a function with a specified this value and arguments provided individually
const personName = {
  name: 'Alice'
};

function greet(greeting, message) {
  console.log(`${greeting}, ${this.name}! ${message}`);
}

greet.call(personName, 'Hello', 'How are you?'); // Output: Hello, Alice! How are you?


// The apply() method is similar to call(), but it accepts arguments as an array instead of listing them individually

const person = {
  name: 'Bob'
};

function greet(greeting, message) {
  console.log(`${greeting}, ${this.name}! ${message}`);
}

greet.apply(person, ['Hi', 'Nice to meet you!']); // Output: Hi, Bob! Nice to meet you!