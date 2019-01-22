"use strict";
// let str:string = "Hello";
// let a:number = 20;
// let exit:boolean = true;
// str = "10";
// console.log("str=>",str,"a=>",a,"exit=>",exit);
// let test:any = 10;
// test = "test";
// console.log("test=>",test);
// let num:number|string = 10;
// console.log("num=>",num);
// let arr:number[] = [0,1,2,3,4,5];
// arr.forEach(e => console.log("arr=>",e));
// let arr2:[number,string,number] = [10,"yo",20];
// arr2.forEach(e => console.log("arr2=>",e));
// function Plus(a:number, b:number):number {
//     return a + b;
// }
// let result:number = Plus(8,2);
// console.log("result",result);
// function Pluus(a:number, b:number):void {
//     console.log(a + b);
// }
// Pluus(10,50);
// type human = {
//     name:string, surname:string, age:number, showAge:() => void, changeAge:(newAge:number) => void
// }
// let Person:human = {
//     name: "Max",
//     surname: "Jackson",
//     age: 44,
//     showAge():void{
//         console.log(`Name: ${this.name} surname: ${this.surname} age=> ${this.age}`);
//     },
//     changeAge(newAge:number):void{
//         this.age = newAge;
//     },
// }
// Person.showAge();
// Person.changeAge(18);
// Person.showAge();
function onClick() {
    var a = parseInt(document.getElementsByClassName("number")[0].value);
    var b = parseInt(document.getElementsByClassName("number")[1].value);
    var elem = document.getElementById("doing");
    var doing = elem.options[elem.selectedIndex].value;
    var result;
    switch (doing) {
        case "plus":
            result = Calculator.plus(a, b);
            break;
        case "minus":
            result = Calculator.minus(a, b);
            break;
        case "multiply":
            result = Calculator.multiply(a, b);
            break;
        case "division":
            result = Calculator.division(a, b);
            break;
    }
    Calculator.showResult(result);
}
var Calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    division: function (a, b) {
        return a / b;
    },
    showResult: function (number) {
        document.getElementById("result").innerHTML = number;
    }
};
