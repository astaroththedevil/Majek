const numbers = [0.5, 4, 'abcd'];
const names = ['Janusz', 'Grażyna', 'Brajanusz', 'Karyna'];

// forEach i callback

const newNumbers = numbers.forEach(el => 
    console.log(`${el} do potęgi drugiej to: ${el ** 2} `));

const showBigNames = name => name.toUpperCase();

const bigNames = names.map(showBigNames);
console.log(`Lista imion w tablicy to: ${bigNames.join(', ')}`)