function stringToNumber(input){
    if (typeof input === 'number' || input == Number(input)) {
        return input;
    } else {
        return "Not a number";
    }
}

// console.log(stringToNumber(123));

function flipBoolean(){
    if (typeof true) {
        return false;
    } else {
        return true;
    }
}
//console.log(flipBoolean(true));

function whatAmI(input){
    if (typeof input === 'number'|| input == Number(input)){
        return `"I'm a number!"`
    } return `"I'm a string!"`
    
}

//console.log(whatAmI('123'));

function isItTruthy (input){
    if (input){
        return `'It's truthy!`
    }return `It's falsy`
}

//console.log(isItTruthy(1));
/*function stringToNumber(input){
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
*/







