// let myName:string = "jack";
//
// console.log(myName);
// function sayHello(person: string) {
//     return 'Hello,' + person ;
// }
//
// let user: string = 'Tome' ;
// console.log(sayHello(user)) ;
// let users = ['1', '2', '3'] ;
//此处需要注意，typescript中 参数的方法需要和传入的值对应
// console.log(sayHello(users));
//1 表示true 0 表示false
// let createByteBoolean: boolean = Boolean(0) ;   //变量声明
// console.log(createByteBoolean) ;
// let decLiteral: number = 6 ;
// let hexLiteral: number = 0xf00d ;
// let binaryLiteral: number = 0b1010 ;
// let octalLiteral: number = 0o744 ;
// let notAnumber: number = NaN ;
// let infinityNumber: number = Infinity ;
// console.log(decLiteral) ;
// console.log(hexLiteral) ;
// console.log(binaryLiteral) ;
// console.log(octalLiteral) ;
// console.log(notAnumber) ;
// console.log(infinityNumber) ;
// let myName: string = 'Tom' ;
// let myAge: number = 25 ;
// // ${expr} 用来在模板字符串中嵌入表达式。
// let sentence: string =`Hello,my name is ${myName}
//     I'll be ${myAge+1} years old next month.
// ` ;
// // void : 一般用于函数返回值
// console.log(myName) ;
// console.log(myAge) ;
// console.log(sentence) ;
//void 的类型的变量没有什么用，只能复制给undefined 和null 这两种类型。
// let unusable: void = undefined ;
// //undefined 类型的变量只能被赋值为undefined
// let u: undefined = undefined ;
// //null 类型的变量只能比赋值为null
// let n: null = null ;
// //undefined 和null 是所有类型的子类型。也就是说undefined类型的变量可以赋值给number
// let num: number = undefined ;
//
// let u1 : undefined ;
// let nu: number = u1 ;
//
// let nStr: string = undefined ;
// any 任意值
// any 在赋值的时候，可以付所有的值，值的类型是可以改变的
// let s: any = '11' ;
// s = 22 ;
// let anyThing: any = 'hello' ;
// console.log(anyThing.myName) ;  //undefined
// console.log(anyThing.myName.firstName) ; // 错误
// let anyThing: any = 'Toom' ;
// anyThing.setName('Jerry') ; //不是一个类，所以有误
// anyThing.setName('Jerry').sayHello() ;  //错误
// anyThing.myName.setFirstName('Cat') ;   //错误
// console.log(anyThing) ;
// // console.log(anyThing.name) ;
// console.log(anyThing.myName.firstName)
//联合类型 使用 | 进行分割
// let myFavoriteNumber: string | number ='111';       //正确
// console.log(myFavoriteNumber) ;
// myFavoriteNumber = 'seven' ;        //正确
// console.log(myFavoriteNumber) ;
// myFavoriteNumber = 7 ;              //正确
// console.log(myFavoriteNumber) ;
// // myFavoriteNumber = false ;          //错误
// console.log(myFavoriteNumber) ;
//若使用联合类型，则something类型的方法需要string 和number的类型相同
// function getLength(something: string | number) : string {
//        return something.toString();
//
// }
// let str = getLength("zhangsan1234") ;
// console.log(str) ;
//接口中的属性的格式，必须一致。
// interface  Person {
//        name: string ;
//        age: number ;
// }
//
// let tom: Person= {name: 'tom', age: 25 } ;
//
// console.log(tom);
// 可选属性, age 可有可无 ，但是Person不能增加新的属性
// interface Person {
//        name: string ;
//        age?: number ;
// }
//
// let tom: Person ={
//        name: 'Tom'
// } ;
//
// console.log(tom) ;
// let t: Person = {
//        name :' t' , age: 123
// } ;
// console.log(t) ;
// 任意属性
// // 属性设置： [ff:string]: any ;
// interface  Person {
//        name : string ;
//        age : number ;
//        [fff:string]: any ;
//
// }
//
// let tom : Person = {
//        name: 'tom',
//     age:123,
//     gender: 'male',
//     cc:111
// } ;
// //{ name: 'tom', age: 123, gender: 'male' }
// console.log(tom)
//只读属性
// interface Person {
//        readonly id: number ;
//        name: string ;
//        age?: number ;
//        [othere: string] : any ;
// }
//
// let Tom : Person = {
//     id: 1123,
//     name: 'zhangsna',
//     age: 1231,
//     getne: '1231'
// }
//
// Tom.name="lisi"
// Tom.id=111 ;  //XX 错误，只读属性，不能使用使用这种方法进行赋值
// console.log(Tom)
// //数组
// let fibonacci: number[] = [1,1,2,3,5];
// console.log( fibonacci) ;
// fibonacci.push(8);
// console.log(fibonacci)
// 数组泛型
// let fibonacci : Array<number> = [1, 1, 2, 3, 5] ;
// console.log(fibonacci) ;
//
//接口表示数组
// interface NumberArray {
//        [index: number]: number ;
// }
//
// let fibonacci: NumberArray = [1, 1, 2, 3, 5] ;
// console.log(fibonacci) ;
// let list: any[] = ['XcatLiu', 25, {website: 'http://xcatliu.com'}] ;
// console.log(list) ;
// console.log(list[2].website)
//
// function sum(x, y) {
//        return x + y ;
// }
//
// console.log(sum(12, 21))
//
// let mySum = function (x, y): number {
//     return x + y ;
// }
// console.log(mySum(144, 200))
//
// interface SearchFunc {
//     (source: string, subString: string) : boolean ;
// }
//
// let mySearch: SearchFunc ;
// mySearch = function (source: string ,substring: string) {
//     return source.search(substring) != -1 ;
// }
//
// console.log(mySearch("1231","32242"))
//
//可选参数
// // 可选参数必须写在必选参数后面
// function buildName(firstName: string, lastName?: string) {
//        if (lastName) {
//               return firstName + '' + lastName ;
//        } else {
//               return  firstName ;
//        }
// }
//
// let tomcat = buildName('Tom', 'Cat') ;
// console.log(tomcat) ;
// let tom = buildName('Tom') ;
// console.log(tom) ;
//
// 默认值
// function buildName(firstName: string , lastName: string ='cat') {
//        return firstName + lastName ;
// }
//
// function  buildName1 (firstName: string= 'Tomcat' ,lastName: string) {
//        return firstName + lastName ;
// }
//
// let tomcat = buildName('Tom');
// console.log(tomcat)
//
// let tomcat1 = buildName1(null,"tmc");
// console.log(tomcat1) ;
//剩余参数
// function push(array: any[],...items: any[]) {
//        items.forEach(function (item) {
//            array.push(item) ;
//        })
// }
// let a = [] ;
// push(a ,1,2,3,4);
// console.log(a)
// function reverse(x:string) :string ;
// function reverse(x:number) :number ;
// function reverse(x: number | string) : number | string{
//     if (typeof  x =='number') {
//         return Number(x.toString().split('').reverse().join(''));
//
//     }else if (typeof x=='string'){
//         return x.split('').reverse().join('');
//     }
// }
//
// let n = reverse('asdfghjk');
// console.log( typeof  n) ;
// let nn = reverse(1234567) ;
// console.log(typeof  nn)
// function getLength(something:string|number) :number {
//     // 断言不是类型转换，但是断言可以使用联合类型中的类型作为转换
//     return (<string>something).length ;
// }
//
// console.log(getLength('11231'))
//
// let b:Boolean = new Boolean(1) ;
// let e :Error = new Error('Error occurred');
// let d: Date = new Date() ;
// let r: RegExp = /[a-z]/;
//
// console.log(b);
// console.log(e);
// console.log(d);
// console.log(r);
// var maxNumber =Math.pow(10,1000) ;
// console.log(maxNumber)
// if (maxNumber==Infinity) {
//     console.log("let ' s call it Infinity!") ;
// }
// console.log(1/maxNumber) ;
// let body :HTMLElement = document.body ;
// // console.log(body)
// type Name = string ;
// type NameResolver= () => string ;
// console.log( typeof name)
var myadd = function (x, y) {
    return x + y;
};
console.log(myadd(12, 123));
