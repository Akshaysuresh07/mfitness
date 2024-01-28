//bmi calculator
function calculator() {
    let height = parseInt(document.querySelector("#height").value);

    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    else {

        let bmi = (weight / ((height * height)
            / 10000)).toFixed(2);

        if (bmi < 18.6) result.innerHTML =
            `<h1>Under Weight : <span style="font-size:26px; color:red;"> ${bmi}</span></h1>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `<h1>Normal : <span style="font-size:26px">${bmi}</span></h1>`;

       
        else result.innerHTML =
        `<h1>Over Weight : <span style="font-size:26px; color:red;">${bmi}</span></h1>`;
    }
}
 