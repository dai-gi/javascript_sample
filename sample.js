console.log("A" + "BC");
console.log("12" + "34");
// ABC
// 1234

console.log(1 + "BC"); // 1は文字列として評価される
// 1BC

// 変数 + 文字列
let name = "Alice";
let age = 10;
console.log(name + "は" + age + "歳です。");
// Aliceは10歳です。

// +（プラス）以外の演算はできない
console.log("A" * 3);
console.log("A" / 3);
// NaN
// NaN

// 数値に変換できる値は自動で変換して演算される
console.log("2" * "3");
console.log("9" / 3);
// 6
// 3
