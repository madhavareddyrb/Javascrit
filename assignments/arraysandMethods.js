function filterNumbers(arr){
    return arr.filter(item => typeof item == 'number');
}
let arr = [1,'madhava','22',4,6,7]
console.log(filterNumbers(arr));



function reverseArray(arr) {
    return arr.reverse();
}
let reverseArr = [1,'madhava','22',4,6,7]
console.log(reverseArray(reverseArr));


function findMax(arr){
    return Math.max(...arr);
}



function removeDuplicates(arr){
    return [...new Set(arr)];
}

function flattenArray(arr){
    return arr.flat(Infinity);
}

