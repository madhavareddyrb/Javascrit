# Javascrit
Learning Js from Hitesh Chowdary udemy course

# Day1(19-08-2025):
1.printing.js 

how many types we can get output and differences and console.log always prints on next line and process.stdout.write prints on same line and 2 more

02.datatypes.js 

How many datatypes in js and simple examples explored and var is variable(stroes data) like these variable scope name is score and value is 102

03.Change.js

explored variables and var,let,const based on the scopes later we will get best understanding of these

04.Operations.js

explored basic operations in js and 1.arthemetic operations,2.Comparison operations,3.Logical Operators,4.Assignment Operators
Short hand method (++,--)

operatingPrecidence.js
exploring bodmas rules to basics and bracket first

## Part2
## TYPES 
## Primitive and Non-Primitive( we call sometimes objects,functionls)

## Primitives(String,Boolean,Number,null,undefined,Symbol)
## Non-Primitive(Objects(array,functions,objects,classes))

Everything in js is Objects

# let num1 = new Number(120) 

# new keyword create object data type every single primitive can be able to covertable to non-primitive

// Number
please explore part2 files


# Day2(20-08-2025)
## Non-primitives

when we use objs or non-primitives takes large space is resered in location inside non-primitives values are primitives(String,Number)
const username = {
  firstname:'madhava'
};
here const memory references is fix but inside primitives values are changable

Type Conervsion also covered some basics

part3 (conditional - challenges)

if () {} --> if condition true block of code will be going to execute or else block of code will be executed
else {}
() --> conditions checks here
{} --> Block of code 

# how to check datatypes and compare  in condition finding length of array using length property

checking bool values is true or false no need to compare or checks of datatype just pass variable name in condition to checks

Please explore part3 files to better understanding

## Array Challenges
1.we can access arays using inde values starts from 0 to know last element us length method
# 2.we can chnages elements values at particuluar index. First access using index and return new string 
Example: tea[2] = "chai";

3.How can we add values in array ?
by knowing length and we can add values using index --> city[2] = "Berlin"
--> city[city.length] = "Berlin"
Eventhough that works but we can't use that for large data so we use push method
# push method
arrayname.push("value")

# 4.how can we remove last element of array ?
Here we use pop() method deletes last element from array --> arrayname.pop();

# shift method
removes first element from array --> arrayname.shift()

# unshift method
inserts valus at fornt of array --> arrayname.unshift(4,5)

# 5.soft copy topic and hard copy:

for variables primitive types: value not change like below but when comes to array it changes the value has it is if we follow same method 

let var1 =  10;
let var2 = var1;
var1 = 4;     ## here var1 memory reference to var1 once
console.log(var2);


## Concept of softcopy in array

here array is memory reference
when we store array of data in memory references and we copy that same using assigning same variable but it doesn't refer to that variable it refer to the array of memory references in js behind scenes so the values changes with reference so copy values also changes --> let softCopyTeas = popularTeas;

# 6.Hardcopy concepts in array

oposite of softcopy we will achive these by using let hardcopy = [...arraynmae]
or 
let hardcopy = arrayname.slice()

spread --> console.log([...hardcopy]) spreads the data into parts 

# 8. Merge two arrays

by using + operator --> array1+array2 it has some flaws in it so we don't recommand

let arar3 = [array1,array2] it creates 2D array instand on merging

we use concat method to merge perfectly --> array1.concate(array2)

# 10. checks element or values is present in array or not 

by using includes method we can do that --> arrayname.include('value')

Please refer part4 arrayChallenges for better understanding


# Day3(21-08-2025)

# Loops

entery --> condition --> True or False
when condition hits true --> 

while loop() --> a loop that repeats a block of code util the specified condition is True
Here we don't know how many times the loop continue It is purley on condtion

dowhile() --> A loop that exeutes the block of code atleast once and later checks the conditon same as while

# for() --> A loop that executes based on specific number of times until based on the condition 
for (statement 1 ; statement 2 ; statement 3){   
   code here...
   }
Statement 1: It is the initialization of the counter. It is executed once before the execution of the code block.
Statement 2: It defines the testing condition for executing the code block
Statement 3: It is the increment or decrement of the counter & executed (every time) after the code block has been executed.

# difference
for loops: These are typically used when the number of iterations is known or can be determined before the loop begins.
while loops: These are used when the number of iterations is unknown and depends on a specific condition being met. 


forof() --> It is used to iterate through iteratable objects(like arrays,objects,strings,etc) -- Main Used in arrays

forin() --> same like forof but used for objects more {key:value}

foreach() --> The method calls a function for each element in an array.

break: breaks the loop
continue : skip the current value
pass : just pass nothing happens here

when we use foreach we won't able to write break,continue because it written using function so we use return


Completed loops


# Day 4 (22-08-2025)

Function Completed               


# Day 5 (26-08-2025)

Prototypes:

JS is prototype and prototype executes the code
its like cretaing objects from accesing function using prototypes methods
In js everything is an object behind the scenes 


