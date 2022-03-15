/**
 * 改变函数 this 指向，但不执行函数
 * 在执行 bind 返回的函数时候 还可以传参
 */

Function.prototype._bind = function (ctx, ...args) {
  const self = this;

  const newFn = function (...rest) {
    return self.call(ctx, ...args, ...rest);
  };

  if (self.prototype) {
    // 复制原函数的 prototype 给 newFn 一些情况下函数没有 prototype，比如箭头函数
    newFn.prototype = Object.create(self.prototype);
  }

  return newFn;
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
bindFoo("18");
