let btn = document.querySelector('button');
let output = document.querySelector('.output');
let heightInput = document.querySelector('#height');
let weightInput = document.querySelector('#weight');


btn.addEventListener('click', function (e) {
    let height = heightInput.value;
    let weight = weightInput.value;
    let BMI = Math.round(weight * 10 / (height * height)) / 10;
    output.innerHTML = BMI;

    if (BMI < 16) {
        console.log('тежко недохранване');
    }
    else if (BMI >= 16 && BMI < 17) {
        console.log('средно недохранване');
    }
    else if (BMI >= 17 && BMI < 18.49) {
        console.log('леко недохранване');
    }
    else if (BMI < 18.5) {
        console.log('поднормено тегло');
    }
    else if (BMI >= 18.5 && BMI < 25) {
        console.log('средно недохранване');
    }
    else if (BMI == 25) {
        console.log('наднормено тегло');
    }
    else if (BMI > 25 && BMI < 30) {
        console.log('предзатлъстяване');
    }
    else if (BMI == 30) {
        console.log('затлъстяване');
    }
    else if (BMI > 30 && BMI < 35) {
        console.log('затлъстяване I степен');
    }
    else if (BMI >= 35 && BMI < 40) {
        console.log('затлъстяване II степен');
    }
    else if (BMI >= 40) {
        console.log('затлъстяване III степен');
    }
});

