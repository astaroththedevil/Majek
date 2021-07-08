// REST

function multiply(num) {
    return num * 2
}

function numbers (x, y, ...z) {
    console.log(x, y, z);
    console.log(z.map(multiply));
}

numbers(30, 5, 1, 34, 80, 48, 77);