const comunicate = document.querySelector('.comunicate')
const voteBtn = document.querySelector('.vote')
const thanks = document.querySelector('.thanks')

const hideComunicateAndShowThanks = () => {
    comunicate.classList.remove('active')
    thanks.classList.remove('inactive')
}

voteBtn.addEventListener('click', hideComunicateAndShowThanks)