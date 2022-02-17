class Calculator {
    constructor(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    calculate(items) {
        let sum = 0;
        items.forEach(v => {
            sum += this.discountStrategy.getDiscountPrice(v);
        })
        return sum;
    }
}

class FirstGuestDiscountStrategy {
    getDiscountPrice(v) {
        return v.price * 0.9
    }
}

class NonFreshDiscountStrategy {
    getDiscountPrice(v) {
        return v.isFresh ? v.price * 0.8 : v.price
    }
}