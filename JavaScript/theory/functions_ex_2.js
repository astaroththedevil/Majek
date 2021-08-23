let $celsius;
let $temp;

const fahrenheit = num => {
    $celsius = num;
    $temp = (num * 1.8) + 32
}

fahrenheit(20);
console.log(`${$celsius} stopni C to ${$temp} stopni F`);