/**
 * 改变函数 this 指向，立即执行
 * func.call(ctx, [...args])
 * 与 call 的区别就是 传参不同
 */

Function.prototype._apply = function (ctx, array = []) {
  const o = ctx == undefined ? window : Object(ctx);
  const key = Symbol();
  o[key] = this;
  const result = o[key](...array);
  delete o[key];
  return result;
};

var age = 10;

const obj = {
  age: 18,
};

function foo(a = 0, b = 0) {
  console.dir(this);
  console.log(a + b + this.age);
  return "5c24";
}

console.log(`---ctx:null  ${foo._apply(null)}---`);

console.log(`---ctx:undefined ${foo._apply(undefined, [1, 2])}---`);

console.log(`---ctx:object ${foo._apply(obj)}---`);
