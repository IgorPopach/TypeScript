"use strict";
class localStore {
    writeToStorage(newAnimal, type) {
        const myStorage = window.localStorage;
        myStorage.setItem(type, JSON.stringify(newAnimal));
    }
    getFromStorage(type) {
        const myStorage = window.localStorage;
        const animals = JSON.parse(myStorage.getItem(type));
        return animals;
    }
}
class Dog extends localStore {
    constructor(name, breed, age) {
        super();
        this.type = "Dog";
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
    getType() {
        return this.type;
    }
    setAge(newAge) {
        if (newAge < 80 || newAge > 3)
            this.age = newAge;
    }
    static test() {
        console.log("Dog static");
    }
    showInfo() {
        console.log(`${this.name} ${this.type} ${this.breed} ${this.age}`);
    }
    die() {
        console.log(`${this.name} DIE!!!!!!o_0`);
    }
}
// Dog.test();
// let Bobik = new Dog("Bobik", "Tax", 3);
// Bobik.showDog();
// console.log('Age',Bobik.getAge());
// Bobik.setAge(10);
// console.log('newAge',Bobik.getAge());
class HunterDog extends Dog {
    constructor(name, breed, age, power) {
        super(name, breed, age);
        this.type = "Hunter Dog";
        this.power = power;
    }
    hunt() {
        this.power -= 10;
        console.log(`Hunting, power ${this.power}`);
        if (this.power <= 0) {
            this.die();
        }
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
class Cat extends localStore {
    constructor(name, breed, age) {
        super();
        this.type = "Cat";
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
    getType() {
        return this.type;
    }
    setAge(newAge) {
        if (newAge < 80 || newAge > 3)
            this.age = newAge;
    }
    static test() {
        console.log("Dog static");
    }
    showInfo() {
        console.log(`${this.name} ${this.type} ${this.breed} ${this.age}`);
    }
    outdoor() {
        console.log(`Cat ${this.name} want to go outdoor!!!`);
    }
    die() {
        console.log(`${this.name} DIE!!!!!!o_0`);
    }
}
class homeCat extends Cat {
    constructor(name, breed, age, active) {
        super(name, breed, age);
        this.type = "Home cat";
        this.active = active;
    }
    sleeping() {
        this.active += 20;
        console.log(`Sleeping, active ${this.active}`);
        if (this.active >= 100) {
            this.outdoor();
        }
    }
    getActive() {
        return this.active;
    }
    showCat() {
        console.log(`Name ${this.name} age - ${this.age}, active => ${this.active}`);
    }
}
let Bimbo = new HunterDog('Bimbo', "Boxedr", 12, 20);
// Bimbo.showDog();
// Bimbo.hunt();
// Bimbo.showDog();
// Bimbo.hunt();
// Bimbo.showDog();
// Bimbo.hunt();
// Bimbo.showDog();
// Bimbo.die();
// Bimbo.setAge(10);
// Bimbo.showDog();
// HunterDog.static();
function Gen(data) {
    return data;
}
console.log(Gen('test').length);
console.log(Gen(10).length);
function genericType(data) {
    return data;
}
console.log('genericType', genericType('test').length);
console.log('genericType', genericType(10).length);
function Add() {
    const inputA = document.getElementsByTagName("input")[0];
    const a = inputA.value;
    const inputB = document.getElementsByTagName("input")[1];
    const b = inputB.value;
    const inputC = document.getElementsByTagName("input")[2];
    const c = parseInt(inputC.value);
    const inputD = document.getElementsByTagName("input")[3];
    const d = parseInt(inputD.value);
    if (a === '' || b === '' || inputC.value == '' || inputD.value == '') {
        alert("PLease input all values!");
    }
    else {
        const elem = document.getElementById("choose-type");
        const choose = elem.options[elem.selectedIndex].value;
        switch (choose) {
            case "dog":
                const newObjectDog = new HunterDog(a, b, c, d);
                const newDog = [];
                newDog.push(newObjectDog.getName(), newObjectDog.getBreed(), newObjectDog.getAge().toString(), newObjectDog.getPower().toString());
                let DogStore = newObjectDog.getFromStorage(newObjectDog.getType());
                if (DogStore !== null) {
                    DogStore.push(newDog);
                    console.log('typeof(Store)', typeof (DogStore), DogStore);
                    newObjectDog.writeToStorage(DogStore, newObjectDog.getType());
                }
                else {
                    newObjectDog.writeToStorage([newDog], newObjectDog.getType());
                }
                break;
            case "cat":
                const newObjectCat = new HunterDog(a, b, c, d);
                const newCat = [];
                newCat.push(newObjectCat.getName(), newObjectCat.getBreed(), newObjectCat.getAge().toString(), newObjectCat.getPower().toString());
                let CatStore = newObjectCat.getFromStorage(newObjectCat.getType());
                if (CatStore !== null) {
                    CatStore.push(newCat);
                    console.log('typeof(CatStore)', typeof (CatStore), CatStore);
                    newObjectCat.writeToStorage(CatStore, newObjectCat.getType());
                }
                else {
                    newObjectCat.writeToStorage([newCat], newObjectCat.getType());
                }
                break;
        }
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
function getAnimal() {
}
