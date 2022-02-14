class MyValidator {
    constructor(validationStrategy) {
        this.validationStrategy = validationStrategy;
    }

    validate(s) {
        return this.validationStrategy.validate(s);
    }
}

class IsNumber {
    validate(s) {
        return !isNaN(Number(s));
    }
}

class isOverFiveLength {
    validate(s) {
        return s.length > 5;
    }
}

const input = "123456";
const input2 = "안녕하세";
const numberValidator = new MyValidator(new IsNumber());
console.log(numberValidator.validate(input));
console.log(numberValidator.validate(input2));

const fiveLengthValidator = new MyValidator(new isOverFiveLength());
console.log(fiveLengthValidator.validate(input));
console.log(numberValidator.validate(input2));