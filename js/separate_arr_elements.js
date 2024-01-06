// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// HINT: you can push a value in a array by using array.push(value) method. 

const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenPositiveNums = [];
let oddNegativeNums = [];

for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > 0 && numbersArr[i] % 2 == 0) {
        evenPositiveNums.push(numbersArr[i]);
    } else if (numbersArr[i] < 0 && numbersArr[i] % 2 != 0) {
        oddNegativeNums.push(numbersArr[i]);
    };
};

console.log(`Even positive numbers: ${evenPositiveNums}`);
console.log(`Odd negative numbers: ${oddNegativeNums}`);