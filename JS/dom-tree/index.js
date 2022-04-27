// 深度遍历
// function getElementTree(parentNode) {
//   if (!parentNode) return null;

//   let stack = [parentNode];

//   while (stack.length) {
//     const node = stack.pop();
//     const { tagName } = node;
//     console.log(tagName);
//     if (node.children.length > 0) {
//       stack = [...stack, ...node.children];
//     }
//   }
// }

// 广度遍历
function getElementTree(parentNode) {
  let queue = [parentNode];

  while (queue.length) {
    const node = queue.shift();
    const { tagName } = node;

    console.log(tagName);

    if (node.children.length > 0) {
      queue = [...queue, ...node.children];
    }
  }
}

getElementTree(document.querySelector(".wrapper"));
