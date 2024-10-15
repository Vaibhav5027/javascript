const form = document.querySelector('form');
const result = document.querySelector('#results')
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    if (isNaN(height) || isNaN(weight)) {
        result.innerHTML = "please enter value in number format"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`;
    }
})