/*
 * @Author: quling
 * @Date: 2022-09-18 14:52:50
 * @LastEditors: quling
 * @LastEditTime: 2022-09-18 17:35:27
 * @Description: 函数
 */
// 1.函数表达式
// 2.呼叫签名:使函数具有属性
function Part2() {
  type DescribableFunction = {
    description: string,
    (someArg: number): boolean
  }
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + 'returned' + fn(6));
  }
}

// 3.构造签名 利用new调用
function Part3() {
  type SomeConstructor = {
    new(s: string): object
  }
  function fn(ctor: SomeConstructor) {
    return new ctor('hello')
  }
  // 模仿Date对象,可以使用new创建,可以不适用new创建
  interface CallOrConstruct {
    new(s: string): Date;
    (n?: number): number
  }
  function fn1(ctor: CallOrConstruct) {
    new ctor('2022-09-28')
    ctor(2022)
  }
}

// 4.通用函数   泛型
function Part4() {
  // firstElement函数返回的类型是any
  function firstElement(arr: any[]) {
    return arr[0]
  }
  // 泛型:用来描述两个值之间的对应关系 functionName<Type>(arr: Type[]): Type | undefined 
  function firstElement1<Type>(arr: string[]): string | undefined {
    return arr[0]
  }
  const s = firstElement1(['a', 'b', 'c'])
  console.log(s);

  function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }

  const parsed = map(["1", "2", "3"], (n) => parseInt(n)); // ts会推断出n是string,而parsed是一个number数组
}
