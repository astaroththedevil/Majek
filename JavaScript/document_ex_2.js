const show = document.querySelector('.btn1');
const hide = document.querySelector('.btn2');
const text = document.querySelector('p');

const showFunction = () => text.classList.remove('hide');
show.addEventListener('click', showFunction);

const hideFunction = () => text.classList.add('hide');
hide.addEventListener('click', hideFunction);

// show.addEventListener('click', function() {
//     text.classList.toggle('show');
// })