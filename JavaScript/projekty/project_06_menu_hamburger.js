const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const burgerIco = document.querySelector('.fa-bars');
const closeIco = document.querySelector('.fa-times');

burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
        burgerIco.classList.add('hide');
        closeIco.classList.remove('hide')
    }else {
        closeIco.classList.add('hide');
        burgerIco.classList.remove('hide');
    };
});