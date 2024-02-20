// TODO create a function that takes in num1, num2, and operator (+,-,*, or /)
function doMath(num1, num2, operator){
    let result;

    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = 'Enter a valid operator.';
    }
    console.log(result);
    return result;
}
// TODO The function should return the desired result
// TODO The function should return an error message if anything other than the 4 operators are passed in

doMath(5,2,"+"); //returns 7
doMath(5,2,"-"); // returns 3
doMath(5,2,"*"); // returns 10
doMath(5,2,"/"); // returns 2.5
doMath(5,2,'&') // returns error message