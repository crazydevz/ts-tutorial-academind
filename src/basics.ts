export {};

console.log("Let's get started!");

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
	return showResult ? console.log(phrase + (num1 + num2)) : num1 + num2;
}

const printResult = true;
const resultPhrase = 'The result is ';
add(4, 8, printResult, resultPhrase);
