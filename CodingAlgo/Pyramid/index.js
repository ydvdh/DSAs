// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// jest pyramid/test.js

function pyramid1(n) {
    let midpoint = Math.floor((2 * n- 1)/2);
    for(let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n -1; column++ ){
            if(midpoint - row <= column && midpoint + row >= column){
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}
//** SOLUTION 2 */
function pyramid2(n, row = 0, level = '') {
    if(row === n) {
        return;
    }
    if(level.length === 2 * n - 1){   
        console.log(level);
        return pyramid(n, row + 1);
    }
    const midpoint = Math.floor((2 * n- 1)/2);
    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = "#";
    } else{
        add = " "
    }
    pyramid(n, row, level + add);
}
//** SOLUTION 3 */
function pyramid3(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i));
    }
}
//** SOLUTION 4 */
function pyramid4(n) {
    const createSpace = num => Array(num).fill(' ').join('')
    const createhash = num => Array(num).fill('#').join('')
    for (let i = 1; i <= n; i++) {
      console.log(createSpace(n - i) + createhash(i * 2 - 1) + createSpace(n - i))
    }
  }
//** SOLUTION 4 */
function pyramid(n, row = 0) {
    if (n === row) return;
   
    // the number of #
    const pyramidLenght = 1 + row * 2;
    // the total amount of characters (including whitespaces) in each row. This stays the same
    const totalLength = n * 2 - 1;
    // the amount of whitespaces on each side
    const padLength = (totalLength - pyramidLenght) / 2;
    console.log(" ".repeat(padLength) + "#".repeat(pyramidLenght) + " ".repeat(padLength));
    pyramid(n, row + 1);
  }
module.exports = pyramid;
