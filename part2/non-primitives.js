let obj = {};

// console.log(obj);
// console.log(typeof obj);

let details = {
  firstname : 'madhava',
  email : 'madhavareddyrb@gmail.com'
};

const userName = {
  firstname:'madhava',
  lastNmae : 'Reedy',
};

userName.lastNmae = 'rb' ;
userName.email = 'madhvareddy1121@gmail.com';

// access inside values
// console.log(userName);

// console.log(userName.email);
// console.log(typeof userName);


// other way to access values and assign values
let names = {
  "number of students" : 10,
  "course" : 'MERN',
};

// console.log(names["course"],names["number of students"]);

// Date data type

let today = new Date()
// console.log(today.getDate());

// Array using indexs we can access values

let heros = ["a","b","c",true,10,false]
let anotherUser = ['madhava',true,[heros]]
// console.log(anotherUser[0]);


// Type conversion

// 1.implicity conversion (js automatically converst types based on large bytes of data )

// console.log(1 + '1'); // consider has string
// console.log('1' + 1);

let isVal = true // true valus is 1 
// console.log(isVal + 1); // num is consider has num sp value is 2

// explicit Conversin(by writing code we convert these according to our use cases)
let isValue = '8'
// console.log(Number(isValue));

let st = '2abc'
// console.log(Number(st)); // NaN (Not a number)

console.log(typeof st);

console.log(typeof Number(st)); // NaN is number type

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN





