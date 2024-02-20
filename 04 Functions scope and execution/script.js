function sayHello(name = 'empty'){
    return name + ' is here!';
}

console.log(sayHello('Mike'));

function first(){
    const x = 100;
    function second(){
        const y = 200;
    }
    second();
}
first();