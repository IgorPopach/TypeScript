interface IAnimal {
    name: string;
    type: string;
    age: number;
    showInfo(): void;
    die(): void
}

abstract class localStore {
    public writeToStorage(newAnimal: string[][]): void {
        const myStorage = window.localStorage;
        myStorage.setItem("animals", JSON.stringify(newAnimal));
    }
    public static getFromStorage() {
        const myStorage: any = window.localStorage;
        const animals: any = JSON.parse(myStorage.getItem("animals"));
        return animals;
    }
}

abstract class Dog extends localStore implements IAnimal {
    name: string;
    type: string = "Dog";
    age: number;
    protected breed: string;
    constructor(name: string, breed: string, age: number) {
        super();
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    public showDog(): void {
        console.log(`Name ${this.name} age - ${this.age}`);
    }
    public getName(): string {
        return this.name;
    }
    public getBreed(): string {
        return this.breed;
    }
    public getAge(): number {
        return this.age;
    }
    public getType(): string {
        return this.type;
    }
    public setAge(newAge: number): void {
        if (newAge < 80 || newAge > 3)
            this.age = newAge;
    }
    public static test(): void {
        console.log("Dog static")
    }
    showInfo(): void {
        console.log(`${this.name} ${this.type} ${this.breed} ${this.age}`);
    }
    die(): void {
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
    type: string = "Hunter Dog";
    private power: number;
    constructor(name: string, breed: string, age: number, power: number) {
        super(name, breed, age);
        this.power = power;
    }
    public hunt(): void {
        this.power -= 10;
        console.log(`Hunting, power ${this.power}`)
        if (this.power <= 0) {
            this.die();
        }
    }
    public getPower(): number {
        return this.power;
    }
    public showDog(): void {
        console.log(`${this.type} Name ${this.name} age - ${this.age}, power => ${this.power}`);
    }
    public static static(): void {
        console.log('static');
    }
}

abstract class Cat extends localStore implements IAnimal {
    name: string;
    type: string = "Cat";
    age: number;
    protected breed: string;
    constructor(name: string, breed: string, age: number) {
        super();
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    public showDog(): void {
        console.log(`Name ${this.name} age - ${this.age}`);
    }
    public getName(): string {
        return this.name;
    }
    public getBreed(): string {
        return this.breed;
    }
    public getAge(): number {
        return this.age;
    }
    public getType(): string {
        return this.type;
    }
    public setAge(newAge: number): void {
        if (newAge < 80 || newAge > 3)
            this.age = newAge;
    }
    public static test(): void {
        console.log("Dog static")
    }
    showInfo(): void {
        console.log(`${this.type} ${this.name} ${this.type} ${this.breed} ${this.age}`);
    }
    outdoor(): void {
        console.log(`Cat ${this.name} want to go outdoor!!!`);
    }
    die(): void {
        console.log(`${this.name} DIE!!!!!!o_0`);
    }
}

class homeCat extends Cat {
    type: string = "Home cat";
    private activity: number;
    constructor(name: string, breed: string, age: number, activity: number) {
        super(name, breed, age);
        this.activity = activity;
    }
    public sleeping(): void {
        this.activity += 20;
        console.log(`Sleeping, activity ${this.activity}`)
        if (this.activity >= 100) {
            this.outdoor();
        }
    }
    public getactivity(): number {
        return this.activity;
    }
    public showCat(): void {
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

function Gen(data: any): any {
    return data;
}
console.log(Gen('test').length);
console.log(Gen(10).length);

function genericType<T>(data: T): T {
    return data
}

console.log('genericType', genericType('test').length);
console.log('genericType', genericType(10).length);

const addButton: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("Add")[0];
addButton.addEventListener("click", Add);

function Add(): void {
    const inputA: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[0];
    const name: string = inputA.value;
    const inputB: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[1];
    const breed: string = inputB.value;
    const inputC: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[2];
    const age: number = parseInt(inputC.value);
    const inputActive: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[3];
    const activeValue: number = parseInt(inputActive.value);
    if (name === '' || breed === '' || inputC.value == '' || inputActive.value == '') {
        alert("PLease input all values!")
    }
    if (typeof(parseInt(name)) === "number" || typeof(parseInt(breed)) === "number") {
        alert("Name & breed must be a text")
    }
    else {
        const elem: any = document.getElementById("choose-type");
        const choose: any = elem.options[elem.selectedIndex].value;
        switch (choose) {
            case "dog":
                const newObjectDog = new HunterDog(name, breed, age, activeValue);
                const newDog: string[] = [];
                newDog.push(newObjectDog.getType(), newObjectDog.getName(), newObjectDog.getBreed(), newObjectDog.getAge().toString(), newObjectDog.getPower().toString());
                let DogStore: any | null = localStore.getFromStorage();
                if (DogStore !== null) {
                    DogStore.push(newDog);
                    console.log('typeof(Store)', typeof (DogStore), DogStore)
                    newObjectDog.writeToStorage(DogStore)
                } else {
                    newObjectDog.writeToStorage([newDog])
                }
                break;
            case "cat":
                const newObjectCat = new homeCat(name, breed, age, activeValue);
                const newCat: string[] = [];
                newCat.push(newObjectCat.getType(), newObjectCat.getName(), newObjectCat.getBreed(), newObjectCat.getAge().toString(), newObjectCat.getactivity().toString());
                let CatStore: any | null = localStore.getFromStorage();
                if (CatStore !== null) {
                    CatStore.push(newCat);
                    console.log('typeof(CatStore)', typeof (CatStore), CatStore)
                    newObjectCat.writeToStorage(CatStore)
                } else {
                    newObjectCat.writeToStorage([newCat])
                }
                break;
        }
    }
}

const showLocalButton: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("ShowButton")[0];
showLocalButton.addEventListener("click", ShowLocal);

function ShowLocal(): void {
    const allStorage: any = localStore.getFromStorage();
    const tag: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName('show')[0];
    tag.innerHTML = "";
    const elem: any = document.getElementById("choose-show");
    const choose: any = elem.options[elem.selectedIndex].value;
    switch (choose) {
        case "dog":
            const filterArrDog = allStorage.filter((arr: string[]) => {
                return arr[0] === "Hunter Dog"
            }
            )
            filterArrDog.forEach((e: string[]) => {
                const newP: HTMLParagraphElement = document.createElement('p');
                const text = `Type: ${e[0]}, Name: ${e[1]}, breed - ${e[2]}, age - ${e[3]}, power - ${e[4]}`;
                newP.appendChild(document.createTextNode(text))
                tag.appendChild(newP)
            });
            break;
        case "cat":
            const filterArrCat = allStorage.filter((arr: string[]) => {
                return arr[0] === "Home cat"
            }
            )
            console.log('arr', filterArrCat)
            filterArrCat.forEach((e: string[]) => {
                const newP: HTMLParagraphElement = document.createElement('p');
                const text = `Type: ${e[0]}, Name: ${e[1]}, breed - ${e[2]}, age - ${e[3]}, activity - ${e[4]}`;
                newP.appendChild(document.createTextNode(text))
                tag.appendChild(newP)
            });
            break;
        case "all":
            allStorage.forEach((e: string[]) => {
                const newP: HTMLParagraphElement = document.createElement('p');
                const text = `Type: ${e[0]}, Name: ${e[1]}, breed - ${e[2]}, age - ${e[3]}, activity - ${e[4]}`;
                newP.appendChild(document.createTextNode(text))
                tag.appendChild(newP)
            });
            break;
    }
}

