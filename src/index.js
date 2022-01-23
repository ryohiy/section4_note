// /**
//  * const,letなどの変数宣言
//  */

// // var val1 = "var変数";

// // console.log(val1);

// // // var変数は上書き可能
// // val1= "var変数を上書き";
// // console.log(val1)
// // //var変数は再宣言可能
// // var val1 = "再宣言";
// // console.log(val1);

// let val2 = "let変数";

// //letは上書きは出来るけど、再宣言は不可

// const val3 = "const変数";
// //constは上書きも出来ないし、再宣言も出来ない

// const val4 = {
//   name: "ryo",
//   age: 24
// };

// val4.name = "tanaka";
// val4.addres = "nagano";
// console.log(val4);
// //constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ["dog", "cat"];

// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);
// //constで定義した配列はプロパティの変更が可能
// // Reactでは、変数定義は基本constで行う

// /**
//  * テンプレート文字列
//  */
// const name = "ひよし";
// const age = 24;
// // 私の名前は日吉です。年齢は24さいです

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";

// //→いちいち+記号でつなげるの面倒くさいよね？

// //テンプレート文字列！
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);
// //この講義では,文字列の中でjsの変数を使うなら、テンプレート文字列を使ったほうが
// //すっきりするよね、との事。おれもそう思う。

// /**
//  * アロー関数
//  */
// //従来の関数
// // function func1(str) {
// //   return str;
// // }

// // console.log(func1("func1です"));
// const func2 = function (str) {
//   return str;
// };

// console.log(func2("fun2です"));

// //アロー関数
// const func3 = (str) => {
//   return str;
// };

// console.log(func3("func3です"));

// //アロー関数の()は省略も出来る↓これは好み
// const func4 = (str) => {
//   return str;
// };

// console.log(func4("func4です"));
// //アロー関数で、中の処理が一行で終わるような単一式なら↓
// const func5 = (str) => str;

// console.log(func5("func5です"));
// const func6 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func6(10, 20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name :"ryo",
//    age :24
//  }

//  const message3 = `名前は${myProfile.name},年齢は${myProfile.age}`;

//  //毎回myProfile書くのめんどいよね？
// //そこで分割代入
// const{name,age} = myProfile;

// const message4 = `名前は${name},年齢は${age}`;

//memo 勉強で利用したコードはいいとこでコメントアウトする。
// const myProfile = ['ryo',24];

// const[name,age] = myProfile;

// const message = `名前は${name},年齢は${age}`;
// console.log(message);

/**分割代入は、既にあるobjや配列を使いやすいように
 *かくpropを変数に入れるのが目的
 */

/**
 * デフォルト値
 */

//  const sayHello = (name = 'guest')=>console.log(`こんにちは${name}`);
// sayHello("ryo");
//変数のあとに=でなんかあったら初期値を設定してるんだなと思え

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);
// //配列の中の値を順番に出力してくれる
// //配列というよりもintとか、strとかになるし、順番に出してくれる

// //まとめる
// const arr2 = [1,2,3,4,5];
// const[num1,num2,...arr3]= arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// //配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
//スプレッド構文で値をコピーした時は、参照を引き継がない
//arr8のような値のコピーの仕方は参照渡しになってしまい、
//arr8の値を変更した時arr4にも影響が出てしまう

/**値を別の変数にコピーして使いたい時、
 * コピー元の変数にも影響を与えたいという事は
 * まぁないはず。（それなら別の変数にわざわざいれ無くてもいいし）
 * なので代入のさいはスプレッド構文でするようにしよう
 */

/**
 * map やfilterを使った配列の処理
 */

// const nameArr = ['日吉','たなか','鈴木'];

// for(let i = 0;i< nameArr.length ; i++){
// console.log(nameArr[i]);
// }
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name)=>console.log(name));
/**
 * mapの使い方は大きくふたつ
 * ①配列から新しい配列を作成する
 * ②配列を単純に回して処理をする
 *
 * うまく使えばfor文を書く必要がなくなる
 */

//  const numArr = [1,2,3,4,5];

// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);
/**
 * 配列に対してある条件に当てはまるものだけの配列
 * を新しく作る事が出来る
 */

// const nameArr = ['日吉','たなか','鈴木'];

// const newNameArr = nameArr.map((name,index)=>console.log(`${index}番目は${name}です`));
// console.log(newNameArr);

//mapの第一引数は val

// const newNameArr = nameArr.map((name) =>{
//   if(name !== '日吉'){
//     return`${name}さん`;
//   }else{
//     return name;
//   }
// })
// console.log(newNameArr);
/**
 * 三項演算子
 */

//ある条件がtrueの時:条件がfalseの時
// const val1 = 1< 0?'true':'false';
// console.log(val1);

// const num = "1300";
// const formattedNum = ty
// console.log()

// const checkSum = (num1,num2)=>{
//   return num1 +num2 >100 ?'over' : 'ok';
// }

// console.log(checkSum(50,40))
// console.log(checkSum(50,60))

/**
 * 論理演算子本当の意味
 */

const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
  console.log("１か２はtrueです");
  //この場合、「左側がfalseなら右側を返す」
  //今の書き方なら、if文に対して左がtrueで、trueを渡すので、if
  // 文の中を実行する
  //どちらもfalseなら、左がfalseの時、次に右を観て、
  // それがfalseだから結局if文にfalseが入ってきて
  // if文が実行されない。
  //簡単に考えると、左から順に値がtrueかみていき,trueの時点で
  //条件文全体としてtrueを返すし、最後までfalseならfalseを
  //返す。てこと。
}

//|| !==または,  && !== かつ　である！

const num = null;
const fee = num || "金額未設定";
console.log(fee);
//|| は左側がfalseなら右側を返す,左がtrueならそのまま左を返す

//こんな感じで && をみていく
//&&は　左側がtrue なら　右側を返す
//さっきのかんじだと、trueの時次の判定に進み、falseの時点で条件全体が
//falseになる。そしてその時点で次の処理、状態に進まなくなる。
