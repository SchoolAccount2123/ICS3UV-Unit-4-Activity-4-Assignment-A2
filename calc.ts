// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-12-15

//---
// Calculator Functions
//---

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a:number, b: number): number {
  return a / b;
}

function absoluteValue(a: number): number {
  return Math.abs(a);
}

function roundNumber(a: number): number {
  return Math.round(a)
}

function exponent(base: number, power: number): number {
  return Math.pow(base, power);
}

function squareRoot(a: number): number {
  return Math.sqrt(a);
}

//---
// Main calculator program
//---

function calculator(): void {
  console.log("Welcome to my calculator program.");
  console.log("Which operation would you like to perform today?");
  console.log("a. add");
  console.log("b. subtract");
  console.log("c. multiply");
  console.log("d. divide");
  console.log("e. absolute value");
  console.log("f. round");
  console.log("g. raise to an exponent");
  console.log("h. square root");

  const choice: string = prompt("What operation do you want to choose:")!;

  if (choice === "a") {
    const x = Number(prompt("Enter the first number:"));
    const y = Number(prompt("Enter the second number:"));
    console.log(`${x} + ${y} = ${add(x, y)}`);

  } else if (choice === "b") {
    const x = Number(prompt("Enter the first number:"));
    const y = Number(prompt("Enter the second number:"));
    console.log(`${x} - ${y} = ${subtract(x, y)}`);

  } else if (choice === "c") {
    const x = Number(prompt("Enter the first number:"));
    const y = Number(prompt("Enter the second number:"));
    console.log(`${x} × ${y} = ${multiply(x, y)}`);

  } else if (choice === "d") {
    const x = Number(prompt("Enter the dividend:"));
    const y = Number(prompt("Enter the divisor:"));
    console.log(`${x} ÷ ${y} = ${divide(x, y)}`);

  } else if (choice === "e") {
    const x = Number(prompt("Enter a number:"));
    console.log(`The absolute value of ${x} is ${absoluteValue(x)}`);

  } else if (choice === "f") {
    const x = Number(prompt("Enter a decimal number:"));
    console.log(`${x} rounded is ${roundNumber(x)}`);

  } else if (choice === "g") {
    const base = Number(prompt("Enter the base:"));
    const power = Number(prompt("Enter the exponent:"));
    console.log(`${base} raised to the power of ${power} is ${exponent(base, power)}`);

  } else if (choice === "h") {
    const x = Number(prompt("In order to calculate the square root, supply a non-negative value:"));
    console.log(`The square root of ${x} is ${squareRoot(x)}`);
  }
}

// Run program
calculator();