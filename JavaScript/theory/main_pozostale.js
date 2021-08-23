function test () {
    console.log('setTimeout');
}

function test2 () {
    console.log('setInterval');
}

// test();

setTimeout(test, 5000);
setInterval(test2, 1000);