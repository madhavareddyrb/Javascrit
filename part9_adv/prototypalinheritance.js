function Person(name){
  this.name = name;
}

Person.prototype.greet = function (){
  console.log(`Hello, my Name is ${this.name}`); 
}

let madhava = new Person('madhava')
madhava.greet()