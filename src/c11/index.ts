console.log('*****泛型接口******');
// 定义泛型接口
interface Libs_ {
  <T>(x: T): T;
}
let Obj: Libs_ = <T>(x: T): T => {
  console.log(x);
  return x;
}
console.log('定义泛型接口');
Obj(2);

// 泛型接口约束 单一成员 和 约束所有成员
// 约束单一成员
interface Libs_2 {
  <T>(x: T): T;
}

let Obj2: Libs_2 = <T>(x: T): T => {
  console.log(x);
  return x;
}

console.log('定义泛型接口');
Obj2(20);

// 约束所有成员(约束函数和所有成员);
interface UDI<T> {
  (value: T): T;
}
let apps: UDI<number> = <T>(x: T): T => x;

// 设置泛型接口的默认类型
interface De<T = number> {
  (value: T): T
}

let de: De<string> = <T>(x: T): T => x;
de('258');

let de2: De = <T>(x: T): T => x;
de2(36);