const buttonMultiply = document.querySelector('.multiply');
const buttonDivide = document.querySelector('.divide');
const spanOriginal = document.querySelector('.original-result');
const spanNew = document.querySelector('.new-result');

let $score;

const add = (a, b) => {
    $score = a + b;
    spanOriginal.innerHTML = $score;
};

const multiply = () => {
    const newScore = $score * 2;
    spanNew.innerText = newScore;
};

const divide = () => {
    const newScore = $score / 2;
    spanNew.innerText = newScore;
};

buttonMultiply.addEventListener('click', multiply);
buttonDivide.addEventListener('click', divide);

add(6, 10)
console.log($score);