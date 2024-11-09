// °F = °C × (9/5) + 32.
let firstinputvalue = document.getElementById("first-number");
let button = document.getElementsByClassName("btn")[0];
let answer = document.getElementsByClassName("answer")[0];

window.onload = function () {
      if (localStorage.getItem("celsiusValue")) {
            firstinputvalue.value = localStorage.getItem("celsiusValue");
      }
      if (localStorage.getItem("fahrenheitValue")) {
            answer.textContent = localStorage.getItem("fahrenheitValue");
      }
};

function convert() {
      let firstnumber = parseFloat(firstinputvalue.value);

      let fahrenheit = (firstnumber * (9 / 5) + 32).toFixed(2) + "°F";
      answer.textContent = fahrenheit;

      localStorage.setItem("celsiusValue", firstinputvalue.value);
      localStorage.setItem("fahrenheitValue", fahrenheit);
}

button.addEventListener("click", convert);
