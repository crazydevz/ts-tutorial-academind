export {};

type Combinable = string | number;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
	input1: Combinable,
	input2: Combinable,
	conversionType: ConversionDescriptor
) {
	let result: Combinable;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		conversionType === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedAges = combine(14, 22, 'as-number');
const combinedStringAges = combine('14', '22', 'as-number');
const combinedNames = combine('Ali', 'Tahir', 'as-string');
console.log(combinedAges, combinedStringAges, combinedNames);
