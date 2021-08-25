//plik należy podpiąć do obj.html

const user = {
    name: 'Lilly',
    age: 23
}

const pet = {
    name: 'Drops',
    type: 'dog'
}

const newObject = Object.assign({},user, pet);
console.log(user);
console.log(pet);
console.log(newObject);

const car = {
    brand: 'Audi',
    year: 2017,
    color: 'silver'
}

const car2 = Object.assign({}, car);
console.log(car);
console.log(car2);