/**
 * 函数被谁调用，this 就指向谁。
 * 没有被对象调用，就指向 window
 */

function foo() {
  console.log(this.name);
}

var name = "5c24";
foo();

var obj = {
  name: "You",
  foo: foo,
};

obj.foo();

/**
 * new 的优先级最高， this 只会绑定在实例对象上
 */

var f1 = new foo();

f1.name = "You_5c24";
console.log(f1.name);

/**
 * apply call bind 优先级仅次于 new
 */

/**
 * 箭头函数没有 this，所以不能被改变
 * 箭头函数的 this 只取决于定义时的环境
 */
var a = 1;
const fn = () => {
  console.log(this.a);
};

const obj1 = {
  fn,
  a: 2,
};

obj1.fn();

// 例子
const test = {
  b: 2,
  foo: function () {
    console.log(this);
  },
};

function b(foo) {
  // 输出什么？
  foo();
}

test.foo();
b(test.foo);
