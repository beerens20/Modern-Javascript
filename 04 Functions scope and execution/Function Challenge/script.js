// Challenge 1
// TODO create getCelsius function taking temperature in fahrenheit as an argument
function getCelsius(temp){
    c = ((temp - 32) * 5) / 9;
    // TODO returns temperature in celcius
    return c;
}

// TODO write it as a 1 line arrow function
const celsius  = (temp) => ((temp - 32) * 5) / 9;

// console.log(getCelsius(80));
// console.log(celsius(80));
console.log(`Challenge 1: The temp is ${celsius(32)} \xB0C`)

// Challenge 2
// TODO Create an arrow function called minMax() that takes in an array of numbers
// TODO return an object with the minimum and maximum numbers in the array
const minMax = (arr) => {
    const min = Math.min(...arr);
    const max =  Math.max(...arr);

    return {
        min,
        max
    }
}

console.log('Challenge 2:', minMax([1,2,3,4,5]));
// Challenge 3
// TODO create an IIFE that takes in length and width of a rectangle and outputs it to the console in a message as soon as the page loads
(function (length, width){
    const result = (length * width);
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${result}.`);
})(5, 2);
