//plik należy podpiąć do obj.html

const user = {
    name: 'Lilly',
    age: 23,
    'fav-color': 'niebieski',
    car: {
        brand: 'Audi'
    }
}

function showUserInfo(){
    console.log(`${this.name} ma ${this.age} lata, a jej ulubiony kolor to ${this['fav-color']}.`);
};

const showCarInfo = function(color) {
    console.log(`Jeździ samochodem marki ${this.car.brand}. Samochód jest koloru ${color}`)
}

showUserInfo.bind(user)();
showCarInfo.call(user, 'czarnego');