'use strict';

const basket = {
    messageForUser: null,
    goods: {
        videocard: {amount: 3, price: 43640},
        cpu: {amount: 7, price: 5450},
        motherboard: {amount: 1, price: 11000}
    },

    init() {
        this.messageForUser = document.querySelector('.mesForUser');
        this.getMessage();
    },
    getMessage() {
        if (Object.keys(this.goods).length === 0){
            basket.messageForUser.textContent = 'Корзина пуста.'
        } else {
            basket.messageForUser.textContent = `В корзине: ${Object.keys(this.goods).length} товара на сумму\
            ${countBasketPrice(this.goods)} рублей.`
        }
    }
}

function countBasketPrice(basket){
    let total = 0
    for (let i = 0; i < Object.keys(basket).length; i++){
        total += basket[Object.keys(basket)[i]].amount * basket[Object.keys(basket)[i]].price
    }
    return total
}

basket.init()


