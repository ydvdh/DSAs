//Given an array = [2,3,4,2,6,7]
//It should return 2.

//Navie Approach
//Comparing each element of first array to each element in second array
function firstRecurringCharacter1(inputArray){
    for(let i = 0; i < inputArray.length; i ++){
        for(let j = i - 1; j >=0; j --){
            if(inputArray[i] === inputArray[j]){
                return inputArray[i];
            }
        }
    }
    return undefined;
}// O(n^2)

function firstRecurringCharacter2(inputArray){
    let map = {};

    for(let i = 0; i< inputArray.length; i++){
        if(map[inputArray[i]] != undefined){
            return inputArray[i];
        } else {
            map[inputArray[i]] = i
        }
    }
    return undefined;
}//O(n)

function firstRecurringCharacter3(input) {
    const set = new Set();
    return input.find((element) => set.has(element) || !set.add(element));
}

console.log(firstRecurringCharacter1([1,3,4,2,3,7]));
console.log(firstRecurringCharacter2([1,3,4,1,6,7]));
console.log(firstRecurringCharacter1([2,5,5,2,6,7]));
console.log(firstRecurringCharacter2([2,5,5,2,6,7]));
console.log(firstRecurringCharacter3([2,5,5,2,6,7]));