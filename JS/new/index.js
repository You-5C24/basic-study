function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;

  if (typeof constructor !== "function") {
    console.log("type error");
    return;
  }

  // 新建一个空对象，对象的原型指向构造函数的 prototype
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行构造函数
  result = constructor.apply(newObject, arguments);
  let flag =
    result && (typeof result === "object" || typeof result === "function");
  // 返回值是引用类型，就返回引用类型这个对象 如果是值类型，就返回创建的对象
  return flag ? result : newObject;
}

// test
function Foo(name, age) {
  this.name = name;
  this.age = age;
}

const f1 = objectFactory(Foo, "you", "10");
console.log(f1.name, f1.age);

const f2 = objectFactory(Foo, "5c24", "11");
console.log(f2.name, f2.age);
