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
