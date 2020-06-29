console.warn('**********ts中的类************');

// 类的基本实现
class Dog_ {
  constructor(name: string) {
    this.name = name;
  }
  name: string; // 类的属性必须初始化
  eay() {
    console.log('吃吃吃')
  }
}
const d1 = new Dog_('jack');
console.log(d1);

class Done {
  constructor(public status: boolean) {  // 通过成员修饰符可以省去 初始化类的属性    
    this.status = status
  }
  changeStatus() {
    this.status = false;
  }
}
const done = new Done(true);
console.log(done);
done.changeStatus();
console.log(done);


// 类的继承
class Father {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log('hello');
  }
}
class Child extends Father {
  constructor(public name: string, public age: number, public sex: string) {
    super(name, age);
    this.sex = sex;
  }
}
const c1 = new Child('leon', 24, 'male');
console.log(c1);
c1.sayHello();

/**
 * 成员修饰符
 * 公有成员
 * 私有成员
 * 受保护成员
 * 只读成员
 * 静态成员
 */

// 公有成员  public
class Test {
  constructor(public name: string) {
    this.name = name;
  }
}
class Test2_ {
  constructor(name: string) {
    this.name = name;
  }
  public name: string;
}

// 私有成员 private(只能在类的里面使用，不能被实例和子类调用，可以理解为有块级作用域)

//  成员私有  
class Test3_ {
  constructor(public name: string) {
    this.name = name;
    this.pay();
  }
  private pay() {
    console.log('这是私有成员方法pay')
  }
}

const t3_ = new Test3_('测试机')
// t3_.pay() 不能被实例调用

// 构造函数私有（不能实例化，也不能被子类调用）

class Test4 {
  // 构造函数私有，不能实例化，也不能继承
  private constructor(public name: string) {
    this.name = name;
  }
}

// const ts_4 = new Test4('ce'); 
// 父类的构造函数私有，即不能被子类继承 

// class Test5 extends Test4 {
//   constructor(public name:string) {
//     super(name);
//   }
// }


//  受保护成员 protected(如果声明在构造器，则代表只能用做继承，而不能实例化，也就是基类)
class Test6 {
   constructor(public name: string) {
    this.name = name;
    this.pro();
  }
  protected pro() {
    console.log('这是受保护成员，只能在类和子类中使用，不能被实例使用')
  }
}

const t6_ = new Test6('protected');
console.log(t6_);

class Test7 extends Test6 {
  constructor(public name: string, public color: string) {
    super(name)
    this.color = color;
    this.pro();
  }
}
const t7_ = new Test7('test7', 'red');
console.log(t7_);


// 只读成员 readonly
class Test8 {
  constructor(public name: string) {
    this.name = name;
  }
  readonly uid: number = 2018;
}
const t8_ = new Test8('Test8');
// t8_.uid = 2019; 只能访问，不能修改


// 静态成员 static(只能类本身通过类名调用，也可以被继承，也就是说，子类也可以通过类名 进行访问调用)
class Test9 {
  constructor(public name: string) {
    this.name = name;
  }
  static user_id: number = 2016;
}
const t9_ = new Test9('测距hi及');
console.log(t9_)
console.log(Test9.user_id);

class Test10 extends Test9 {
  constructor(public name: string) {
    super(name)
  }
}
const t10_ = new Test10('测距hi及');
console.log(Test10.user_id)
