const ulList = document.createElement('ul');
document.body.appendChild(ulList);
let number = 3;

for (let i = 1; i <= number; i++) {
    const liItem = document.createElement('li');
    ulList.appendChild(liItem);
    liItem.textContent = i;
}

const lastEl = document.querySelector('li:last-child');
lastEl.innerHTML = "Ostatni Element";