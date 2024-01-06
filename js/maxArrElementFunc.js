// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven(arr) {
    let maxEvenNum;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            maxEvenNum = arr[i];
            break
        }else{
            return "There is no even numbers!";
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxEvenNum && arr[i] % 2 ==0) {
            maxEvenNum = arr[i];
        };
    };
    return maxEvenNum
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}.`);