class Human  {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, number, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = owner;
        if (owner.age < 18) {
            console.log('Власник автомобіля повинен бути старше 18 років!');
            this.owner = null;
        }
    }
    showInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік:${this.year}, Номерний знак: ${this.number}`);
        console.log('Власник:');
        if (this.owner) {
            this.owner.showInfo();
        } else {
            console.log('Немає власника');
        }
        
    }
}

let human1 = new Human('Ivan', 20);
let human2 = new Human('Vlad', 27);
let human3 = new Human('Sasha', 17);

let car1 = new Car('Toyota', 'Camry', 2018, 'КА 1234 AB', human1);
let car2 = new Car('Honda', 'Civic', 2009, 'AA 4321 BC', human2);
let car3 = new Car('Ford', 'Mustang', 2020, 'КІ 9999 AC', human3);


car1.showInfo();
car2.showInfo();
car3.showInfo();


