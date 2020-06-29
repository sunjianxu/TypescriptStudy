console.warn('*******泛型约束******');
class Logs2<T> {
  run(value: T) {
    console.log(value)
  }
}
// const logs2 = new Logs2<number>();
const logs2 = new Logs2(); // 不明文设定类型的话，代表是any
logs2.run(369);
logs2.run('测试机');

// 泛型约束
interface Length {
  length: number;
}

// 定义泛型约束，代表着传入的参数必须是带有length 属性
function system<T extends Length>(value: T): T {
  return value;
}

console.log(system([]));
console.log(system({ length: 258 }));
console.log(system('123'))