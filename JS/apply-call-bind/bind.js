/**
 * 改变函数 this 指向，但不执行函数
 * 在执行 bind 返回的函数时候 还可以传参
 */

Function.prototype._bind = function (ctx, ...args) {
  const o = ctx == undefined ? window : Object(ctx);
  const key = Symbol();
  o[key] = this;

  const self = this;

  const result = function (...innerArgs) {
    if (this instanceof self) {
      this[key] = _this;
      this[key](...[...args, ...innerArgs]);
    } else {
      o[key](...[...args, ...innerArgs]);
    }
  };

  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  result.prototype = Object.create(this.prototype);
  return result;
};

const foo = {
  value: 1,
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

var bindFoo = bar.bind(foo, "5c24");
bindFoo(18);
