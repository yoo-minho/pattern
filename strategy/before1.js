// https://www.zerocho.com/category/JavaScript/post/580f17ef77023c0015ee9688
class Calculator {
    plus(a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
    }
    minus(a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
    }
    multiple(a, b) {
        console.log(`${a} x ${b} = ${a * b}`);
    }
    divide(a, b) {
        console.log(`${a} / ${b} = ${a / b}`);
    }
}

const calculator = new Calculator();

calculator.plus(6, 2); // 8

calculator.minus(6, 2); // 4

calculator.multiple(6, 2); // 12

calculator.divide(6, 2); // 3