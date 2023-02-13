// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagram1(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
    // In case (of) Array of and in case of Object (in)
    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }
    return true;
}

function buildCharMap(str){
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
//** SOLUTION 2 */

//** SOLUTION 3 */
function anagrams3(stringA, stringB) {
    const cleaner = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    return cleaner(stringA) === cleaner(stringB)
}
//** SOLUTION 4 */
function anagrams4(stringA, stringB) {
    let cleanstringA = stringA.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let cleanstringB = stringB.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    const compareString = cleanstringA.split('').sort().join('') === cleanstringB.split('').sort().join('');
   
    return compareString;
  }

module.exports = anagrams;
