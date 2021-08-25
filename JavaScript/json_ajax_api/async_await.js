//skrypt nalezy podpiąć do pliku index.html

function checkAge(age){
    return new Promise((resolve, reject) => {
        console.log(`Twój wiek to: ${age}`);

        if(age >= 18){
            resolve('Jest ok, mozesz wejść');
        }else {
            reject('Niestety jesteś za młody')
        }
    })
}

function doubleCheck(ageConfirm){
    return new Promise((resolve, reject) => {
        console.log('Sprawdzę jeszcze raz')
        resolve(`Faktycznie: ${ageConfirm}`)
    })
}

// checkAge(22)
//     .then(res => {
//         console.log(`.then RES ${res}`);
//         return doubleCheck(res)
//     })
//     .then(sth => {
//         console.log(sth);
//     })
//     .catch(err => console.log(err))

async function checkAge2(){
    try {
        const age = await checkAge(22);
        console.log('Jest ok, możesz wejść');
        const dblCheck = await doubleCheck(age);
        console.log(dblCheck);
    } catch(err) {
        console.log(err);
    }
}

checkAge2()