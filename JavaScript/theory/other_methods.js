const arr = ['zielony', 'czerwony', 'niebieski'];

const text = 'safdgsjdfnkjsd ksdfgni;aopejr asdfgsk;ln fks sfdngo'
console.log(text.split(' '));

const numbers = [2, 1, 5, 15, 123, 3634, 2, 456, 5784];

function number(x) {
    return x % 2 === 0;
};

console.log(numbers.filter(number));

const newNumbers = numbers.forEach(el => console.log(el * 3))

console.log(numbers);
console.log(numbers.reverse()); // w tej metodzie zostają odwrócone zarówno elementy tablicy jak i indeksy
console.log(numbers);

const names = ['Klaudia', 'Adam', 'Jan'];
console.log(names.sort());
console.log(numbers.sort((a, b) => a - b)); // fuunklcja do sortowania liczb w metodzie sort

console.log(numbers.includes(2)); // funkcja, która sprawdza i zwraca czy wskazany element zawiera się w tablicy
console.log(numbers.indexOf(2)); // funkcja która sprawdza pod jakim indeksem jest wskazany element w tablicy, szuka pierwszej wartości od lewej strony
console.log(numbers.lastIndexOf(2)); // funkcja która sprawdza pod jakim indeksem jest wskazany element w tablicy, szuka pierwszej wartości od prawej strony

let date = new Date();
const array = [3500, date];

console.log(array.toLocaleString()); // metoda zwraca elementy w formacie lokalnym zależnym od ustawień systemu