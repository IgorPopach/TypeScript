"use strict";
class localStore {
    writeToStorage(newDog) {
        const myStorage = window.localStorage;
        myStorage.setItem('Dogs', JSON.stringify(newDog));
    }
    getFromStorage() {
        const myStorage = window.localStorage;
        const dogs = JSON.parse(myStorage.getItem('Dogs'));
        return dogs;
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
    getName() {
        return this.name;
    }
    getBreed() {
        return this.breed;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        if (newAge < 80 || newAge > 3)
            this.age = newAge;
    }
}
// let Bobik = new Dog("Bobik", "Tax", 3);
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
    getPower() {
        return this.power;
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
Bimbo.setAge(10);
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
    const newDog = [];
    newDog.push(newObjectDog.getName(), newObjectDog.getBreed(), newObjectDog.getAge().toString(), newObjectDog.getPower().toString());
    const store = new localStore;
    let Store = store.getFromStorage();
    if (Store !== null) {
        Store.push(newDog);
        console.log('typeof(Store)', typeof (Store), Store);
        newObjectDog.writeToStorage(Store);
    }
    else {
        newObjectDog.writeToStorage([newDog]);
    }
}
function ShowLocal() {
    const store = new HunterDog('a', 'a', 1, 1);
    const dogs = store.getFromStorage();
    const tag = document.getElementsByClassName('show')[0];
    tag.innerHTML = "";
    dogs.forEach((e) => {
        const newP = document.createElement('p');
        const text = `Name: ${e[0]}, breed - ${e[1]}, age - ${e[2]}, power - ${e[3]}`;
        newP.appendChild(document.createTextNode(text));
        tag.appendChild(newP);
    });
}
