/**
 * 内部函数能访问其外部函数的变量
 */
// let B;
// function A() {
//   let a = 1;
//   B = function () {
//     console.log(a);
//   };
// }

// A();
// B();

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

/**
 * 闭包解决上面的问题
 */
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })(i);
}
