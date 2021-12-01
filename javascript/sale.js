const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

function calc() {
    const price = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    window.alert(`${price}円が${number}個。小計は${price * number}円です`);
}