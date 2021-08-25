let basket = {videocard: {amount: 3, price: 43640}, cpu: {amount: 7, price: 5450}, motherboard: {amount: 1, price: 11000}}

function countBasketPrice(basket){
    let total = 0
    for (let i = 0; i < Object.keys(basket).length; i++){
        total += basket[Object.keys(basket)[i]].amount * basket[Object.keys(basket)[i]].price
    }
    return total
}

console.log(`Итог: ${countBasketPrice(basket)}.`)
