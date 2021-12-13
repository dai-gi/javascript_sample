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
    purchases.push(purchase);
    console.log(purchases);
}

function calc() {
    let sum = 0;
    for(let index = 0; index < purchases.length; index++) {
        sum += purchases[index].price * purchases[index].number;
    }
    window.alert(`合計は${sum}円です`);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}
