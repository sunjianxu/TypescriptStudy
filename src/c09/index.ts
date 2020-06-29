console.warn('********类与接口的关系********')

/**
 * 
 * 接口只能约束类的公有成员 也就是 public
 */


//  类实现接口
interface Lib_3 {
  name: string;
  eat(): void;
}

// 类实现接口的时候，成员只能多不能少，并且接口只能限制类的公有成员
class Trst implements Lib_3 {
  constructor(public name: string) {
    this.name = name;
  }
  eat() {
    console.log('吃');
  }
  seep() { }
}


// 接口的相互继承
// 单一的接口继承
interface Inter0 extends Lib_3 { age: number; }
class Test36 implements Inter0 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(258);
  }
}

interface bog {
  height: number
}

// 多个的接口继承
interface InterC extends Inter0, bog { sex: string };
class Test360 implements InterC {
  constructor(public name: string, public age: number, public sex: string, height: number) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height
  }
  height: number;
  eat() {
    console.log(258);
  }
}

// 接口继承类(这过程就是把类的成员抽离出来，可以抽离的成员有公有成员，私有成员和受保护成员)
class Auto_ {
  status = 0;
}
// 等于把Auto_类的结构抽离出来了放在接口Aufou 上面了
interface Aufou extends Auto_ {}

// 实现
class Cur_ implements Aufou {
  status:10
}

// 子类实现接口

class Ceshi extends Auto_ implements Aufou {}