"use strict";
class localStore {
    writeToStorage(newDog) {
        const myStorage = window.localStorage;
        myStorage.setItem('newDog', newDog.toString());
    }
    getFromStorage() {
        const myStorage = window.localStorage;
        const item = myStorage.getItem('newDog');
        return item;
    }
    showAllFromStorage() {
        const myStorage = window.localStorage;
        const item = myStorage.getItem('newDog');
        const arrStore = item.split(',');
        let j = 0;
        const tag = document.getElementsByClassName('show')[0];
        tag.innerHTML = "";
        for (let i = 0; i < arrStore.length / 4; i++) {
            let arrFilter = arrStore.slice(j, j + 4);
            j += 4;
            const newP = document.createElement('p');
            const text = `Name: ${arrFilter[0]}, breed - ${arrFilter[1]}, age - ${arrFilter[2]}, power - ${arrFilter[3]}`;
            newP.appendChild(document.createTextNode(text));
            tag.appendChild(newP);
        }
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
    const getStore = store.getFromStorage();
    if (getStore !== null) {
        let arrStore = [];
        arrStore = getStore.split(',');
        console.log('typeof(arrStore)', typeof (arrStore), arrStore);
        arrStore.push(newDog);
        newObjectDog.writeToStorage(arrStore);
    }
    else {
        newObjectDog.writeToStorage(newDog);
    }
}
function ShowLocal() {
    const store = new localStore;
    store.showAllFromStorage();
}
