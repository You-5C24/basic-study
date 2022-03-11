const Foo = function () {};
const f1 = new Foo();
console.log(
  `f1.__proto__ === Foo.prototype: ${f1.__proto__ === Foo.prototype}`
);
console.log(
  `Foo.prototype.__proto__ === Object.prototype: ${
    Foo.prototype.__proto__ === Object.prototype
  }`
);
console.log(
  `Foo.__proto__ === Function.prototype: ${
    Foo.__proto__ === Function.prototype
  }`
);
console.log(
  `Object.prototype.__proto__ === null: ${Object.prototype.__proto__ === null}`
);
const o1 = new Object();
console.log(
  `o1.__proto__ === Object.prototype: ${o1.__proto__ === Object.prototype}`
);
console.log(
  `Object.__proto__ === Function.prototype: ${
    Object.__proto__ === Function.prototype
  }`
);
console.log(
  `Function.__proto__ === Function.prototype: ${
    Function.__proto__ === Function.prototype
  }`
);
console.log(
  `Function.prototype.__proto__ === Object.prototype: ${
    Function.prototype.__proto__ === Object.prototype
  }`
);
