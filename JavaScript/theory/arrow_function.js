// funkcja strzałkowa

const test = function(name){
    console.log(name);
}

test('Ania');

const test2 = (name) => {
    console.log(name);
};

test2('Klaudia');

// zasady

// 1. Nie musimy podawać argumentów do funkcji strzałkowej.

const test3 = () => {
    console.log('Siemka');
}

test3()

// 2. Jeśli mamy tylko jeden argument i funkcja wykonuje tylko jedną instrukcję to można opuścić nawiasy zwykłe oraz klamrowe

const test4 = age => console.log(age);
test4(243)

// 3. Jeżeli funkcja ma zwracać tylko jedną informację, to możemy pominąć słowo "return"

function add(x, y) {
    return x + y;
}

const add2 = (a, b) => a + b;
add2 (10, 3)

// forEach w funkcji strzałkowej

const arr = ['poniedziałek', 'wtorek', 'środa'];

const arr2 = arr.forEach(function(el){
    console.log(el);
})

const arr3 = arr.forEach(el => console.log(el))