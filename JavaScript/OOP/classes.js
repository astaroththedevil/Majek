//plik należy podpiąć do obj.html

class Food {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    showMeal(){
        console.log(`${this.name} kosztuje ${this.price} $`);
    }
}

const shake = new Food('Milk shake', 5);
console.log(shake);

shake.showMeal()