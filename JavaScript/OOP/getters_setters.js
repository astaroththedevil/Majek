//plik należy podpiąć do obj.html

const city = {
    name: 'New York',
    location: 'USA',

    get cityName(){
        return this.name;
    },

    set cityName(newCity){
        return this.name = newCity;
    }
}

console.log(city.cityName);
const newCity = city.cityName = 'LA';

console.log(newCity);

console.log(city);