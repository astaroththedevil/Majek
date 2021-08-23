//plik należy podpiąć do obj.html

const user = {
	name: 'Joe',
	login: 'incredible',

	pc: {
		cpuClock: 5.0,
		gpu: 'rtx3060',
		text() {
			console.log('text')
		},
	},
}

user.pc.ram = 32.0
user['badge-color'] = 'green'

console.log(user);

const usrName = 'Jack'
const login = 'liquid'
const pass = '*****_***'

const user2 = {
    usrName,
    login,
    pass
}

//usuwanie z obiektu
delete user2.pass

console.log(user2);