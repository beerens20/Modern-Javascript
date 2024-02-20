const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x+y;
const difference = x-y;
const product = x*y;
const quotient = x/y;
const remainder = x%y;

console.log(x, y);
console.log(`Sum: ${x}+${y} = ${sum}`);
console.log(`Difference: ${x}-${y} = ${difference}`);
console.log(`Product: ${x}*${y} = ${product}`);
console.log(`Quotient: ${x}/${y} = ${quotient}`);
console.log(`Remainder: ${x}%${y} = ${remainder}`);

// or
// const sumOutput = `Sum: ${x}+${y} = ${sum}`;
// console.log(sumOuput);