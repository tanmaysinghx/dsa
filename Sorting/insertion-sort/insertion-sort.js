/*
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52
*/

/* Insertion Sort */

let inputArray2 = [13, 46, 24, 52, 20, 9, 1];

function insertionSort() {
    let originalArray2 = inputArray2;
    let arr = inputArray2;
    let n = inputArray2.length;

    console.log("Original array", originalArray2);

    for (let i = 0; i <= n - 1; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }

    console.log("Result array", arr);
}