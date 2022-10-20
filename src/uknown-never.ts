let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Talha';
if (typeof userInput === 'string') {
	userName = userInput;
}

function generateError(msg: string, code: number): never {
	throw { message: msg, errorCode: code };
}

const result = generateError('An error occured', 500);
console.log(result);
