class Calculator {
    calculate(firstGuest, items) {
        let sum = 0;
        items.forEach(v => {
            const {
                price,
                isFresh
            } = v;
            if (firstGuest) {
                sum += price * 0.9; // 첫 손님 10% 할인
            } else if (!isFresh) {
                sum += price * 0.8; // 덜 신선한 것 20% 할인
            } else {
                sum += price;
            }
            //애초에 이게 맞나? 첫 고객은 덜신선해도 10% 할인이라는게?
        })
        return sum;
    }
}

console.log(new Calculator().calculate(true, [
    {name: 'melon', price: 1000, isFresh: true},
    {name: 'apple', price: 2000, isFresh: false},
]))