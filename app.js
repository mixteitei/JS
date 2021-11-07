let hello = 'Hello World';
let int1 = 1;
//負数を代入する
let int2 = -10;
//小数点を代入する
let float1 = 3.14;
//alert(float1);

//alert(4+3);
//alert(8-5);
//掛け算
//alert(2*6);
//割り算
// alert(10/2);

// alert('Hello'+'World');

let str1 = 'Hello';
let str2 = 'World';
// alert(str1+str2);


let orange = 100;
let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がりんごより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');