// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE
function sumArrays(arr1, arr2) {
    newSumArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newSumArr[i] = arr1[i] + arr2[i];
    }
    return newSumArr
}

// TEST:
console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]