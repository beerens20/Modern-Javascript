// Challenge 1
// Result should be [6, 5, 4, 3, 2, 1, 0]
const arr = [1, 2, 3, 4, 5];

arr.reverse(); //reverses the array
arr.push(0); //adds a 0 to the end of the array
arr.unshift(6); //adds a 6 to the beginning of the array
console.log('Reverse', arr);

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let arr3 = arr1.concat(arr2.slice(1))
console.log('Concat', arr3);

