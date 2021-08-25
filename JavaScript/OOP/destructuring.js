//plik należy podpiąć do obj.html

const user = {
    name: 'Lilly',
    age: 23,
    job: 'DJ',
    car: {
        brand: 'Dodge',
        model: 'Viper'
    }
}

const aboutMe = (info) => {
    const {name, age, job} = info;
    console.log(`${name} ma ${age} lata i pracuje jako ${job}.`);
}

aboutMe(user);

aboutMe2 = ({car: {brand, model}}) => {
    console.log(`Jej samochód to: ${brand} ${model}.`);
}

aboutMe2(user);