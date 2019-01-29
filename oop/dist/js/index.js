"use strict";
class localStore {
    writeToStorage(newAnimal) {
        const myStorage = window.localStorage;
        myStorage.setItem("animals", JSON.stringify(newAnimal));
    }
    static getFromStorage() {
        const myStorage = window.localStorage;
        const animals = JSON.parse(myStorage.getItem("animals"));
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
        console.log(`${this.type} Name ${this.name} age - ${this.age}, power => ${this.power}`);
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
        console.log(`${this.type} ${this.name} ${this.type} ${this.breed} ${this.age}`);
    }
    outdoor() {
        console.log(`Cat ${this.name} want to go outdoor!!!`);
    }
    die() {
        console.log(`${this.name} DIE!!!!!!o_0`);
    }
}
class homeCat extends Cat {
    constructor(name, breed, age, activity) {
        super(name, breed, age);
        this.type = "Home cat";
        this.activity = activity;
    }
    sleeping() {
        this.activity += 20;
        console.log(`Sleeping, activity ${this.activity}`);
        if (this.activity >= 100) {
            this.outdoor();
        }
    }
    getactivity() {
        return this.activity;
    }
    showCat() {
        console.log(`${this.type} Name ${this.name} age - ${this.age}, activity => ${this.activity}`);
    }
}
// let Bimbo = new HunterDog('Bimbo', "Boxedr", 12, 20);
// let Bimbo = new homeCat('Bimbo', "Boxedr", 12, 20);
// Bimbo.showCat();
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
const addButton = document.getElementsByClassName("Add")[0];
addButton.addEventListener("click", Add);
function Add() {
    const inputA = document.getElementsByTagName("input")[0];
    const name = inputA.value;
    const inputB = document.getElementsByTagName("input")[1];
    const breed = inputB.value;
    const inputC = document.getElementsByTagName("input")[2];
    const age = parseInt(inputC.value);
    const inputActive = document.getElementsByTagName("input")[3];
    const activeValue = parseInt(inputActive.value);
    if (name === '' || breed === '' || inputC.value == '' || inputActive.value == '') {
        alert("PLease input all values!");
    }
    if (typeof (parseInt(name)) === "number" || typeof (parseInt(breed)) === "number") {
        alert("Name & breed must be a text");
    }
    else {
        const elem = document.getElementById("choose-type");
        const choose = elem.options[elem.selectedIndex].value;
        switch (choose) {
            case "dog":
                const newObjectDog = new HunterDog(name, breed, age, activeValue);
                const newDog = [];
                newDog.push(newObjectDog.getType(), newObjectDog.getName(), newObjectDog.getBreed(), newObjectDog.getAge().toString(), newObjectDog.getPower().toString());
                let DogStore = localStore.getFromStorage();
                if (DogStore !== null) {
                    DogStore.push(newDog);
                    console.log('typeof(Store)', typeof (DogStore), DogStore);
                    newObjectDog.writeToStorage(DogStore);
                }
                else {
                    newObjectDog.writeToStorage([newDog]);
                }
                break;
            case "cat":
                const newObjectCat = new homeCat(name, breed, age, activeValue);
                const newCat = [];
                newCat.push(newObjectCat.getType(), newObjectCat.getName(), newObjectCat.getBreed(), newObjectCat.getAge().toString(), newObjectCat.getactivity().toString());
                let CatStore = localStore.getFromStorage();
                if (CatStore !== null) {
                    CatStore.push(newCat);
                    console.log('typeof(CatStore)', typeof (CatStore), CatStore);
                    newObjectCat.writeToStorage(CatStore);
                }
                else {
                    newObjectCat.writeToStorage([newCat]);
                }
                break;
        }
    }
}
const showLocalButton = document.getElementsByClassName("ShowButton")[0];
showLocalButton.addEventListener("click", ShowLocal);
function ShowLocal() {
    const allStorage = localStore.getFromStorage();
    const tag = document.getElementsByClassName('show')[0];
    tag.innerHTML = "";
    const elem = document.getElementById("choose-show");
    const choose = elem.options[elem.selectedIndex].value;
    switch (choose) {
        case "dog":
            const filterArrDog = allStorage.filter((arr) => {
                return arr[0] === "Hunter Dog";
            });
            filterArrDog.forEach((e) => {
                const newP = document.createElement('p');
                const text = `Type: ${e[0]}, Name: ${e[1]}, breed - ${e[2]}, age - ${e[3]}, power - ${e[4]}`;
                newP.appendChild(document.createTextNode(text));
                tag.appendChild(newP);
            });
            break;
        case "cat":
            const filterArrCat = allStorage.filter((arr) => {
                return arr[0] === "Home cat";
            });
            console.log('arr', filterArrCat);
            filterArrCat.forEach((e) => {
                const newP = document.createElement('p');
                const text = `Type: ${e[0]}, Name: ${e[1]}, breed - ${e[2]}, age - ${e[3]}, activity - ${e[4]}`;
                newP.appendChild(document.createTextNode(text));
                tag.appendChild(newP);
            });
            break;
        case "all":
            allStorage.forEach((e) => {
                const newP = document.createElement('p');
                const text = `Type: ${e[0]}, Name: ${e[1]}, breed - ${e[2]}, age - ${e[3]}, activity - ${e[4]}`;
                newP.appendChild(document.createTextNode(text));
                tag.appendChild(newP);
            });
            break;
    }
}
