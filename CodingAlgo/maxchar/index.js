// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar1(str) {
	const map = {};
	let largest = 0;
	let maxchar = '';

	str.split('').map((char) => {
		!map[char] ? (map[char] = 1) : map[char]++;
	});
	// for of loop is not used in object
	for (let letter in map) {
		if (map[letter] > largest) {
			largest = map[letter];
			maxchar = letter;
		}
	}
	return maxchar;
}
function maxChar(str) {
	const map = {};
	let max = 0;
	let maxchar = '';
	// for of loop is used for an array/ string that is iterable
	for (const char of str) {
		if (!map[char]) {
			map[char] = 1;
		} else {
			map[char]++;
		}
	}
	// for of loop is not used in object
	for (let letter in map) {
		if (map[letter] > max) {
			max = map[letter];
			maxchar = letter;
		}
	}
	return maxchar;
}
function maxChar3(str) {
	let obj = {};
	for (const char of str) {
		// if (!obj[char]) {
		// 	obj[char] = 1;
		// } else {
		// 	obj[char]++;
		// }
		obj[char] = obj[char] + 1 || 1;
	}
	let maxChar = Object.keys(obj).reduce((prev, current) => (obj[current] > obj[prev] ? current : prev));
	return maxChar;
}
function maxChar4(str) {
	[ ...str ].reduce((acc, next) => {
		const value = acc ? acc[next]++ : (acc[next] = 1);
		return Object.assign(acc, { [next]: value });
	}, {});
}
module.exports = maxChar;
