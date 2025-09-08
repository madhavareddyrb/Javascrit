// Task 1
class BankAccount {
    #balance = 0;
    
  deposit(amount){
      this.#balance += amount;
      return `${this.#balance}`
  }
  withdraw(amount){
      this.#balance -= amount;
      return `${this.#balance}`
  }
  get balance(){
      return `${this.#balance}`
  }
  set balance(value){
      if (value < 0){
          console.error('Balance cannot be negative')
      }else{
      this.#balance = value
      }
  }
}

let account = new BankAccount();
console.log(account.balance);
account.deposit(100);
console.log(account.balance);
account.withdraw(50);
console.log(account.balance);



// Task 2
class Shape {
    area(){
        return 0
    }
}

class Circle {
    area(r){
        return (3.14 * (r**2));
    }
}

class Rectangle {
    area(l,b){
        return l*b
    }
    
}

let circle = new Circle();
let rectangle = new Rectangle();
console.log(circle.area(4));
console.log(rectangle.area(4,6));
