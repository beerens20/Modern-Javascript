// Ways to declare variables
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming Conventions
// Only letters, numbers, underscores and dollar signs
// Can't start with a number

// Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables
// Const cannot be re-assigned and has to be initialized
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
    score = score + 1;
}
console.log(score);

// Declare multiple values at once
let a, b, c;
const d = 10, e = 20, f = 30;