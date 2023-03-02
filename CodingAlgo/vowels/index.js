// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
    let count = 0;
    const checker = ['a','e','i','o','u']

    for(let char of str.toLowerCase()){
        if(checker.includes(char)){
            count++;
        }
    }
    return count;
}
//** SOLUTION 2 */
function vowels(str) {
    // if the string passed contain any character inside [] then let's us know
    // g flag indicate that we don't stop at first match
    // i flag indicate for case insensative
   // matches will give array of string that matches
    let matches = str.match(/[euioa]/gi); 
    return matches? matches.length : 0;
}

//** SOLUTION 3 */
function vowels3(str) {

    return str.replace(/[^euioa]/gi, '').length; 
}
//** SOLUTION 4 */
function vowels4(str) {
    return str.split('').reduce(function(acc, curr){
        acc += ['a', 'e', 'i', 'o', 'u'].includes(curr.toLowerCase()) ? 1 : 0;
        return acc;
    }, 0);
}
//** SOLUTION 5 */
function vowels5(str) {
    return (str.match(/a|e|i|o|u/ig) || []).length;
}
//** SOLUTION 5 */
module.exports = vowels;
