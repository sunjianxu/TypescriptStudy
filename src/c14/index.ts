/// <reference path="name.ts" />

console.warn('命名空间');
// namespace 声明命名空间的关键字
// 存在于不同文件的相同名称的命名空间，会自动合并在一起
namespace Lib {
  let version = '1.0.1';
  export function sayHello() {
    console.log('hello',version);
  }
  export function sayHi() {
    console.log('hi',version);
  }
}
Lib.sayHello();
Lib.sayHi();
// Lib.eatApple(); // 编译过后可在全局环境执行
