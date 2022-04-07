// 数据类型有哪些
/**
 * undefined null string number boolean object symbol BigInt
 *
 * 基本类型 undefined null string number boolean symbol BigInt
 * 引用类型 数组 对象 函数
 *
 * 基本类型存在栈中 引用类型存在堆中
 *
 * undefined 和 null  区别
 * 从定义的角度: undefined 代表未定义 变量声明了没定义会返回 undefined; null 代表空对象 一般用来表示对象的初始化状态
 * 从类型的角度: typeof undefined === undefined  typeof null === object
 * undefined特殊性角度: undefined 可以用作变量名
 *
 * 安全的获取 undefined 值 void(0)
 *
 * 为什么有 BigInt 提案
 * 一些超过了 Number 的最大安全数字范围的数值操作会造成精度丢失，导致计算不准。一般需要借助第三方库来进行计算。 因此推出BigInt
 */

// 数据类型的检测方式
/**
 * 1. typeof
 * 2. instanceof
 * 3. constructor   eg. '123'.constructor === String
 * 对象实例通过 constructor 访问其构造函数，如果改变了对象实例的原型，则不能用来判断数据类型
 * 4. Object.prototype.toString.call()
 *
 *
 * instanceof 操作符的实现及原理
 * 原理：判断构造函数的 prototype 是否出现在对象实例的原型链中的任何位置
 *
 * 判断数组的方式: instanceof Array.isArray  Object.prototype.toString.call() 原型链判断 Array.prototype.isPrototypeOf()
 *
 * typeof null === object 在最初的JS，object 存储的类型标签是000, null 的类型标签也是000
 * typeof NaN === number
 */

function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof([1, 2, 3], Array));

// 为什么 0.1 + 0.2 !== 0.3
/**
 * 计算机是通过二进制的方式来计算的
 * 0.1 转成二进制是 0.00011001100... 1100循环  0.2 转成二进制是 0.0011001100.... 1100循环
 * 所以相加会是个无限循环的二进制
 *
 * 如何让其等于0.3:
 * toFix(2)
 * 判断两个值相减的绝对值是否小于 Number.EPSILON 及 2的-52次方，小于就判定等于
 */

// Object.is()与比较符 === == 的区别
/**
 * Object.is() 与 === 基本相同，不进行强制转换直接比较。 除了一些特例 Object.is(NaN, NaN) === true  Object.is(+0, -0) === false
 * == 操作符会先进行强制转换再进行比较
 *
 * isNaN 和 Number.isNaN 区别
 * isNaN 会先强制转为 number,任何不能被转换为数值的值都返回true
 * Number.isNaN 不进行转换， 先判断是否为数字，是数字的话再判断是否为NaN
 *
 *
 * == 操作符的强制转换规则
 * 1.左右类型相同，比较大小
 * 2.类型不同，进行类型转换
 * 3.对比 null 和 undefined  返回 true
 * 4.对比 string 和 number 转为 number 再比大小
 * 5.其中一方为 boolean, boolean 转 number 再判断
 * 6.其中一方为 object且另一方为 string number symbol, object 转基本类型 再判断
 *
 *
 * 其他值到字符串的转换规则
 * null -> 'null'  undefined -> 'undefined' true -> 'true' false -> 'false'
 * number 类型直接转换 极大极小的数以指数形式展示
 * symbol 类型直接强制转换
 * object toString()
 *
 * 其他值到数字值的转换规则
 * null -> 0 undefined -> NaN true -> 1 false -> 0
 * string 类型用 Number() 强转
 * symbol类型报错，不能转为数字
 * 对象先转为相对应的基本类型。在按照以上规则强转
 *
 * 其他值到布尔值的转换规则
 * 假值 undefined null false +0 -0 NaN ""
 * 其余都是真值
 */

// js 中如何进行隐式类型转换
/**
 * 每个值都隐含的自带 ToPrimitive 方法，用来将值转为基本类型值
 * ToPrimitive(obj, type)
 * Date 对象:  type 默认为 stirng  obj.toString().valueOf()
 * 其余: type 默认为 number  obj.valueOf().toString()
 *
 * 操作符 隐式转换
 * + : 两边至少有一个 string -> 转为 string，否则转为 number
 * - * / : 转为 number
 * < > :
 *  基本类型比较: 两边都是字符串，比较字母表顺序。 否则转为 number 再比较
 *  对象比较: eg. var a = {};  a > 2;    a.valueOf() -> a.toString() -> Number(a.toString())
 *
 *
 * + 操作符什么时候用于拼接
 * 两边至少有一个是 string
 */

// || 和 && 操作符的返回值
/**
 * || : 第一个操作数的判断条件是真就返回第一个，否则返回第二个
 * && : 第一个操作数的判断条件是真就返回第二个，否则返回第一个
 */

// 什么是 js 包装类
/**
 * 调用基本类型的属性或方法时，隐式的将基本类型的值转为对象  '123'.length -> String('123').length
 */
