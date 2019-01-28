interface IAnimal {
    name: string;
    type: string;
    age: number;
    showInfo(): void;
    die(): void
}

abstract class localStore {
    public writeToStorage(newAnimal: string[][], type: string): void {
        const myStorage = window.localStorage;
        myStorage.setItem(type, JSON.stringify(newAnimal));
    }
    public getFromStorage(type: string) {
        const myStorage: any = window.localStorage;
        const animals: any = JSON.parse(myStorage.getItem(type));
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
        console.log(`Name ${this.name} age - ${this.age}, power => ${this.power}`);
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
        console.log(`${this.name} ${this.type} ${this.breed} ${this.age}`);
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
    private active: number;
    constructor(name: string, breed: string, age: number, active: number) {
        super(name, breed, age);
        this.active = active;
    }
    public sleeping(): void {
        this.active += 20;
        console.log(`Sleeping, active ${this.active}`)
        if (this.active >= 100) {
            this.outdoor();
        }
    }
    public getActive(): number {
        return this.active;
    }
    public showCat(): void {
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

function Add(): void {
    const inputA: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[0];
    const a: string = inputA.value;
    const inputB: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[1];
    const b: string = inputB.value;
    const inputC: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[2];
    const c: number = parseInt(inputC.value);
    const inputD: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[3];
    const d: number = parseInt(inputD.value);
    if (a === '' || b === '' || inputC.value == '' || inputD.value == '') {
        alert("PLease input all values!")
    } else {
        const elem: any = document.getElementById("choose-type");
        const choose: any = elem.options[elem.selectedIndex].value;
        switch (choose) {
            case "dog":
                const newObjectDog = new HunterDog(a, b, c, d);
                const newDog: string[] = [];
                newDog.push(newObjectDog.getName(), newObjectDog.getBreed(), newObjectDog.getAge().toString(), newObjectDog.getPower().toString());
                let DogStore: any | null = newObjectDog.getFromStorage(newObjectDog.getType());
                if (DogStore !== null) {
                    DogStore.push(newDog);
                    console.log('typeof(Store)', typeof (DogStore), DogStore)
                    newObjectDog.writeToStorage(DogStore, newObjectDog.getType())
                } else {
                    newObjectDog.writeToStorage([newDog], newObjectDog.getType())
                }
                break;
            case "cat":
                const newObjectCat = new HunterDog(a, b, c, d);
                const newCat: string[] = [];
                newCat.push(newObjectCat.getName(), newObjectCat.getBreed(), newObjectCat.getAge().toString(), newObjectCat.getPower().toString());
                let CatStore: any | null = newObjectCat.getFromStorage(newObjectCat.getType());
                if (CatStore !== null) {
                    CatStore.push(newCat);
                    console.log('typeof(CatStore)', typeof (CatStore), CatStore)
                    newObjectCat.writeToStorage(CatStore, newObjectCat.getType())
                } else {
                    newObjectCat.writeToStorage([newCat], newObjectCat.getType())
                }
                break;
        }
    }
}

function ShowLocal(): void {
    const store = new HunterDog('a', 'a', 1, 1);
    const dogs: any = store.getFromStorage();
    const tag: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName('show')[0];
    tag.innerHTML = "";
    dogs.forEach((e: string[]) => {
        const newP: HTMLParagraphElement = document.createElement('p');
        const text = `Name: ${e[0]}, breed - ${e[1]}, age - ${e[2]}, power - ${e[3]}`;
        newP.appendChild(document.createTextNode(text))
        tag.appendChild(newP)
    });
}

function getAnimal(): void {

}

