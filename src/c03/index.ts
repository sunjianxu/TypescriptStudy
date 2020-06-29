/**
 * 接口 接口是约束 对象、函数、类的结构和类型的一种契约
 * 对象类型接口
 */

 /**
  * 跳过严格的类型检查的方式
  * 字面量的类型断言
  * as 类型断言
  * 字符串索引签名
  */

  console.warn('***********************对象类型接口**********************')
;(() => {
  
// 定义接口
interface List {
  id:number;
  name:string;
  // [x:string]:any;  // 字符串索引签名可跳过严格的类型检查
}

interface Result {
  data:List[]
}

function handleRender(result:Result) {
  result.data.forEach(item => {
    console.log(item.id,item.name)
  })
}

const result_2 = {
  data:[
    {id:1,name:'leon'},
    {id:2,name:'lisi',sex:'man'},
  ]
};

// 语法一: 类型断言，明确告诉编译器就是这个类型的
handleRender({
  data:[
    {id:1,name:'leon'},
    {id:2,name:'lisi',sex:'man'},
  ]
} as Result);  // as Result  类型断言，明确告诉编译器就是这个类型的

// 语法二: 类型断言，明确告诉编译器就是这个类型的,这种写法在react中有歧义
handleRender(<Result>{
  data:[
    {id:1,name:'leon'},
    {id:2,name:'lisi',sex:'man'},
  ]
});  // as Result  类型断言，明确告诉编译器就是这个类型的
})()


console.log('***************-----------**********');

// 可选属性
;(() => {
  // 定义接口
  interface List {
    id:number;
    name:string;
    sex?:string; // 定义可选属性
    // [x:string]:any;  // 字符串索引签名可跳过严格的类型检查
  }
  
  interface Result {
    data:List[]
  }
  
  function handleRender(result:Result) {
    result.data.forEach(item => {
      console.log(item.id,item.name);
      if(item.sex) {
        console.log(item.sex)
      }
    })
  }

  
  // 语法一: 类型断言，明确告诉编译器就是这个类型的
  handleRender({
    data:[
      {id:1,name:'leon'},
      {id:2,name:'lisi',sex:'man'},
    ]
  }); 
  })()

// 只读属性
;(() => {
  // 定义接口
  interface List {
    readonly id:number;  // 只读属性
    name:string;
    sex?:string; // 定义可选属性
    // [x:string]:any;  // 字符串索引签名可跳过严格的类型检查
  }
  
  interface Result {
    data:List[]
  }
  
  function handleRender(result:Result) {
    result.data.forEach(item => {
      // item.id++;
      console.log(item.id,item.name);
      
      if(item.sex) {
        console.log(item.sex)
      }
    })
  }

  
  // 语法一: 类型断言，明确告诉编译器就是这个类型的
  handleRender({
    data:[
      {id:1,name:'leon'},
      {id:2,name:'lisi',sex:'man'},
    ]
  }); 
  })()

// 可索引类型接口
;(() => {
  console.log('可索引类型接口')

  // 下标类型索引
  interface StringArray {
    [index:number]:string
  }
  let data:StringArray = ['test1','test2'];
  console.log(data[0])

  // 字符串索引类型接口
  interface Names {
    [x:string]:any;
    [y:number]:string
  }
  let re_:Names = {
    name:"名称",
  };
  let re_2:Names = ['测试33'];
  console.log(re_.name);
  console.log(re_2[0]);
})();

