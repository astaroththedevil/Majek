let num = 10;
let numbers = [];

for (let i = 0; i < num; i++) {
    numbers.push(i)
}

const isEven = arg => {
    if (arg % 3 === 0 && arg != 0) {
        console.log(`${arg} jest podzielna przez 3`);
    } else {
        console.log(`${arg} nie jest podzielna przez 3`);
    }
}

let dupa = numbers.forEach(isEven);