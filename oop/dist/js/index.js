"use strict";
class localStore {
    writeToStorage(newDog) {
        let myStorage = window.localStorage;
        localStorage.setItem('newDog', newDog);
    }
}
class Dog extends localStore {
    constructor(name, breed, age) {
        super();
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    showDog() {
        console.log(`Name ${this.name} age - ${this.age}`);
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        if (newAge < 80 || newAge > 3)
            this.age = newAge;
    }
}
let Bobik = new Dog("Bobik", "Tax", 3);
// Bobik.showDog();
// console.log('Age',Bobik.getAge());
// Bobik.setAge(10);
// console.log('newAge',Bobik.getAge());
class HunterDog extends Dog {
    constructor(name, breed, age, power) {
        super(name, breed, age);
        this.power = power;
    }
    hunt() {
        this.power -= 10;
        console.log(`Hunting, power ${this.power}`);
    }
    showDog() {
        console.log(`Name ${this.name} age - ${this.age}, power => ${this.power}`);
    }
    static static() {
        console.log('static');
    }
}
let Bimbo = new HunterDog('Bimbo', "Boxedr", 5, 100);
Bimbo.showDog();
Bimbo.hunt();
Bimbo.showDog();
HunterDog.static();
function Add() {
    const inputA = document.getElementsByTagName("input")[0];
    const a = inputA.value;
    const inputB = document.getElementsByTagName("input")[1];
    const b = inputB.value;
    const inputC = document.getElementsByTagName("input")[2];
    const c = parseInt(inputC.value);
    const inputD = document.getElementsByTagName("input")[3];
    const d = parseInt(inputD.value);
    const newObjectDog = new HunterDog(a, b, c, d);
    const newDog = "age:" + newObjectDog.getAge();
    console.log('newDog', newDog);
}
