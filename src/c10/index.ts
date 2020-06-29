console.warn('****** 泛型函数 *****')
//  实现一个函数可以接收字符串也可以接收一个字符串数组

// 联合类型的函数
function log_(str: string | string[]): string | string[] {
  console.log(str);
  return str;
}
log_('test');
log_(['test1', 'test2']);

// 函数重载实现
function reloadLog(str: string): string;
function reloadLog(str: string[]): string[];
function reloadLog(str: any): any {
  console.log(str)
  return str;
};
reloadLog('测试机');
reloadLog(['测试机', '测试机2']);
// any类型


function handleAnyParams(str: any): any {  // 语法预知传进来的参数和返回值是什么类型,无法约束
  console.log(str);
  return str;
}
handleAnyParams(112);
handleAnyParams({ any: '任意的类型' });

// 泛型函数实现
function handleT<T>(str: T): T {
  console.log(str);
  return str
}
handleT<string>('这是泛型函数实现的');  //<string> 可以省略
handleT<object>({
  message: '这是泛型函数实现的'
});


// 泛型定义函数的类型
type LogT = <T>(str: T) => T;

let handleLogT: LogT = (s) => {
  console.log(s);
  return s;
}

handleLogT('这是泛型定义的函数类型');