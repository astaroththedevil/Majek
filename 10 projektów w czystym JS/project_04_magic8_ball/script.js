const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = [
	'Tak',
	'Nie',
	'Nie wiem',
	'Być może',
	'Co to za pytanie?!',
	'Oczywiście, że tak',
	'Idź się utop',
	'Jak śmiesz o to pytać?!',
    'Wolisz tego nie wiedzieć',
]

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		drawTheAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakonczone znakiem "?".'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie'
		answer.textContent = ''
	}
	ball.classList.remove('shake-animation')
}

const drawTheAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall);