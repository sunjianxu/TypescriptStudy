console.warn('*********抽象类***********');

// 抽象类(只能被继承，不能被实例化，像基类)
abstract class Animal_ {
  constructor(public name: string) {
    this.name = name;
  }
  eat() {
    console.log('bonnes')
  }
}
// const a1_ = new Animal_() // 不能被实例化

class Cat_ extends Animal_ {
  constructor(public name: string) {
    super(name);
  }
}
const c1_ = new Cat_('猫🐱')
console.log(c1_)

// 多态(在父类中定义抽象方法，但并不对方法做出具体实现，而是在多个子类中做出具体的方法实现)

abstract class Animals {
  constructor(public name: string) {
    this.name = name;
  }
  abstract seep(): void; // 父类定义抽象方法
}
class Dog_2 extends Animals {
  constructor(public name: string) {
    super(name);
  }
  seep() {
    console.log('这是dog的seep')
  }
}

class Cat_2 extends Animals {
  constructor(public name: string) {
    super(name);
  }
  seep() {
    console.log('这是cat的seep')
  }
}

const d1_ = new Dog_2('dog')
console.log(d1_)
d1_.seep();


const cat_ = new Cat_2('cat_')
console.log(cat_)
cat_.seep();



let animals_: Animals[] = [d1_, cat_]; // 声明类的数组变量
animals_.forEach(item => {
  item.seep();
})
// ts 特殊类型 this 类型,可用于链式操作


class Flow {
  seep1() {
    console.log('flow-seep1')
    return this;
  }
  seep2() {
    console.log('flow-seep2')
    return this;
  }
}

new Flow().seep1().seep2(); // 因为返回了this,所以可以进行链式操作




// this 类型的多态表现（可以调用父类的方法也可以调用子类的方法）
class Child_ extends Flow {
  constructor() {
    super()
  }
  next() {
    return this;
  }
}
new Child_().seep2().next().seep1();