Functional Constructor:

starts with function
function name starts with capital letter


# OOP: Object Orieneted Program

creating classes and creating objects and it includes four types
1.Encapsulation(protechting or grouping data)
2.inheritance (access other objects using extends method)
3.Polymorphism
4.Abstraction

class --> object1,object2,object3 we can call instances of class also

written some little explantions is coding files 


### Assignments Conclusion

1.TypeCasting

Conclusion:
1.To check type we use typeof value
2.Use triple equal signs === to check datatypes
3.To convert type cast we use Capital Letters Number(input),String(input) like that
4.To check datatype of that input or value we check with  lower letter here typeof == 'string'
5.If we need to check that any boolean values we don't need to write condition type check just value is enough(2,4 questios)


2.Variables and Operators

Conclusion:

1.Learned some operators and for small a+b we don't need to create an variable again we can return directly
2.When comes to decrement and increment we need to create variable because we don't assign values directly to const variable





### DOM and Events

From Part7
/*

Conclusion for Example 1:

0.First get elemnt on what event id and later add get element of what need to chnage
1.whole html file is document thats the reason why documnet works to get elements of html
2.There are differnt methods to get element by getElementById(specific to only id) but there are querySelectors(#idname) they are differnt not much specific to id or class for that we use querySelectors(#idnmae) and querySelectors(.classname)
3.addEventLister comes with 2 paramters one for event and one for function what need to do here we use click event because when we click on button need to change paragraph
4.Use Only function (){}(normal functions) beacuse it give us the exact context we can check using console.log(this) and on otherhand when we use arrow functions it gives us window context so it not recommended
5.for changing get element need to change store i variable and by using innerHtml,innerText,TextContent we chnage the text or content inside html


Example - 2 -> Travsering the document

1.learned how to add CSS class to element
2.firstElementChild of ul tag is li tag
3.added classList to change first elemnt background.

Example-3 -> Manupulation of elements

1.Learned how to add styles using style keyword
coffee.style.bg = 'red' and tried with new mouseover event here.

Example-4 -> Creating and Inserting elements

Learned How to create an newElement in js and how to add that newElement to Manipulate  the html

1.cretae a new variable let newItem and create element accodring to the Html Tag in js by document.createElement("li")
2.for newItem give a value by textContent (newItem.textContent = "Eggs")
and add that using appendChild to the shopping list id(ul tag)  document.getElementById("shoppingList").appendChild(newItem);
3.Here is a new thing that in HTML we call things tags and elements but when comes to DOM we call that are node
4.HTML is markup language and DOM is already processed elements in the document Tree so we call then node

Example-5 -> Removing DOM elements

new Thing here is there is an method remove (removes everything) to remove only last element we need an lastElementChild.remove() to remove last elemet

Example -6 -> Event Handling in DOM

explore some more events

Example-7 -> Event Delegation

1.Learned about event
2.for every addEventLister there is an name that is event like click,etc we can pass that event in function to make use of it and to get unique id items by using target
Ex: event.target

Example - 8 --> Form Handling in DOM

1.Get Total Form using getElementById
2.prevent default submit form of HTML to DOM
3.Input element value by id and store in a variable by .value(to extract value of that input field)
4.get display elemnt and display the stored variable input value in p tag.


Example -9 --> DOM content loaded

we are directly working with DOM so we can add direct eventListener and chnage the text to DOM fully loaded

Example 10 --> CSS Classes Manipulation

the toggle classList of CSS to toggle items like dark theme to light theme  


# JS advance Concepts

Understanding Asynchronous JavaScript (Made Simple)
When we write JavaScript, execution can happen in two ways:
Synchronous (Normal Execution)
Code → Call Stack → Event Loop
Steps:
1.Code enters the call stack.
2.The event loop keeps checking the stack.
3.The code executes immediately.
4.Once done, it leaves the stack (memory cleared).
-> This entire process is called Execution Context.

->Asynchronous Execution:
But JavaScript itself cannot handle tasks like timers, network calls, or file operations directly.
Instead, it depends on the environment (Browser, Node.js, Bun).
Execution looks like this:
 Code → Call Stack → Browser/Node/Bun APIs → Queue → Event Loop
Steps:
1.Asynchronous code (e.g., setTimeout, API call) enters the Call Stack.
2.The task is enters to the Browser/Node APIs.
3.Once ready, the result goes into the Queue (Callback Queue / Task Queue / Microtask Queue).
4.The Event Loop constantly checks the queue and pushes tasks back into the Call Stack for execution.
This is what makes JavaScript non-blocking and asynchronous.
Takeaway:
The magic of async JavaScript isn’t in the language itself, but in how the Call Stack, Web APIs, Queue, and Event Loop work together to create smooth, responsive applications.
Next time you use setTimeout or fetch data from an API, remember—JavaScript alone isn’t doing the heavy lifting. The environment + event loop is!




# Clousures 

A function has environment access to inner function is simple as a clousures
inner function variables have access to outer Variables and Its Context


# Promises and promise Chain


