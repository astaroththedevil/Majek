function User(number) {
    this.someNumber = number;
    this.text = function(){
        console.log("I'm a method inside the object");
    }
}

User.prototype.text = function() {
    console.log("I'm a method outside the object");
}

const newUser = new User(554);

console.log(newUser.text());
console.log(newUser.someNumber.toString());

