/**
 * 数组转树
 */

// let arr = [
//   { id: 2, name: "部门B", pid: 0 },
//   { id: 3, name: "部门C", pid: 1 },
//   { id: 1, name: "部门A", pid: 2 },
//   { id: 4, name: "部门D", pid: 1 },
//   { id: 5, name: "部门E", pid: 2 },
//   { id: 6, name: "部门F", pid: 3 },
//   { id: 7, name: "部门G", pid: 2 },
//   { id: 8, name: "部门H", pid: 4 },
// ];

// function arrayToTree(list, pid) {
//   const len = list.length;

//   function loop(pid) {
//     const res = [];
//     for (let i = 0; i < len; i++) {
//       const item = list[i];
//       if (item.pid == pid) {
//         item.children = loop(item.id);
//         res.push(item);
//       }
//     }
//     return res;
//   }

//   return loop(pid);
// }

// console.log(arrayToTree(arr, 0));

/**
 * 树转数组
 */

let tree = [
  {
    id: 1,
    name: "text1",
    parentId: 1,
    children: [
      {
        id: 2,
        name: "text2",
        parentId: 1,
        children: [
          {
            id: 4,
            name: "text4",
            parentId: 2,
          },
        ],
      },
      {
        id: 3,
        name: "text3",
        parentId: 1,
      },
    ],
  },
];

// 深度遍历
// function treeToArray(tree) {
//   const list = [];
//   const stack = [...tree];

//   while (stack.length) {
//     const node = stack.pop();
//     const children = node.children;
//     if (children) {
//       stack.push(...children);
//     }
//     list.push(node);
//   }

//   return list;
// }

// 广度遍历
function treeToArray(tree) {
  const list = [];
  const queue = [...tree];
  while (queue.length) {
    const node = queue.shift();
    const children = node.children;
    if (children) {
      queue.push(...children);
    }
    list.push(node);
  }
  return list;
}

console.log(treeToArray(tree));
