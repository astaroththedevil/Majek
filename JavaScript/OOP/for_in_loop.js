//plik należy podpiąć do obj.html

const user = {
    name: 'Jake',
    age: 24,
    sex: 'male',
    'hair-color': 'dark'
};

for (const data in user) {
    console.log(data + ': ' + user[data]);
}