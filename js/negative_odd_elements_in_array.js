//Example of printing the negative odd elements in an array
var numArray = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];
console.log(`Negative and odd numbers:`);
for (let i = 0; i < numArray.length; i++) {
    if(numArray[i]<0 && numArray[i]%2 != 0){
        console.log(numArray[i]);
    };
};