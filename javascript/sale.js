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
}

function calc() {
    let sum = 0;
    let postage; // 条件分岐で値が決まるため定義のみに変更
    for(let i=0; i<purchases.length; i++) {
        sum += purchases[i].price * purchases[i].number;
    }
    if(sum == 0 || sum >= 3000) {
        postage = 0;
    } else if(sum < 1000) {
        postage = 500;
    } else {
        postage = 250;
    }
    window.alert(`送料は${postage}円です。合計は${sum + postage}円です`)
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}
