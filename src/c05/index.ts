/**
 * 函数相关知识点
 */
console.warn('**********函数相关知识点**********');
// 函数的定义
// 1 function 字面量定义
function handleAdd_(x: number, y: number): number {
  return x + y
}
console.log(handleAdd_(8, 9), '字面量定义');

// 2 变量定义函数
let handleAdd_2: (x: number, y: number) => number;
handleAdd_2 = (a, b) => a + b;
console.log(handleAdd_2(1, 2), '变量定义函数');

// 3 类型别名定义函数  type
type handleAdd_3_ = (x: number, y: number) => number;
let aa: handleAdd_3_ = (a, b) => a + b;
console.log(aa(3, 6), '类型别名定义函数  type');


// 4 接口定义函数
interface Lib_ {
  (x: number, y: number): number
}
let ceshi: Lib_ = (a, b) => a + b;
console.log(ceshi(2, 6))

// 可选参数
function handleParams(x: number, y?: number) {
  return y ? x + y : x
}
console.log(handleParams(120), '可选参数')

// 默认参数
function handleDefaultParams(x: number, y = 10) {
  return x + y
}
console.log(handleDefaultParams(10), '默认参数');


// 剩余参数
function handleRestParams(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(handleRestParams(1, 2, 3, 4, 5), '剩余参数')

// 函数重载(要先对重载的函数列表声明，然后在宽松的版本中实现)
function handleReload(...rest: number[]): number;
function handleReload(...rest: string[]): string;
function handleReload(...rest: any[]):any {
  const first = rest[0];
  if(typeof first === 'number') {
     return rest.reduce((pre,cur) => pre + cur)
  }
  if(typeof first === 'string') {
    return rest.join('-')
  }
};

console.log(handleReload(1,2,3,4,5),'函数重载');
console.log(handleReload('react','router'),'函数重载');