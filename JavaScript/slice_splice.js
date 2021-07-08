const numbers = [1, 1, 0, 0, 1, 1, 1];
console.log(numbers);

const numbers2 = numbers.slice(2,4)
console.log(numbers2);

const arr = [0, 0, 'red', 'green', 'blue', 123, true];
console.log(arr);

const colors = arr.splice(2, 4)
console.log(colors);
console.log(`splice: ${colors}`);
console.log(arr);