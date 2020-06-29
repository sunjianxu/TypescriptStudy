/**
 * ts数据类型
 */

 console.warn('*************数据类型**********************')
// 字符串类型
let str_:string = '字符串类型';
console.log(str_,'string');

let number:number = 123;
console.log(number,'number类型');

// 布尔类型
let bool_:boolean = true;
console.log(bool_,'boolean');

// undefined 类型
let un_:undefined = undefined;
console.log(un_);


// null 类型
let _null:null = null;
console.log(_null);

// 数组单类型
let arr_:Array<number> = [1,2,3,4,5,6];
let arr_3:number[] = [7,8,9,10];
console.log(arr_,arr_3,'Array');

// 数组多类型
let arr_2:Array<number | string> = [1,2,3,4,5,6,'string'];
console.log(arr_2,'Array');

// 元组类型
let _arr:[number , string] = [111,'sting'];

// _arr.push(223665); // 可以push,但是不可访问
// console.log(_arr[2])


// 对象类型

// let obj_:object = {name:'leon',age:18}; // 这种方式生命不可修改成员
// obj_.name = "ceshi";
let obj_:{name:string,age:number} = {name:'leon',age:18};
obj_.name = "update_name";
console.log(obj_);


// 函数类型
let sums = (x:number,y:number):number => x + y;  //声明函数类型模型，并对函数进行具体实现
console.log(sums(12,36));

let compute_:(x:number,y:number) => number; //声明函数类型模型，但未对函数进行具体实现
compute_ = (a,b) => a + b; //对函数的具体实现
console.log(compute_(1,2))


// symbol 类型

let s1_:symbol = Symbol();
let s2_  = Symbol();
console.log(s1_)
console.log(s2_)
console.log(s1_ === s2_)


// void 类型（没有任何返回值的类型）
let v_ = () => {}
console.log(v_)

// any 类型（任意类型）
let any_;
any_ = 1;
any_ = 'string'
console.log(any_);

// never 类型（永远不会有返回值）
let err_ = () => {
  throw new Error('错误啦！');
}

let endless_ = () => {
  while(true) {

  }
}

console.log(endless_)