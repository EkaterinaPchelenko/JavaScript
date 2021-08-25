function splitting(number){
    let myObj = {}
    if (number > 1 && number < 999){
        myObj.units = number % 10;
        number = Math.floor(number / 10);
        myObj.dozens = number % 10;
        number = Math.floor(number / 10);
        myObj.hundreds = Math.floor(number);
    } else {
        console.log('Введите число от 1 до 999!!!');
    }
    console.log(myObj);
}

let number = Math.floor(Math.random() * 1000);
console.log(number);
splitting(number);
