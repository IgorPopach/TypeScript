var str = "Hello";
var a = 20;
var exit = true;
str = "10";
console.log("str=>", str, "a=>", a, "exit=>", exit);
var test = 10;
test = "test";
console.log("test=>", test);
var num = 10;
console.log("num=>", num);
var arr = [0, 1, 2, 3, 4, 5];
arr.forEach(function (e) { return console.log("arr=>", e); });
var arr2 = [10, "yo", 20];
arr2.forEach(function (e) { return console.log("arr2=>", e); });
function Plus(a, b) {
    return a + b;
}
var result = Plus(8, 2);
console.log("result", result);
function Pluus(a, b) {
    console.log(a + b);
}
Pluus(10, 50);
var Person = {
    name: "Max",
    surname: "Jackson",
    age: 44,
    showAge: function () {
        console.log("Name: " + this.name + " surname: " + this.surname + " age=> " + this.age);
    },
    changeAge: function (newAge) {
        this.age = newAge;
    }
};
Person.showAge();
Person.changeAge(18);
Person.showAge();
function onClick() {
    var a = document.querySelector(".firstNum");
    console.log('a', a);
    // let b = document.querySelector(".secondNum");
    // let elem = document.getElementById("doing");
    // let doing = elem.options[elem.selectedIndex].value;
    // switch(doing) {
    //     case "plus":
    //         Plus(a,b)
    // }
}
var Calculator = {};
