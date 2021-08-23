//plik należy podpiąć do obj.html

// konstruktor - zawsze z wielkiej litery
function User (name, age){
    this.name = name;
    this.age = age;

    // this.hello = function(){
    //     console.log(`Użytkownik ma na imię ${this.name} i ma ${this.age} lat.`);
    // }
}

User.prototype.hello = function(){
    console.log(`Użytkownik ma na imię ${this.name} i ma ${this.age} lat.`);
}

const newUser = new User('Jack', 24);
const newUser2 = new User('James', 27);
const newUser3 = new User('Lilly', 21);

newUser.hello()
newUser2.hello()
newUser3.hello()