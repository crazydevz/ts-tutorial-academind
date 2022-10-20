function add(num1: number, num2: number) {
	return num1 + num2;
}

function printResult(value: number): void {
	console.log(value);
}

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
	const result = num1 + num2;
	cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;

export {};

console.log(combineValues(7, 7));

addAndHandle(3, 2, num => {
	console.log(num);
	// return num; // TS would not use the returned value
});
