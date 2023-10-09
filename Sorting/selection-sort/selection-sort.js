/*
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52
*/

/* Selection Sort */

let inputArray = [13, 46, 24, 52, 20, 9, 1];

function selectionSort() {
    let length = inputArray.length;
    const originalArray = inputArray;

    console.log("Input array", originalArray);
    
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (inputArray[j] < inputArray[minIndex]) {
                minIndex = j;
            }
        }
        let temp = inputArray[i];
        inputArray[i] = inputArray[minIndex];
        inputArray[minIndex] = temp;
    }
    console.log("Result", inputArray);
}

