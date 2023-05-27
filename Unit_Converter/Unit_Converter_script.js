function convertUnit() {
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var input = parseFloat(document.getElementById("unitInput").value);

  if (fromUnit == "meter" && toUnit == "kilometer") {
    var output = input / 1000;
} else if (fromUnit == "meter" && toUnit == "mile") {
    var output = input / 1609.34;
} else if (fromUnit == "meter" && toUnit == "feet") {
    var output = input * 3.28084;
} else if (fromUnit == "meter" && toUnit == "cm") {
    var output = input * 100;
} else if (fromUnit == "meter" && toUnit == "inches") {
    var output = input * 39.3701;
} else if (fromUnit == "kilometer" && toUnit == "meter") {
    var output = input * 1000;
} else if (fromUnit == "kilometer" && toUnit == "mile") {
    var output = input / 1.60934;
} else if (fromUnit == "kilometer" && toUnit == "feet") {
    var output = input * 3280.84;
} else if (fromUnit == "kilometer" && toUnit == "cm") {
    var output = input * 100000;
} else if (fromUnit == "kilometer" && toUnit == "inches") {
    var output = input * 39370.1;
} else if (fromUnit == "mile" && toUnit == "meter") {
    var output = input * 1609.34;
} else if (fromUnit == "mile" && toUnit == "kilometer") {
    var output = input * 1.60934;
} else if (fromUnit == "mile" && toUnit == "feet") {
    var output = input * 5280;
} else if (fromUnit == "mile" && toUnit == "cm") {
    var output = input * 160934;
} else if (fromUnit == "mile" && toUnit == "inches") {
    var output = input * 63360;
} else if (fromUnit == "feet" && toUnit == "meter") {
    var output = input / 3.28084;
} else if (fromUnit == "feet" && toUnit == "kilometer") {
    var output = input / 3280.84;
} else if (fromUnit == "feet" && toUnit == "mile") {
    var output = input / 5280;
} else if (fromUnit == "feet" && toUnit == "cm") {
    var output = input * 30.48;
} else if (fromUnit == "feet" && toUnit == "inches") {
    var output = input * 12;
} else if (fromUnit == "cm" && toUnit == "meter") {
    var output = input / 100;
} else if (fromUnit == "cm" && toUnit == "kilometer") {
    var output = input / 100000;
} else if (fromUnit == "cm" && toUnit == "mile") {
    var output = input / 160934;
} else if (fromUnit == "cm" && toUnit == "feet") {
  var output = input / 30.48;
} else if (fromUnit == "cm" && toUnit == "inches") {
  var output = input / 2.54;
} else if (fromUnit == "inches" && toUnit == "meter") {
  var output = input / 39.3701;
} else if (fromUnit == "inches" && toUnit == "kilometer") {
  var output = input / 39370.1;
} else if (fromUnit == "inches" && toUnit == "mile") {
  var output = input / 63360;
} else if (fromUnit == "inches" && toUnit == "feet") {
  var output = input / 12;
} else if (fromUnit == "inches" && toUnit == "cm") {
  var output = input * 2.54;
} else {
  var output = input;
}
  document.getElementById("unitOutput").innerHTML = output.toFixed(2) + " " + toUnit;
}

function convertTemp() {
  var fromTemp = document.getElementById("fromTemp").value;
  var toTemp = document.getElementById("toTemp").value;
  var input = parseFloat(document.getElementById("tempInput").value);

  if (fromTemp == "celsius" && toTemp == "fahrenheit") {
      var output = (input * (9/5)) + 32;
  } else if (fromTemp == "fahrenheit" && toTemp == "celsius") {
      var output = (input - 32) * (5/9);
  } else if (fromTemp == "celsius" && toTemp == "kelvin") {
    var output = (input + 273.15);
  } else if (fromTemp == "kelvin" && toTemp == "celsius") {
    var output = (input - 273.15);
  } else if (fromTemp == "kelvin" && toTemp == "fahrenheit") {
    var output =  (input-273.15)*(9/5) + 32;
  } else if (fromTemp == "fahrenheit" && toTemp == "kelvin") {
    var output =  (5/9)*(input + 459.67);
  }
   else {
      var output = input;
  }

  document.getElementById("tempOutput").innerHTML = output.toFixed(2) + " " + toTemp;
}
