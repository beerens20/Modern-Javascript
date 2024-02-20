// create for loop print numbers 1 to 100
// for multiples of 3 print 'Fizz' instead of the number
// for multiples of 5 print 'Buzz' instead of the number
// for multiple of both 3 and 5 print 'FizzBuzz' instead of the number

// for (let i = 1; i <=100; i++){
//     if (i%3 === 0 && i%5 === 0){
//         console.log('FizzBuzz');
//     } else if (i%3 === 0){
//         console.log('Fizz');
//     } else if (i%5 === 0){
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

const users = [
    { name: 'Brad', gender: 'Male' },
    { name: 'Kate' },
    { name: 'Steve' },
];

for (const user of users){
    console.log(user.name);
}