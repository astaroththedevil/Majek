const hello = (name = 'drogi użytkowniku') => {
    return `Cześć ${name}, jak się masz?`
};

console.log(hello('Janusz'));

//

const add = (x= 10, y= 20) => x + y;
console.log(add(7, 7));