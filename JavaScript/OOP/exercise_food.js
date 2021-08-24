const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const dish = document.querySelector('.dish');

function Food(dish, price) {
    this.dish = dish;
    this.price = price;
}

Food.prototype.text = function(){
    dish.innerText = `${this.dish} costs ${this.price} $`
};

const dish1 = new Food('meatball', 15);
const dish2 = new Food('tomato soup', 10);
const dish3 = new Food('hamburger', 20);

btn1.addEventListener('click', function(){
    dish1.text()
});
btn2.addEventListener('click', function() {
    dish2.text()
});
btn3.addEventListener('click', function(){
    dish3.text()
});