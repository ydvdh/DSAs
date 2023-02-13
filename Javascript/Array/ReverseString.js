//1. Using simple javascript function
function reverseString(inputString){
    if(!inputString || typeof inputString != 'string' || inputString.length < 2) return inputString;

    const reversedString = [];
    const totalItems = inputString.length - 1;
    for(let i = totalItems; i >= 0; i--){
        reversedString.push(inputString[i]);
    }
    //console.log(reversedString);
    return reversedString.join('');
}

//2. Using javascript built-in method

function reverseString2(inputString){
    return inputString.split('').reverse().join('');
}

//3. Using ES6
const reverseString3 = inputString => inputString.split('').reverse().join(''); //OR
const reverseString4 = inputString => [...inputString].reverse().join(''); //Using spread operator

reverseString('javascript');
reverseString2('javascript');
reverseString3('javascript');
reverseString4('javascript');