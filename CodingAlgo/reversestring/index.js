// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
	return str.split('').reverse().join('');
}

function reverse2(str) {
	let reversedString = '';
	for (let character of str) {
		reversedString = character + reversedString;
	}
	return reversedString;
}

function reverse(str) {
	return str.split('').reduce((reversed, character) => {
		return character + reversed;
	}, '');
}
module.exports = reverse;
