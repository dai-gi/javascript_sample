// 剰余引数
function sum1(x, y, ...args) {
    return x + y + args;
}
console.log(sum1(1, 2, 3, 4, 5, 6)); // 33, 4, 5, 6

function sum2(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i]; // 0 + 1 → 1 + 2 → 2 + 3...
    }
    return sum;
}
console.log(sum2(1, 2, 3, 4, 5, 6)); // 21


// Argumentsオブジェクト
function sum3(x, y) {
    console.log(arguments);
}
sum3(2, 3); // [Arguments]{'0':2, '1':3}

function sum4(x, y) {
    arguments[0] = 10;
    console.log(arguments[0]);
    console.log(arguments[1]);
}
sum4(2, 3);
// 10
// 3


// コールバック関数
function sayHello() {
    console.log("Hello");
}
setTimeout(sayHello, 3000); // 3秒後に...「Hello」

// コールバック関数を関数リテラルを使用して実行
setTimeout(function() {console.log("Hello world")}, 3000); // Hello world