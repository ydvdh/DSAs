// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
	let reversedString = '';
	reversedString = str.split('').reverse().join('');

	if (str === reversedString) {
		return true;
	}
	return false;
}

function palindrome2(str) {
	return str === str.split('').reverse().join('') ? true : false;
}

function palindrome3(str) {
	return str.split('', str.length / 2).every((char, index) => char === str[str.length - 1 - index]);
}
// Solution to reduce the space complexity
function palindrome4(str) {
	let i = 0;
	let j = str.length - 1;

	while (i <= j) {
		if (str[i] !== str[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

function palindrome5(str) {
	for (var i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length - i - 1]) return false;
		break;
	}
	return true;
}

function palindrome6(str) {
	return str === str.split('').reduce((rev, char) => char + rev, '');
}

function palindrome(str) {
	return str.split('').reduce((prev, cur) => cur + prev) === str;
}

module.exports = palindrome;
