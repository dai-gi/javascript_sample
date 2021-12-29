const idElement = document.getElementById("product");
const numberElement = document.getElementById("number");
const products = [
    {
        id: "1",
        name: "オリジナルブレンド200g",
        price: 500
    },
    {
        id: "2",
        name: "オリジナルブレンド500g",
        price: 900
    },
    {
        id: "3",
        name: "スペシャルブレンド200g",
        price: 700
    },
    {
        id: "4",
        name: "スペシャルブレンド500g",
        price: 1200
    }
]
let purchases = [];

function add() {
    let purchase;
    const number = numberElement.value;
    products.forEach(element => {
        if(element.id === idElement.value) {
            purchase = {
                id: element.id,
                name: element.name,
                price: element.price,
                number: parseInt(number)
            };
        }
    })
    const newPurchase = purchases.findIndex((item) => item.id === purchase.id)
    if (purchases.length < 1 || newPurchase === -1) {
        purchases.push(purchase);
    } else {
        purchases[newPurchase].number += purchase.number;
    }
    window.alert(`${display()}\n\n小計${subtotal()}円`);
    idElement.value = "";
    numberElement.value = "";
}

function display() {
    return purchases.map(purchase => {
        return `${purchase.name} ${purchase.price}円:${purchase.number}点`;
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
    window.alert(`${display()}\n\n小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
    purchases = [];
}

function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
        return 0;
    } else if (sum < 1000) {
        return 500;
    } else {
        return 250;
    }
}