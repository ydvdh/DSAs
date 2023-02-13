// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz1(n) {
	for (let i = 1; i <= n; i++) {
		if (x % 3 == 0 && x % 5 == 0) {
			console.log('fizzbuzz');
		} else if (x % 3 == 0) {
			console.log('fizz');
		} else if (x % 5 == 0) {
			console.log('buzz');
		} else {
			console.log(x);
		}
	}
}
function fizzBuzz2(n) {
	for (let i = 1; i <= n; i++) {
		console.log((i % 3 === 0 ? 'fizz' : '') + (i % 5 === 0 ? 'buzz' : '') || i);
	}
}
function fizzBuzz3(n) {
	let num = [ ...Array(n + 1).keys() ];
	num.shift();
	let result = num.map((x) => {
		if (x % 3 == 0 && x % 5 == 0) {
			return 'fizzbuzz';
		} else if (x % 3 == 0) {
			return 'fizz';
		} else if (x % 5 == 0) {
			return 'buzz';
		} else {
			return x;
		}
	});
	result.forEach((x) => {
		console.log(x);
	});
}
function fizzBuzz4(n) {
	[ ...Array(n + 1).keys() ].slice(1).forEach((v) => {
		console.log(v % 3 === 0 ? (v % 5 === 0 ? 'fizzbuzz' : 'fizz') : v % 5 === 0 ? 'buzz' : v);
	});
}
function fizzBuzz(n) {
	for (var i = 1; i <= n; i++) {
		let srt = '';
		if (i % 3 == 0) {
			srt += 'fizz';
		}
		if (i % 5 == 0) {
			srt += 'buzz';
		}
		// if string is empty print i
		console.log(srt || i);
	}
}
module.exports = fizzBuzz;
