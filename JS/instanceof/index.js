function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;

  while (true) {
    if (!proto) return false;

    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof([], Array));
console.log(myInstanceof([], Object));
console.log(myInstanceof([], String));
