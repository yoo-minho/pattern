function calculate(items, firstGuest) {
    return items.map(v => {
        let _price = v.price;
        if (firstGuest) {
            _price = v.price * 0.7; // 첫 손님 30% 할인
        } else if (!v.isFresh) {
            _price = v.price * 0.8; // 덜 신선한 것 20% 할인
        }
        return {
            ...v,
            price: _price
        }
    })
}

function sumPrice(items) {
    return items.reduce((partialSum, a) => partialSum + a.price, 0);
}

const minho = {
    name: 'minho',
    isBuyFirst: false,
    basket: [
        {name: 'melon', price: 1000, isFresh: true}, //700
        {name: 'melon', price: 1000, isFresh: false}, //700
        {name: 'melon', price: 1000, isFresh: false}, //700
        {name: 'apple', price: 2000, isFresh: true}, //1400
        {name: 'apple', price: 2000, isFresh: false}, //1400
    ]
}
console.log(minho.name,
    '총가격:',
    sumPrice(
        calculate(minho.basket, minho.isBuyFirst)));

const aram = {
    name: 'aram',
    isBuyFirst: true,
    basket: [
        {name: 'melon', price: 1000, isFresh: true}, //700
        {name: 'apple', price: 2000, isFresh: true}, //1400
    ]
}
console.log(aram.name,
    '총가격:',
    sumPrice(
        calculate(aram.basket, aram.isBuyFirst)));