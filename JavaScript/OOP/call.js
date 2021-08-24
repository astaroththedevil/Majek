//plik należy podpiąć do obj.html

//funkcja.call(obiekt, argumenty)

const movie = {
    title: 'Druk',
};

const showMovie = function(price, cinema){
    console.log(`Film "${this.title}", bilet: ${price} zł, kino: ${cinema}`)
};

// showMovie(35, 'Nice Cinema')
showMovie.call(movie, 105, 'superKINO')

//kolejny przykład do call()

function Movie(title, year) {
    this.title = title;
    this.year = year;
};

function ActionMovie(title, year){
    Movie.call(this, title, year);
    this.category = 'Akcja';
    console.log(`"${this.title}", rok ${this.year}, kategoria ${this.category}`);
}

function Comedy(title, year){
    Movie.call(this, title, year);
    this.category = 'Komedia';
    console.log(`"${this.title}", rok ${this.year}, kategoria ${this.category}`);
}

const neMovie = new ActionMovie('Szybcy i wściekli', 2001);
const neMovie2 = new Comedy('Chłopaki nie płaczą', 2000);

//mój przykład

function Car(brand, year, engineCapacity) {
    this.brand = brand;
    this.year = year;
    this.engineCapacity = engineCapacity;
};

function JapanCar(brand, year, engineCapacity){
    Car.call(this, brand, year, engineCapacity);
    this.model = 'Avensis';
    console.log(`Marka samochodu to ${this.brand}, rok produkcji: ${this.year}, pojemność silnika: ${this.engineCapacity}, model to: ${this.model}`);
};

function BritishCar(brand, year, engineCapacity){
    Car.call(this, brand, year, engineCapacity);
    this.color = 'silver';
    console.log(`Marka samochodu to ${this.brand}, rok produkcji: ${this.year}, pojemność silnika: ${this.engineCapacity}, kolor to: ${this.color}`);
};

const newCar1 = new JapanCar('Toyota', 2020, 2.5);
const newCar2 = new BritishCar('Aston Martin', 2019, 5.0);