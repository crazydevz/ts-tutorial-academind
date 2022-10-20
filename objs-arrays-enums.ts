// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: 'Talha',
// 	age: 24,
// 	hobbies: ['cooking', 'sports', 'reading'],
// 	role: [2, 'author'],
// };

enum Role {
	ADMIN = 3,
	AUTHOR,
	READ_ONLY = 'READ_ONLY',
}

const person = {
	name: 'Talha',
	age: 24,
	hobbies: ['cooking', 'sports', 'reading'],
	role: Role.AUTHOR,
};

console.log(person.role);

// person.role.push('admin'); // Doesn't throw compile time error
// person.role[1] = 10; // Throws compile time error

let favActivities: string[];
favActivities = ['sleeping', 'hiking'];

console.log(person.name);
for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// hobby.map(); // Throws compile time error
}
