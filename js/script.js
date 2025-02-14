document
  .getElementById("btnConvert")
  .addEventListener("click", convertTemperature);
// Event listener targets the button

// Function to convert temperature
function convertTemperature() {
  let inputValue = parseFloat(document.getElementById("inputValue").value);
  // Using parseFloat because we need to convert the value to a number instead of a string
  let fromInputUnit = document.getElementById("fromInputUnit").value;
  let toInputUnit = document.getElementById("toInputUnit").value;
  // Stores the selected temperature unit
  let result = document.getElementById("result");
  // Stores the result

  if (isNaN(inputValue)) {
    result.innerHTML = "Please enter a valid number";
    return;
  } // Returns an error if the input value is not a number (isNaN stands for is Not a Number)

  let celsius, fahrenheit, kelvin;

  if (fromInputUnit === "Celsius" && toInputUnit === "Fahrenheit") {
    celsius = inputValue;
    fahrenheit = (celsius * 9) / 5 + 32;
  } else if (fromInputUnit === "Fahrenheit" && toInputUnit === "Celsius") {
    fahrenheit = inputValue;
    celsius = ((fahrenheit - 32) * 5) / 9;
  } else if (fromInputUnit === "Kelvin" && toInputUnit === "Celsius") {
    kelvin = inputValue;
    celsius = kelvin - 273.15;
  } else if (fromInputUnit === "Celsius" && toInputUnit === "Kelvin") {
    celsius = inputValue;
    kelvin = celsius + 273.15;
  } else if (fromInputUnit === "Fahrenheit" && toInputUnit === "Kelvin") {
    fahrenheit = inputValue;
    celsius = ((fahrenheit - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else if (fromInputUnit === "Kelvin" && toInputUnit === "Fahrenheit") {
    kelvin = inputValue;
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  } else {
    result.innerHTML = "Please select valid units for conversion";
    return;
  }

  // Display the converted temperatures
  if (toInputUnit === "Celsius") {
    result.innerHTML = `${celsius.toFixed(2)} °C`;
  } else if (toInputUnit === "Fahrenheit") {
    result.innerHTML = `${fahrenheit.toFixed(2)} °F`;
  } else if (toInputUnit === "Kelvin") {
    result.innerHTML = `${kelvin.toFixed(2)} K`;
  }
  // toFixed(2) ensures only 2 digits are shown in the results
}
