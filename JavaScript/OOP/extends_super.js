//plik należy podpiąć do obj.html

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`${this.name} mówi cześć!`);
    }
};

class Driver extends Person {
    constructor(name, age, license){
        super(name, age)
        this.license = license;
    }

    isDriver(){
        console.log(`${this.name} ma ${this.age} lata i posiada prawo jazdy kategorii ${this.license}.`);
    }
};

const person1 = new Person('Adam', 35);
console.log(person1);
person1.sayHello();

const driver1 = new Driver('Lilly', 23, 'B');
console.log(driver1);
driver1.sayHello();
driver1.isDriver();

//super w konstruktorze zawsze musi być pierwsze