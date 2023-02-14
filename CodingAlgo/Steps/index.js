// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps1(n) {   
    for(let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++){
            if(column <= row){
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}
//** SOLUTION 2 */
function steps(n, row = 0, stair = '') {
    if(n === row){
        return;
    }
    if(n === stair.length){
        console.log(stair)
        return steps(n, row + 1);
    }
    // if(stair.length <= row){
    //     stair += '#';
    // } else {
    //     stair += ' ';
    // }
    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add)
 }
//** SOLUTION 3 */
function steps3(n) {
    if (n === 1) {
        console.log("#"); 
    } else {
        for (let i = 1; i <= n; i ++) {
            // repeat() method constructs and returns a new string which contains
            // the specified number of copies of the string on which it was called, 
            //concatenated together.
            console.log("#".repeat(i) + " ".repeat(n - i));
        }
    }
}
//** SOLUTION 4 */
function steps4(n) {
    for (let i = 1; i <= n; i++) {
        // padEnd() method pads the current string with a given string (repeated, if needed)
        // so that the resulting string reaches a given length
        console.log('#'.repeat(i).padEnd(n));
    }
}
//** SOLUTION 5 */
function steps5(n) {
    for (let index = 1; index <= n; index++) {
        console.log("".padStart(index, '#').padEnd(n, " "));
    }
}
//** SOLUTION 6 */
function steps6(n) {
    let rows = "#".repeat(n).split("");
    rows.map((row, index) => {
    console.log(row + "#".repeat(index) + " ".repeat(n - index - 1));
    })
   }

module.exports = steps;
