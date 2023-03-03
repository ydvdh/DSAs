// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib1(n) {
    const result = [0,1]

    for(let i = 2; i <= n; i++){
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }
    return result[n] 
}

//** SOLUTION 2 */
function slowFib(n) { 
    if(n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

//** SOLUTION 3 */
function fib3(n) {
    let result=0;
    let n2=0;
    let n1=1

    if(n===1)return 1
    
    for (let i = 2; i <= n; i++) {
        result= n1+n2;
        n2=n1;
        n1=result;
    }
    return result
}

//** SOLUTION 4 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
      if (cache[args]) return cache[args];
      const result = fn.apply(this, args); 
      cache[args] = result;
      return result;
    }
  }

  const fib = memoize(slowFib)
function fib5(n) { 

}

module.exports = fib;
