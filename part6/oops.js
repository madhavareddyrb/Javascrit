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
// console.log(vechone.name);
// console.log(vechone.start());
// console.log(vechone.drive());  // no access of drive method becuase we have used Vehicle class

// Encapsulation -> Restrict data to create new objects from that class

class BankAccount {
  #balance = 0; // just # to create and make variable private
  
  deposit(ammount){
    this.#balance += ammount;
    return this.#balance;
  }
  getBalance(){           // to get access of balance we can acess inside class
    return `${this.#balance}`;
  }

}
let account = new BankAccount();
account.deposit(20000);
// console.log(account.balance); // undefined
// console.log(account.#balance) // no access
//console.log(account.getBalance());


// Abstraction- to hide complex process and just gives what we want

class Machine {

  start(){
    return `starting the machine`
  }

  brewcoffee(){
    return `brewing th coffee`
  }

  
  pressStartButton (){ 
    let msgone = this.start(); 
    let msgTwo = this.brewcoffee();
    return `${msgone} + ${msgTwo}`
  }
  // hide start and brewcoffe methods and just give what we want at end just by pressStartbutton method 

}
let coffeeMachine = new Machine();
//console.log(coffeeMachine.pressStartButton());


// ploymorphism - more forms of code without distribing other methods and one method has many forms

class Bird {
  fly(){
    return `i am flying...`
  }
}

class Penguin extends Bird {
  fly (){
    return `Penguin can't fly`
  }
}

let bird = new Bird()
let penguin = new Penguin()
// here one fly method has differnt returns statements and one form many forms like that

//console.log(bird.fly());
//console.log(penguin.fly());

// Static Method -> can't create new objects when we create a method using static keyword and if we want to access we can directly access the using class name

class Calculator{
  static add(a,b){
    return a+b
  }
}
let minCal = new Calculator();
//console.log(minCal.add(2,3)); // minCal.add is not a function
//console.log(Calculator.add(2,3));

// get - used to get things with same name of variables or values

class Employee{
  constructor(name,salary){
    this.name = name;
    this._salary = salary;  // _ underscore nothing to do with value salary
  }
  get salary(){
    return `${this._salary}`
  }
}
let emp = new Employee('madhava',10000)
// console.log(emp.salary);  

//  Set -> used to set new values of existing value

// if we want to access by get and set we need to put _ this._new and if we don't get maximum call stack
class Tech {
  constructor(web,app){
    this._web = web;  
    this._app = app;
  }
  set web(newWeb){
    this._web = newWeb;
  }
  set app(newApp){
    this._app = newApp;
  }
}
let newTech = new Tech('python','Js');
//console.log(newTech);

newTech.web = 'JAVA';
newTech.app = 'GO';
//console.log(newTech);


// getter and setter

class EmployeeSalary {
  
  constructor(name,salary){
    if (salary < 0 ){
      throw new Error(`Salary can't be negative`)
    }
    this.name = name;
    this._salary = salary;
  }

  get salary(){
    return `you can't have access to salary`
  }
  set salary(value){
    if (value < 0 ){
      console.error(`Salary cannot be in negative`);
      
    }else {
      this._salary = value
    } 
  }
}
let employee = new EmployeeSalary('madhava',10000)
console.log(employee.salary);

console.log(employee._salary);
employee.salary = 50000;
console.log(employee.salary);
console.log(employee._salary);
employee.salary = -20000
console.log(employee.salary);


