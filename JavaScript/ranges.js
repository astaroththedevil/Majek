const $name = "Janusz";

function test() {
    const name = 'Adam';
    let age = 23;
    console.log(`CLG w funkcji - ${$name}`);
    console.log(age);

    function test2() {
        console.log(`TEST2 ${$name}`);
        console.log(`TEST 2 - ${age}`);
        let color = 'blue';
        console.log(color);
    }
    test2();

    function test3() {
        console.log(`Test 3 ${age}`);
    }
    test3();
}

test();
console.log(`CLG poza funkcją - ${$name}`);