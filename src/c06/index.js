console.warn('ES6中的class********')
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age;
  }
  sayHello() {
    console.log('hello')
  }
}

class American extends Person {
  constructor(name, age) {
    super(name, age) // 指向的就是父类的构造器，也就是 Person.prototype.constructor
  }
}
class Chinese extends Person {
  constructor(name, age, id) {
    super(name, age)
    this.id = id //实例属性
  }
  fs() { //实例方法
    console.log(88)
  }

  // static info = "info"  //es6 中明确规定 只有static 只可以声明静态方法，不可以声明静态属性
  // // es7 中有静态属性提案，可以用babel 转换  也可以用Chinese.xx = 'xx' 一个静态属性
  // static show() {  //静态方法
  //   console.log("show")
  // }

}

const p1 = new American("koa", 21)
const p2 = new Chinese('zs', 24, 120335)
console.log(p1)
p1.sayHello()
console.log("--------------------------")
const p = new Person('测试',21)
console.log(p)
console.log(p2)
// p2.sayHello()
// Chinese.show()
// console.log(Chinese.info)
// p2.fs()

