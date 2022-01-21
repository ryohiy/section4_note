/**
 * const,letなどの変数宣言
 */

// var val1 = "var変数";

// console.log(val1);

// // var変数は上書き可能
// val1= "var変数を上書き";
// console.log(val1)
// //var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

let val2 = "let変数";

//letは上書きは出来るけど、再宣言は不可

const val3 = "const変数";
//constは上書きも出来ないし、再宣言も出来ない

const val4 = {
  name: "ryo",
  age: 24
};

val4.name = "tanaka";
val4.addres = "nagano";
console.log(val4);
//constで定義したオブジェクトはプロパティの変更が可能

const val5 = ["dog", "cat"];

val5[0] = "bird";
val5.push("monkey");
console.log(val5);
//constで定義した配列はプロパティの変更が可能
// Reactでは、変数定義は基本constで行う

/**
 * テンプレート文字列
 */
const name = "ひよし";
const age = 24;
// 私の名前は日吉です。年齢は24さいです

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";

//→いちいち+記号でつなげるの面倒くさいよね？

//テンプレート文字列！
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);
//この講義では,文字列の中でjsの変数を使うなら、テンプレート文字列を使ったほうが
//すっきりするよね、との事。おれもそう思う。
