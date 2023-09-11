function convertTemperature() {
    // Get the input temperature and unit
    var inputTemp = parseFloat(document.getElementById("temp").value);
    var inputUnit = document.getElementById("unit-from").value;
  
    // Define variables for the output temperature and unit
    var outputTemp;
    var outputUnit = document.getElementById("unit-to").value;
  
    // Perform the temperature conversion
    switch (inputUnit) {
      case "celsius":
        switch (outputUnit) {
          case "fahrenheit":
            outputTemp = (inputTemp * 9 / 5) + 32;
            break;
          case "kelvin":
            outputTemp = inputTemp + 273.15;
            break;
          default:
            outputTemp = inputTemp;
            break;
        }
        break;
      case "fahrenheit":
        switch (outputUnit) {
          case "celsius":
            outputTemp = (inputTemp - 32) * 5 / 9;
            break;
          case "kelvin":
            outputTemp = (inputTemp + 459.67) * 5 / 9;
            break;
          default:
            outputTemp = inputTemp;
            break;
        }
        break;
      case "kelvin":
        switch (outputUnit) {
          case "celsius":
            outputTemp = inputTemp - 273.15;
            break;
          case "fahrenheit":
            outputTemp = (inputTemp * 9 / 5) - 459.67;
            break;
          default:
            outputTemp = inputTemp;
            break;
        }
        break;
      default:
        outputTemp = inputTemp;
        break;
    }
  
    // Set the output temperature
    document.getElementById("output").innerHTML = outputTemp.toFixed(2) + " " + outputUnit;
  }
  
  // Add an event listener for the form submit button
  document.getElementById("submit-button").addEventListener("click", convertTemperature);
