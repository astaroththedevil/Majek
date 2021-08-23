const cars = 'Audi, Mercedes, BMW, Nissan, Dodge';

const carsArray = cars.split(', ');
console.log(carsArray);

carsArray.length ? console.log(`Jest OK!`) : console.log('Nie jest OK...');

if (carsArray.includes('Audi')) {
    carsArray.push('Pagani');
} else {
    carsArray.pop();
};

console.log(carsArray);

for (let i =0; i < carsArray.length; i++) {
    console.log(carsArray[i].toUpperCase());
};