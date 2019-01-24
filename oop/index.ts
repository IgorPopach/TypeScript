class localStore {
    public writeToStorage(newDog: string[]): void {
        const myStorage = window.localStorage;
        myStorage.setItem('newDog', newDog.toString());
    }
    public getFromStorage(): any | null {
        const myStorage = window.localStorage;
        const item = myStorage.getItem('newDog');
        return item;
    }
    public showAllFromStorage(): void {
        const myStorage = window.localStorage;
        const item: any = myStorage.getItem('newDog');
        const arrStore = item.split(',');
        let j = 0;
        const tag: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName('show')[0];
        tag.innerHTML = "";
        for (let i: number = 0; i < arrStore.length/4; i++) {
            let arrFilter = arrStore.slice(j,j + 4);
            j += 4;
            const newP: HTMLParagraphElement = document.createElement('p');
            const text =`Name: ${arrFilter[0]}, breed - ${arrFilter[1]}, age - ${arrFilter[2]}, power - ${arrFilter[3]}`;
            newP.appendChild(document.createTextNode(text))
            
            tag.appendChild(newP)
        }

    }
}

abstract class Dog extends localStore {
    protected name: string;
    protected breed: string;
    protected age: number;
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
    public setAge(newAge: number): void {
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
    private power: number;
    constructor(name: string, breed: string, age: number, power: number) {
        super(name, breed, age);
        this.power = power;
    }
    public hunt(): void {
        this.power -= 10
        console.log(`Hunting, power ${this.power}`)
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

let Bimbo = new HunterDog('Bimbo', "Boxedr", 5, 100);
Bimbo.showDog();
Bimbo.hunt();
Bimbo.setAge(10);
Bimbo.showDog();
HunterDog.static();

function Add(): void {
    const inputA: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[0];
    const a: string = inputA.value;
    const inputB: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[1];
    const b: string = inputB.value;
    const inputC: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[2];
    const c: number = parseInt(inputC.value);
    const inputD: HTMLInputElement = <HTMLInputElement>document.getElementsByTagName("input")[3];
    const d: number = parseInt(inputD.value);
    const newObjectDog = new HunterDog(a, b, c, d);
    const newDog: string[] = [];
    newDog.push(newObjectDog.getName(), newObjectDog.getBreed(), newObjectDog.getAge().toString(), newObjectDog.getPower().toString());
    const store = new localStore;
    const getStore: any | null = store.getFromStorage();
    if (getStore !== null) {
        let arrStore = [];
        arrStore = getStore.split(',');
        console.log('typeof(arrStore)', typeof (arrStore), arrStore)
        arrStore.push(newDog);
        newObjectDog.writeToStorage(arrStore)
    } else {
        newObjectDog.writeToStorage(newDog)
    }
}

function ShowLocal(): void {
    const store = new localStore;
    store.showAllFromStorage();
}

