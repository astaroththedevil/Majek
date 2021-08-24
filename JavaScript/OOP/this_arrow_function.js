//plik należy podpiąć do obj.html

function test() {
	console.log(this)
}

const test2 = () => {
	console.log(this)
}

test()
test2()

//kolejny przykład

const ob = {
	name: 'Lilly',
	callName() {
		console.log(this.name)

		function callNameAgain() {
			console.log(`BIND: ${this.name}`)
		}
		callNameAgain.bind(ob)()

		const callAgain = () => {
			console.log(`Funkcja strzałkowa w callName: ${this.name}`)
		}
		callAgain()
	},
	testfn: () => {
		console.log(this)
	},
}

ob.callName()
ob.testfn()

//kolejny przykład

const colorsObj = {
	colors: ['red', 'green', 'blue'],
	showColors() {
        this.colors.forEach((el, i) => {
            console.log(this.colors[i]);
        })
    }
}

colorsObj.showColors()
