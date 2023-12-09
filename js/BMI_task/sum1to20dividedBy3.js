// Да се напише програма, която изписва в конзолата сумата на четните числа, които се делят на 3, в интервала [1 - 20] включително.

let sum = 0;
for (let i = 1; i < 21; i++) {
    if(i%3==0 && i%2==0){
        sum +=i;
    };  
};
console.log('This is the sum of even numbers between 1 and 20 / by 3: '+sum);