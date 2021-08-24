//plik należy podpiąć do obj.html

const car1 = {
    name: 'Ferrari'
};

const car2 = {
    name: 'Mercedes'
};

const car3 = {
    name: 'Audi'
};

function showName(){
    console.log(this.name);
};

showName.bind(car1)()

//kolejny przykład

const colorsObj = {
    colors: ['red', 'green', 'blue'],
    showColors(){
        this.colors.forEach(
            function(el, i){
            console.log(this.colors[i]);
        }.bind(this)
        )
    }
}

colorsObj.showColors();