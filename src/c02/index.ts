/**
 * typescript 枚举类型 (enum)
 * 知识点： 枚举类型、枚举成员类型，以及常量枚举的应用场景
 */

//   数字类型枚举 // 可通过值访问，也可以通过key 访问

console.warn('*******************枚举类型*****************');
enum role {
  admin,
  role_one,
  role_two
}

// role[0] = '11' 不允许修改


//  字符串枚举
enum Message {
  success = "成功！",
  error = "失败了"
}
console.log(Message['success']);


// 异构枚举
enum Ygou {
  admin,
  message = "失败了",
}

console.log(Ygou);


//  枚举成员的类型
enum Leixing {
  // const 类型（编译阶段就会执行）
  admin,
  a = Message.success,
  b = 1 + 3,

  // computed (会等到执行阶段运行)
  c = Math.random(),
  d = "12456".length
}

console.log(Leixing);


// 常量枚举（特点：会在编译阶段被移除）;应用场景：只用到值，而不需要变量

const enum Dua {
  Admin,
  E,
  d
}
let min_ = [Dua.Admin,Dua.E,Dua.d];
console.log(min_);


// 枚举类型作为数据的类型
enum Test1 {a,b} // 数字枚举
enum Test2 {a = 1,b = 2} // 数字枚举
enum Test3 {a = "success",b = 'error'} // 字符串枚举

console.log(Test1,'Test1');
console.log(Test2,'Test2');
console.log(Test3,'Test3');

let test1:Test1  = 11;  //赋值可超过枚举类型的范围

let test2:Test2 = 1024;
let test3:Test3 = Test3.a;
let test4:Test3 = Test3.b;

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

// 枚举成员类型作为数据的类型

let t1:Test1.a = 1;
let t2:Test1.b = 1;
let t3:Test1.a = 102;
// console.log(t1,t2,t1 === t2)  // 不同类型的枚举成员类型的数据不可以进行比较
console.log(t1,t3,t1 ===t3);


let t4:Test3.a = Test3.a;  // 字符串枚举类型的枚举成员类型只能是枚举成员类型的自身
let t5:Test3.b = Test3.b;

console.log(t4,t5)