// deklaracja funkcji

function test() {
    console.log(`cześć`);
};

test();

// wyrażenie funkcyjne

const newTest = function () {
    console.log(`siemka`);
};

newTest();

//

function add(x, y) {
    console.log(x + y);
}

add(6, 7);

// function with return

function withReturn(x, y) {
    return x + y;
}
withReturn(2, 5)

function hello (name, age) {
    console.log(`Cześć, ma na imię ${name} i mam ${age} lat!`);
}

hello('Klaudia', 99);

const h1 = document.querySelector('h1');

h1.addEventListener('click', function (){
    console.log(`Kliknieto mnie!`)
})

