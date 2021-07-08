const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

btn1.addEventListener('click', function(){
    console.log('Kliknięto mnie!');
})

const test = () => console.log('Najechany przycisk');
btn2.addEventListener('mouseover', test);

btn3.addEventListener('dblclick', function(){
    console.log('Klikniete podwójnie!');
})

