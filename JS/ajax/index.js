const SERVER_URL = "/server";

let xhr = new XMLHttpRequest();
// 用 open 方法创建一个 http 请求
xhr.open("GET", SERVER_URL, true);
// 设置监听函数，处理请求成功后的结果
xhr.onreadystatechange = function () {
  // readyState 不为4，表示服务器返回的数据还未接收完成
  if (this.readyState !== 4) return;
  // status 2xx 或 304 表示返回正常
  if (this.status === 200) {
    handle(this.response);
  } else {
    console.log(this.statusText);
  }
};
// 设置请求失败的监听函数
xhr.onerror = function () {
  console.error(this.statusText);
};
// 设置请求头
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");
// 发送 http 请求 传参作为发送的数据体
xhr.send(null);

/**
 * Promise 封装 ajax
 */
function getJSON(url) {
  // 创建一个 promise 对象
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    // 新建一个 http 请求
    xhr.open("GET", url, true);
    // 设置监听函数
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    // 设置请求失败监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };
    // 设置请求头
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    // 发送 http 请求
    xhr.send(null);
  });

  return promise;
}
