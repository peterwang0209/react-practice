function myFunc() {
    // something
}

const myFunc = () => {
    // something
}

// ------------------------------------------

function printMyname(name) {
    console.log(name);
}
printMyname('Max');

// vs

const printMyname = (name) => {
    console.log(name);
}
printMyname('Max');

// -----------------------------------------

const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2))