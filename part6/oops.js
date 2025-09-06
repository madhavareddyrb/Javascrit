// object: Just an example to we are going to use this in objects also like functions.

let car = {
  make : 'Toyota',
  model : 'camery',
  year : 2020,
  start : function (){
    return `${this.make} model ${this.model} has started in ${this.year}`;
  }
};
//console.log(car);
//console.log(car.start()); // remebering create methd means just creating function in object just like start method here

// Prototype Chain

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function (){
  return `${this.type} make sound boow boow`;
};
// here speack also an method like create a method speak for prototype of Animal

Array.prototype.madhava = function (){
  return `when we create an prototype with Array like above.It means all arrays has the access to madhava prototype but we need to use this ${this} (Custom method)`;
}
let myarray = [1,2,3];
// console.log(myarray.madhava());

let names = ['madhava','vinay','hero',1,2,3]
// console.log(names.madhava());

// we have already created class and objects with functional constructor as of now.

// class --> underhood classes are also prototypes
// inside classes functions are called methods
// 1.class keyword,name,a construtor method to pass parameters and we use this and new in classes also

class Vehicle {
  constructor(name,model){
    this.name = name;
    this.model = model;
  };
  start(){
    return `${this.name} is a car from ${this.model}`;
  };

};

// console.log(Vehicle); // [class Vehicle]

// Inheritance

class Car extends Vehicle {
  drive(){
    return `${this.name}:This is an inheritance example`;
  };
};

let mycar = new Car('toyota','carmy');
//console.log(mycar);
//console.log(mycar.drive());
//console.log(mycar.start());

let vechone = new Vehicle('Toyota','corolla')
console.log(vechone.name);
console.log(vechone.start());
// console.log(vechone.drive());  // no access of drive method becuase we have used Vehicle class
















