/**
 * Bubble Sort Time complexity:
 * Worst: O(n^2)
 * Average: O(n^2)
 */

const bubbleSort = (arr) => {

	let i = 0;

	while (i < arr.length -  1) {

		let j = 0;

		// Check this calculation, it reduces the iterations significantly. 
		while (j < arr.length - 1 - i) {

			if (arr[j] > arr[j + 1]) {

				const temp = arr[j];

				arr[j] = arr[j + 1];

				arr[j + 1] = temp;
			}
			j++;
		}
		i++;
	}
	return arr;
}

const inputArr = [54, 47, 49, 28, 7, 19, 15, 12, 17];

console.log('Input Array: ', inputArr);

const res = bubbleSort(inputArr);

console.log('Result: ', res);