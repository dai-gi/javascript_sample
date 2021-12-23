const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
    const price = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    let purchase = {
        price: price,
        number: number,
    };
    purchases.push(purchase)
    window.alert(`${display()}\n小計${subtotal()}円`);
}

function display(){
    return purchases.map(purchase => {
        return `${purchase.price}円が${purchase.number}点`
    }).join("\n");
}

function subtotal() {
    return purchases.reduce((prev, purchase) => {
        return prev + purchase.price * purchase.number
    }, 0);
    }

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
    if(sum == 0 || sum >= 3000) {
        postage = 0;
    } else if(sum < 1000) {
        postage = 500;
    } else {
        postage = 250;
    }
}
