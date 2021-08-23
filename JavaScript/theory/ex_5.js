const array = ['czarny'];
array.unshift('biały');
array.push('bordowy');

console.log(array);


for (let i = 0; i < array.length; i++) {

    let text = array[i].toString();
    console.log(`Mój ulubiony kolor to: ${text.toUpperCase()}`);
};

for (let i = 0; i < array.length; i++) {

    let text = array[i].toString();
    console.log(`Mój ulubiony kolor to: ${text.charAt(0).toUpperCase()}${text.slice(1)}`);
};