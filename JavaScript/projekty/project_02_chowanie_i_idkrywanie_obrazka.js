const arrowBtn = document.querySelector('.arrow');
const arrowIicon = document.querySelector('.fas');
const img = document.querySelector('.item1');

arrowBtn.addEventListener('click', function(){
    img.classList.toggle('hide')

    if (img.classList.contains('hide')) {
        arrowIicon.style.transform = 'rotate(-180deg)'
    } else {
        arrowIicon.style.transform = 'rotate(0deg)'
    }
});

