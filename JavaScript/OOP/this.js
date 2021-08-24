//plik należy podpiąć do obj.html

const btns = document.querySelectorAll('button');

for (const btn of btns) {
    btn.addEventListener('click', function(){
        console.log(this.innerText);
    });
};

//kolejny przykład this

function test(){
    console.log(this.name);
};

const ob = {
    name: 'Jim',
    test: test
};

const ob2 = {
    name: 'Jack',
    test: test
};

ob.test();
ob2.test();

//THIS - część druga

function Food(name){
    this.name = name;
}

const zupa = new Food('pomidorowa');
const drugie = new Food('schabowy');

console.log(zupa);
console.log(drugie);