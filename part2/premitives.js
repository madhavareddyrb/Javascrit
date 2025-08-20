// Number
let num1 = 10
// checking type of variable
console.log(typeof(num1));
// using New keyword(new keyword create object data type every single primitive can be able to covertable to non-primitive)
let num2 = new Number(120)

// console.log(typeof num1);
// console.log(typeof num2); // it is a object


// Boolean type

let isActive = true
let isReallyActive = new Boolean(true) // not recommended

// null and undefined

let firstname;

// console.log(typeof firstname); // undefind no value is assigned

// console.log(typeof lastname); //error: is not defined

let firstPrize = null; // null 
let lastPrize = undefined;
// console.log(typeof firstPrize);
// console.log(typeof lastPrize);

// String(more use)

// defining string
let mystr = 'hello'
let mystr2 = 'holaHola'
let user = 'madhava'

let oldGreet = mystr+'madhava';
console.log(oldGreet);// no formation corretness


// new method String interpolation
let greetMessage = `hello ${user} !` // computation happens here 
// console.log(greetMessage);

let add = `value of ${2+3}`
// console.log(add); 


// Symbol - (uniqueness for everytime)
let sm1 = Symbol()
let sm2 = Symbol('madhava') // named symbol
console.log(sm1 == sm2); // false
console.log(sm1); // Symbol

// generate to be unique even the Sm1 = Symbol('madhava') and sm2 = Symbol('madhava)





