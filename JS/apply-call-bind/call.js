/**
 * 改变函数 this 指向，立即执行
 * func.call(ctx, ...args)
 * 实现思路：把函数赋值给指定对象，由指定对象去调用函数，调用完再删除
 */
Function.prototype._call = function (ctx, ...args) {
  const o = ctx == undefined ? window : Object(ctx);
  // 设置唯一值，以免与 o 原有的 key 重复，导致覆盖
  const key = Symbol();
  o[key] = this;
  const result = o[key](...args);
  delete o[key];
  return result;
};

function foo() {
  console.dir(this);
  return this.name || "5c24";
}

console.log(`---ctx:null  ${foo._call(null)}---`);

console.log(`---ctx:undefined ${foo._call(undefined)}---`);

console.log(`---ctx:number ${foo._call(1)}---`);

console.log(`---ctx:string ${foo._call("1")}---`);

console.log(`---ctx:boolean ${foo._call(true)}---`);

const obj = {
  name: "you",
};

console.log(`---ctx:object ${foo._call(obj)}---`);
