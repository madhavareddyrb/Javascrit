/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let i = 1;
let sum = 0;
while (i < 6){
  sum += i;
  i++;
}
//console.log(sum);


/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let counts = 5;
while (counts>0 && counts<6){
  countdown.push(counts);
  counts--;
}
//console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

/*
let teaCollection = [];
let tea;

do{
 // tea = prompt(`Enter your favorite tea (type 'stop' to finish)`)
  if (tea !== 'stop'){
   // teaCollection.push(tea)
  }
}while (tea !== 'stop');
// run in chrome insepect
*/

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let numbers = 1
let total = 0
do {
  total += numbers;
  numbers++;
} while (numbers<=3);

//console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let elements = [2, 4, 6];
let multipliedNumbers = [];
for (let index = 0; index < elements.length; index++) {
  //takeNumbers = elements[index] * 2;
  //multipliedNumbers.push(takeNumbers)
  multipliedNumbers.push(elements[index] * 2)
}
console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i<cities.length;i++){
  // cityList.unshift(cities[i])
  // cityList.shift(cities[i])
  cityList.push(cities[i])
}
console.log(cityList);

