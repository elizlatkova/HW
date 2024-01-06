arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];
console.log(arr);
console.log(`rows`);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        console.log(arr[i][j]);
    }
};

console.log(`columns`);
for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j][i]);
    }
};