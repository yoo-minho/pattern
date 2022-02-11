// https://www.zerocho.com/category/JavaScript/post/580f17ef77023c0015ee9688
class Calculator {
    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(a, b) {
        this.strategy.calculate(a, b);
    }
}

class PlusStrategy {
    calculate(a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
    }
}

class MinusStrategy {
    calculate(a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
    }
}

class MultipleStrategy {
    calculate(a, b) {
        console.log(`${a} x ${b} = ${a * b}`);
    }
}

class DivideStrategy {
    calculate(a, b) {
        console.log(`${a} / ${b} = ${a / b}`);
    }
}

const calculator = new Calculator();
const plus = new PlusStrategy();
const minus = new MinusStrategy();
const multiple = new MultipleStrategy();
const divide = new DivideStrategy();

calculator.setStrategy(plus);
calculator.calculate(6, 2); // 8

calculator.setStrategy(minus);
calculator.calculate(6, 2); // 4

calculator.setStrategy(multiple);
calculator.calculate(6, 2); // 12

calculator.setStrategy(divide);
calculator.calculate(6, 2); // 3