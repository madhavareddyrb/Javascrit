// **** DO NOT CHANGE the values *****

let a = 18;
let b = 24;

function add(){
    const result = a + b;
    return result;
}

function subtract(){
    const result = b - a;
    return result;
}

function multiply(){
    const result = a * b;
    return result;
}

function divide(){
    const result = b / a;
    return result;
}

function increment(){
    let result = a;
    result += 1
    return result;
}
function decrement(){
    let result = b;
    result -=1
    return result;
}

function reminder(){
    const result = b % a;
    return result;
    
}


// Addition of two values
function add(){
    return a + b;
}


// Subtract small value from larger one
function subtract(){
    return b - a;
}

function multiply(){
    return a * b;
}

// Divide larger value by small
function divide(){
    return b / a;
}

// Increase value of a by 1
function increment(){
    let result = a;
    result += 1;
    return result;
}

// Decrease value of b by 1
function decrement(){
    let result = b;
    result -= 1;
    return result;
}

// Divide larger value by small to find the reminder
function reminder(){
    return b % a;
}

/*
Conclusion:

1.Learned some operators and for small a+b we don't need to create an variable again we can return directly
2.When comes to decrement and increment we need to create variable because we don't assign values directly to const variable

*/