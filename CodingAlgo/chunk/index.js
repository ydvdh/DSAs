// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunked = [];
	for (let element of array) {
		const last = chunked[chunked.length - 1];
		if (!last || last.length === size) {
			chunked.push([ element ]);
		} else {
			last.push(element);
		}
	}
	return chunked;
}
function chunk1(arr, size) {
	var result = [];
	while (arr.length > 0) {
		var items = arr.splice(0, size);
		result.push(items);
	}
	return result;
}
//using 'splice' modifies the underlying array. 
//Many helper functions like 'chunk' are usually designed to not modify the array that is passed in.
//Slice  (not splice ) won't modify the original array.
function chunk2(array, size) {
	let output = [];
	let chunks = array.length / size;
	for (let i = 0; i < chunks; i++) {
		output.push(array.slice(i * size, i * size + size));
	}
	return output;
}
function chunk3(array, size) {
	if (array.length <= size) {
		return [ array ];
	}
	return [ array.slice(0, size), ...chunk(array.slice(size), size) ];
}
function chunk4(array, size) {
	//find the first element in the array that is still a number
	var index = array.findIndex((el) => typeof el === 'number');
	// recursion ends when all numbers have been transformed to arrays
	if (index === -1) return;
	// replace the next (size) numbers with an array of these numbers
	array.splice(index, size, array.slice(index, index + size));
	// move on to the next portion of the array
	chunk(array, size);
	//return the modified array
	console.log(array);
	return array;
}

module.exports = chunk;
