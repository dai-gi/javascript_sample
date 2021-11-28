let number = 1;
{
    let number = 2;
    console.log(number);
}
console.log(number);
// ブロック内の出力結果：2
// ブロック外の出力結果：1

{
    let string = "B";
    console.log(string);
    console.log(number);
}
// ブロック内の出力結果：B
// ブロック外の出力結果：1

{
    let string = "A";
    console.log(string);
}
console.log(string);
// ブロック内の出力結果：A
// ブロック外の出力結果：ReferenceError: string is not defined
