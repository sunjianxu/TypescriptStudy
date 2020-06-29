console.warn('命名空间');
namespace Lib {
  let version = '1.0.1';
  export function sayHello() {
    console.log('hello',version);
  }
}
Lib.sayHello();
