import promptSync from 'prompt-sync';
const prompt = promptSync();

const a = Number(prompt('Enter the first number: '));
const b = Number(prompt('Enter the second number: '));
const operator = prompt('Enter an operator (+, -, *, /): ');

let result;

if (operator === '+') {
   result = a + b;
} else if (operator === '-') {
   result = a - b; 
} else if (operator === '*') {
  result = a * b
} else if (operator === '/') {
  result = a / b
} else {
  console.log('Unknown operator');
}

if (result !== undefined) {
  console.log('Result: ' + a + ' ' + operator + ' ' + b + ' = ' + result);
}