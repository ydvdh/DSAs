// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt1(n) {
	const sign = Math.sign(n);
	const abs = Math.abs(n);
	return sign * +abs.toString().split('').reverse().join('');
}
function reverseInt2(n) {
	//Math.sign(-300)--> -1, Math.sign(300)--> 1
	return Math.sign(n) * parseInt(Math.abs(n).toString().split('').reduce((rev, char) => char + rev, ''));
}
function reverseInt3(n) {
	function reversed(int) {
		return int.toString().split('').reverse().join('');
	}
	return n < 0 ? +('-' + reversed(n * -1)) : +reversed(n);
}

function reverseInt4(n) {
	return parseInt((n < 0 ? '-' : '') + Math.abs(n).toString().split('').reverse().join(''));
}

function reverseInt5(n) {
	let x = n.toString().split('').reverse().join(''); // reverse
	x = parseInt(x); // string to int
	return n < 0 ? x * -1 : x; // to attached - (minus)
}

function reverseInt(n) {
	var reverseInt = 0;
	while (n != 0) {
		reverseInt = reverseInt * 10 + n % 10;
		n = parseInt(n / 10); //without parseInt, JS will result this division as float.
	}
	return reverseInt;
}

module.exports = reverseInt;
