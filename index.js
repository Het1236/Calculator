console.log("Hello");
let x = 0;
let y = 0;
let result = 0;
let operator = "";

const add = (x, y) => {
  operator = "+";
};
const subtract = (x, y) => {
  operator = "-";
};

const multiply = (x, y) => {
  operator = "*";
};

const divide = (x, y) => {
  operator = "/";
};
const root = (x, y) => {
    operator = "root";
}

const clearInput = () => {
    x = 0;
    y = 0;
    result = 0;
    operator = "";
    document.getElementById("inputField1").value = "";
    document.getElementById("inputField2").value = "";
    document.getElementById("result").innerText = "";   
};

const calculate = () => {
  x = parseInt(document.getElementById("inputField1").value);
  y = parseInt(document.getElementById("inputField2").value);
  if (operator === "+") {
    result = x + y;
  } else if (operator === "-") {
    result = x - y;
  } else if (operator === "*") {
    result = x * y;
  } else if (operator === "/") {
    result = x / y;
  } else if (operator ==="root") {
    if (x > 0) {
      result = Math.sqrt(x);
    } else {
      alert("Cannot calculate square root of negative number.");
    }
  }
  else {
    alert("Invalid operator. Please enter a valid operator (+, -, *, /).");
  }

  document.getElementById("result").innerText = `Result: ${result}`;
  
};
