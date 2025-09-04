let computer = { cpu : 12}
let lenovo = {
  screen : "HD"
}
let tomHardware = {}

//console.log(`computer`, computer);
//console.log(`computer`,computer.__proto__);  // it won't show aything just a null prototype please try in chrome we will see its prototype values

let car = {window: 4};
let names = { 
  name : 'tata',
  __proto__ : car  // prototype of car has access to prototype of name now The older version 
}
console.log(`name`, names.__proto__); 

// new version of prototypes using Object.setPrototypeof()

let genericCar = {
  tyres:4
}
let tesla = {drivier : 'AI'}
Object.setPrototypeOf(tesla,genericCar) // tesla has access to genericCar now

console.log(`tesla`,tesla);
console.log(`tesla`,tesla.tyres);
console.log(`tesla`,Object.getPrototypeOf(tesla)); // another way to access prototype values



