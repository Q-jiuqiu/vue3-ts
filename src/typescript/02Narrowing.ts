/*
 * @Author: quling
 * @Date: 2022-09-17 18:31:30
 * @LastEditors: quling
 * @LastEditTime: 2022-09-17 19:07:33
 * @Description: 
 */
// 当我们为任何变量赋值时，TypeScript 会查看赋值的右侧并适当地缩小左侧
// typeof 类型警卫
function Part1() {
  // 在我们的if检查中，TypeScript 将typeof padding === "number"其视为一种特殊形式的代码，称为类型保护
  // 使用typeof返回的值有:string\number\bigint\boolean\symbol\undefined\object\function 

  // typeof null === 'object' // true

}
// 1.真实性缩小 typeof
// 2.平等缩小 ===\!==\==\!=
// 3.in
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim()
  }
  animal.fly()
}

type Human = {
  swim?: () => void
  fly?: () => void
}

function move1(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    animal // animal可能是Fish也可能是Human
  } else {
    animal // animal可能是Bird也可能是Human
  }
}

// 4.instanceof 有一个运算符来检查一个值是否是另一个值的“实例”。更具体地说，在 JavaScript 中x instanceof Foo检查是否包含的原型链.