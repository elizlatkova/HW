//find Max array element
let numbers = [1,7,2,-6,0,9,8,4,3];
let maxNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]>maxNum){
        maxNum = numbers[i];
    };
};
console.log(`Max number in this array is ${maxNum}.`);

let minNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]<minNum){
        minNum = numbers[i];
    };
};
console.log(`Min number in this array is ${minNum}.`);