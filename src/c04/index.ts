
/**
 * 函数类型和混合类型接口
 */
console.warn('***********函数类型接口和混合类型接口***************');
// 函数类型接口
let f1_: (x: number, y: number) => number; // 变量定义函数
f1_ = (a, b) => a + b; //函数的具体实现
console.log(f1_(2, 3));


// 接口定义函数
interface Add_ {
  (x: number, y: number): number
}

let add_: Add_ = (a, b) => a + b; // 函数的具体实现
console.log(add_(1, 2));

//  类型别名定义函数
type add_2 = (x: number, y: number) => number;
let handleAdd: add_2 = (a, b) => a + b;
console.log(handleAdd(11,33));

// 混合类型接口,一般用于构造函数(定义一些类库，包含函数和属性成员和方法)
interface Lib {
  ():void;
  version:string,
  doSometing():void
}
// 定义构造函数生成lib
function generatorLib(version:string) {
  let lib:Lib = (() => {}) as Lib; // 类型断言
  lib.version  = version
  // lib.doSomething = () => {
  //   console.log('action' + version)
  // }
  return lib;
}

let g1_ = generatorLib('1.0.0');
console.log(g1_,'g1***********')
console.log(g1_.version)
// g1_.doSomething();

let g2_ = generatorLib('1.0.1');
console.log(g2_,'g2***********')
console.log(g2_.version)
// g2_.doSomething();