// rozwiązanie metodą concat

const array1 = ['toyota', 'honda', 'mazda', 'hyundai'];
const array2 = ['suzuki', 'lexus', 'subaru'];

const array3 = array1.concat(array2);
console.log(array3);

// rozwiązanie metodą spread

const array4 = [...array1, ...array2];
console.log(array4);