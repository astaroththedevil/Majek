//skrypt nalezy podpiąć do pliku index.html

const test = new Promise((resolve, reject) => {
	const score = 1 + 1
	if (score === 2) {
		resolve('ok')
	} else {
		reject('error')
	}
})

test.then(info => console.log(info)).catch(err => console.error(err));
