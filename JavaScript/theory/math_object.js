// console.log(Math.PI);

// console.log(Math.min(10, 50));

// console.log(Math.pow(3, 3));

// console.log(Math.floor(Math.random() * 101)); //Math.random() * 10 - losuje od 1-9, Math.random() * 100 - losuje od 1-99

const number = prompt('podaj liczbę od 1 do 10');
if (number ==  Math.floor(Math.random() * 11)) {
    console.log('wygrałeś');
} else {
    console.log('przegrałeś');
}