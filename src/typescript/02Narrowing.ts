/*
 * @Author: quling
 * @Date: 2022-09-17 18:31:30
 * @LastEditors: quling
 * @LastEditTime: 2022-09-18 14:50:42
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

// 5.控制流分析

// 6.使用类型谓词
// 谓词采用 形式parameterName is Type，其中parameterName必须是当前函数签名中的参数名称
function isString(s:string):s is string {
  return typeof s === 'string'
}

function toUpperCase(x:string) {
  if(isString(x)) {
    x.toUpperCase()
  }
}

// never类型
function a(): void{
  return undefined
}

function b(): never {
  // return undefined // 报错:不能将类型“undefined”分配给类型“never”
  throw new Error()
}

function C (){ // ts判断C函数返回的是一个void
  throw new Error()
}

const c = function C() { // ts判断C函数返回的是一个never
  throw new Error()
}
// never可以分配给每种类型,但是没有类型可以分配给never,除了never
function d(s: never) {}
// d('111') // 报错:类型“string”的参数不能赋给类型“never”的参数


interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
