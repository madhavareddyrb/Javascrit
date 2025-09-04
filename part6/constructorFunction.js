function Person(name, age){
  // name = name // won't work here to later create objects
  // let name = name // same goes here
  this.name = name;  
  // Assigns the 'name' argument to the 'name' property to create objects using new we give context of function using this keyword(this keyword and new keyword has some relationship to access the context of function construtor parameters )
  this.age = age;
}

let myname = new Person('madhava',20);
// console.log(myname);


function Car(make,model){
  this.make = make
  this.model = model
}

let mycar = new Car('Toyota', "Camry")
// console.log(mycar);

let newCar = new Car('TAta','safari');
// console.log(newCar);

// we can see that Car function cerates two new objects not overwriting existing one


// create function inside construtor function and accessing construtor functions parameters

function Tea(type){
  this.type = type;
  this.descibe = function(){
    return `This is a ${this.type} type`
  };
};

let lemontea = new Tea('lemonTea')
// console.log(lemontea);
// console.log(lemontea.descibe());


// Constrtor and prototype

function Tech(name){
  this.name = name;
};

Tech.prototype.tech = function(){
  return `This returns name of your tech stack is ${this.name}`
};

let techName = new Tech('Python')
// console.log(techName);
// console.log(techName.tech()); // access ptototype values


// checking if objects are creating with new or not. if not throw an error use new to create objects

function checkError(name){
  if (!new.target){
    throw new Error("Please create object with new keyword");
    
  };
  this.name = name
};

let check = checkError('madhava') // error






