let btn = document.querySelector('button');
let output = document.querySelector('.output');
let heightInput = document.querySelector('#height');
let weightInput = document.querySelector('#weight');


btn.addEventListener('click', function (e) {
    let height = heightInput.value;
    let weight = weightInput.value;
    let BMI = Math.round(weight*10 / (height * height)) /10;
    output.innerHTML = BMI;
});