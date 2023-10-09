/*
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52
*/

/* Bubble Sort */

let inputArray1 = [13, 46, 24, 52, 20, 9, 1];

function bubbleSort() {
    const originalArray = inputArray1;
    let length = inputArray1.length;

    console.log("Original Array", originalArray);

    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            if (inputArray1[i] > inputArray1[i + 1]) {
                let temp = inputArray1[i];
                inputArray1[i] = inputArray1[i + 1];
                inputArray1[i + 1] = temp;
            }
        }
    }

    console.log("Result array", inputArray1);
}