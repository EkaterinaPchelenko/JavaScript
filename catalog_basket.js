'use strict';

const basket = {
    basketAmount: null,
    goods: {},

    init() {
        this.basketAmount = document.querySelector('.basket');
        this.getMessage();
        this.cleanBasket();
    },

    getAmount(){
        var wholeAmount = 0;
        for (let key in this.goods){
            wholeAmount += this.goods[key].amount;
        }
        return wholeAmount;
    },

    getMessage() {
        if (Object.keys(this.goods).length === 0){
            this.basketAmount.innerHTML = 'The basket is empty!';
        } else {
            this.basketAmount.innerHTML = `There is/are: ${this.getAmount()} goods worth\
            ${this.countBasketPrice(this.goods)} rubles.`;
        }
    },

    countBasketPrice(basket){
    let total = 0;
    for (let i = 0; i < Object.keys(basket).length; i++){
        total += basket[Object.keys(basket)[i]].amount * basket[Object.keys(basket)[i]].price;
    }
    return total;
    },

    cleanBasket() {
        const cleanBtn = document.querySelector(".btn");
        cleanBtn.addEventListener("click", () => {this.goods = {}; this.getMessage()});

    }
}

const catalog = {
    catalogAmount: null,
    catalogGoods: [
        {
            name: 'Videocard',
            price: 43640
        },
        {
            name: 'Cpu',
            price: 5450
        },
        {
            name: 'Motherboard',
            price: 11000
        }
    ],

    init() {
      this.catalogAmount = document.querySelector('.catalog');
      this.getCatalogView();
      this.getPrice();
    },

    getCatalogView() {
        for (let j = 0; j < this.catalogGoods.length; j++){
            const name = document.createElement('h3');
            this.catalogAmount.appendChild(name).textContent = `${this.catalogGoods[j].name}`;
            const price = document.createElement('h5');
            this.catalogAmount.appendChild(price).textContent = `${this.catalogGoods[j].price} rubles`;
            const button = document.createElement('button');
            button.id = `${j}`;
            this.catalogAmount.appendChild(button).textContent = 'Buy';
        }
    },

    getPrice() {
        this.catalogAmount.addEventListener("click", (event) => {
            if (event.target.tagName === 'BUTTON'){
                var price = this.catalogGoods[event.target.id].price;
                if (basket.goods[this.catalogGoods[event.target.id].name] === undefined){
                    basket.goods[this.catalogGoods[event.target.id].name] = {amount: 0, price: price}
                }
                ++ basket.goods[this.catalogGoods[event.target.id].name].amount;
                basket.getMessage();
            }
        })

    }
}
catalog.init();
basket.init();



