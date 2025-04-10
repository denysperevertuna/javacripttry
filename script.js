dz1

    let num = 100
    console.log(typeof(num))
dz2
let myName = "den"
let latname = "peria"
console.log('my name is', myName, latname);

dz3
let a = 100;
console.log(`Значення змінної: ${a}`);


dzoperator
let userPassword = prompt("Give me ur password")
let username = "Den";
let password = "secret";
const result = password === userPassword ? "You are right" : "You are not right";
alert(result)


let x = 5;
let y = 3;
alert (x * y);
alert (x + y);
alert (x - y);
alert (x / y);

dzloop
let num1, num2;

do {
  num1 = prompt("num1:");
} while (isNaN(num1) || num1 === '' || num1 === null);
num1 = Number(num1);

do {
  num2 = prompt("num2");
} while (isNaN(num2) || num2 === '' || num2 === null);
num2 = Number(num2);

let min = num1 < num2 ? num1 : num2;
let max = num1 > num2 ? num1 : num2;

for (let i = min; i <= max; i++) {
  console.log(i);
}

dzloop2
let num;
do {
  num = prompt("Give me the even number");
} while (isNaN(num) || num === "" || num === null || Number(num) % 2 != 0);
alert("Thx for the num");
console.log(num);

dzfunc
function divideNum(a, b) {
  return a / b;
}
console.log(divideNum(10, 2));

dzfunc2

function calculate() {
  let num1, num2;
  do {
    num1 = prompt("first num");
  } while (isNaN(num1) || num1 === "" || num1 === null);
  num1 = Number(num1);
  do {
    num2 = prompt("Second num");
  } while (isNaN(num2) || num2 === "" || num2 === null);
  num2 = Number(num2);
  let operation;
  do {
    operation = prompt("Choose operation: +, -, *, /");
  } while (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  );
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "divide on 0!";
      break;
  }
  console.log("Result: " + result);
}
calculate();

dzfunc3;

function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(9));
