function stringToNumber(input){
  if (typeof input === 'number' || input == Number(input)) {
    return Number(input)
  } else {
        return "Not a number"
      }
}
    
function flipBoolean(input){
    if (input){
        return false
  } return true
}
    
function whatAmI(input){
  if (typeof input === 'number'|| input == Number(input)){
        return `I'm a number!`
    } return `I'm a string!`
        
}
    
function isItTruthy (input){
  if (input){
    return `It's truthy!`
  }return `It's falsey!`
}

/* 
Conclusion:

1.To check type we use typeof value
2.Use triple equal signs === to check datatypes
4.To convert type cast we use Capital Letters Number(input),String(input) like that
5.To check datatype of that input or value we check with  lower letter here typeof == 'string'
3.If we need to check that any boolean values we don't need to write condition type check just value is enough(2,4 questios)

*/