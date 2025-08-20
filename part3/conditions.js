// Checking if a number is greater than another number:
let num1 = 10;
let num2 = 11;
if (num1 > num2) {
  console.log(`num1 = ${num1} is greater than num2 = ${num2}`);
} else {
  console.log(`num2 = ${num2} is greater than num2 = ${num1}`); 
}

// Checking if a string is equal to another string:

let userName = 'madhava';
let lastName = 'reddy';


if (userName == lastName) {
  console.log('Both strings are same'); 
} else {
  console.log('Both strings are different');
}


//Checking if a variable is a number or not:

let variale = 10;
if (typeof variale === "number"){
  console.log('Number type');
} else {
  console.log('not a Number type');
}

// for array ;
/*
let num = []
if (typeof num === 'object'){
  console.log('yep,this is an array but it consider has object to check');
} else {
  console.log('these is not an array');
  
}
*/

//Checking if a boolean value is true or false:
// don't need to check typeof like number here to check true values just pass the variable name in condition

let boolValue = true
if (boolValue){
  console.log(true);
}else{
  console.log(false);
}

// Checking if an array is empty or not:

let items = [1,3,4];
console.log(items.length);

if (items.length === 0){
  console.log('items is empty');
  
} else {
console.log(`items is not empty ${items} `);
}