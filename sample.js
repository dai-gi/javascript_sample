let a = 5;
console.log(--a); // 1が減算される、その後に評価されて4が出力される
console.log(a--); // 評価されて4が出力される、その後に1が減算される
console.log(a--); // 3行目で減算されているので、評価されて3が出力される、その後に1が減算される
// 4
// 4
// 3
