// const Foo = function () {};
// const f1 = new Foo();
// console.log(
//   `f1.__proto__ === Foo.prototype: ${f1.__proto__ === Foo.prototype}`
// );
// console.log(
//   `Foo.prototype.__proto__ === Object.prototype: ${
//     Foo.prototype.__proto__ === Object.prototype
//   }`
// );
// console.log(
//   `Foo.__proto__ === Function.prototype: ${
//     Foo.__proto__ === Function.prototype
//   }`
// );
// console.log(
//   `Object.prototype.__proto__ === null: ${Object.prototype.__proto__ === null}`
// );
// const o1 = new Object();
// console.log(
//   `o1.__proto__ === Object.prototype: ${o1.__proto__ === Object.prototype}`
// );
// console.log(
//   `Object.__proto__ === Function.prototype: ${
//     Object.__proto__ === Function.prototype
//   }`
// );
// console.log(
//   `Function.__proto__ === Function.prototype: ${
//     Function.__proto__ === Function.prototype
//   }`
// );
// console.log(
//   `Function.prototype.__proto__ === Object.prototype: ${
//     Function.prototype.__proto__ === Object.prototype
//   }`
// );

/**
 * 面试题1
 * 按照如下要求实现Person 和 Student 对象
   a)Student 继承Person 
   b)Person 包含一个实例变量 name， 包含一个方法 printName
   c)Student 包含一个实例变量 score， 包含一个实例方法printScore
   d)所有Person和Student对象之间共享一个方法
 */

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   printName() {
//     console.log(`This is printName: ${this.name}`);
//   }
//   commonMethods() {
//     console.log("我是共享方法");
//   }
// }

// class Student extends Person {
//   constructor(name, score) {
//     super(name);
//     this.score = score;
//   }

//   printScore() {
//     console.log(`This is printScore: ${this.name}, ${this.score}`);
//   }
// }

// const p = new Person("5C24");
// const s = new Student("You", 18);

// p.printName();
// s.printName();
// s.printScore();
// console.log(p.commonMethods === s.commonMethods);

/**
 * 面试题2
 */
// function A() {}

// A.prototype.n = 0;

// A.prototype.add = function () {
//   this.n += 1;
// };

// a = new A();
// b = new A();
// a.add();
// b.add();
// console.log(b.n);

/**
 * 面试题3
 */
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.eat = function () {
//     console.log(age + "岁的" + name + "在吃饭。");
//   };
// }

// Person.run = function () {};
// Person.prototype.walk = function () {};

// let p1 = new Person("jsliang", 24);
// let p2 = new Person("jsliang", 24);

// console.log(p1.eat === p2.eat);
// console.log(p1.run === p2.run);
// console.log(p1.walk === p2.walk);

/**
 * 原型的修改与重写
 */
// function Person(name) {
//   this.name = name;
// }

// let p = new Person("5c24");

// Person.prototype.getName = function () {
//   console.log(this.name);
// };

// p.getName();
// console.log(`update: ${p.constructor === Person}`);

// Person.prototype = {
//   coverName: function () {
//     console.log(`cover: ${this.name}`);
//   },
// };

// let p2 = new Person("you");
// p2.coverName();

// console.log(p.constructor === p2.constructor);

// let p3 = new Person("You_5c24");
// Person.prototype.newFun = function () {
//   console.log(`test`);
// };

// console.log(p2.constructor === p3.constructor);
// p2.newFun();
// p3.coverName();
// p3.newFun();

function Person(name) {
  this.name = name;
}
// 修改原型
Person.prototype.getName = function () {};
var p = new Person("hello");
console.log(p.__proto__ === Person.prototype); // true
console.log(p.__proto__ === p.constructor.prototype); // true
// 重写原型
Person.prototype = {
  getName: function () {},
};
var p = new Person("hello");
console.log(p.__proto__ === Person.prototype); // true
console.log(p.__proto__ === p.constructor.prototype); // false

// Person.prototype = {
//   getName: function() {}
// }
// var p = new Person('hello')
// p.constructor = Person
// console.log(p.__proto__ === Person.prototype)        // true
// console.log(p.__proto__ === p.constructor.prototype) // true
