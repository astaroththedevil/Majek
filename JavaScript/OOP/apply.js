//plik należy podpiąć do obj.html

// APPLY działa jak CALL tylko że zamiast argumentów przyjmuje tablicę

function add(...args){
    let result = 0;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }

    return result;
}

const score = add.apply(null, [1, 2, 3, 4, 5, 6]);
console.log(score);

//call & aply

//funkcja.call(OBIEKT, ARGUMENTY)
//funkcja.apply(OBIEKT, TABLICA)