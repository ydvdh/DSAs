// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize1(str) { 
    const words = [];

    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}
//** SOLUTION 2 */
function capitalize2(str) {
    let result = str[0].toUpperCase();
    
    for(let i = 1; i < str.length; i++){
        if(str[i-1] === ' '){
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return result;
}
//** SOLUTION 3 */
function capitalize3(str) {
    return str.split(' ').map(word => {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    }).join(' ');
}
//** SOLUTION 4 */
function capitalize4(str) { 
    return str.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ");  
} 
//** SOLUTION 5 using RegEx */
function capitalize(str) {
    return str.replace(/\b\w/g, letter => letter.toUpperCase());
}
module.exports = capitalize;
