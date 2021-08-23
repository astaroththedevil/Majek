// getElementById

const liID = document.getElementById('item');
console.log(liID);

// getElementByTagName

const liTags = document.getElementsByTagName('li')
console.log(liTags);

//// getElementByClassName

const liList = document.getElementsByClassName('item-class')
console.log(liList);

// querySelector

const ulList = document.querySelector('ul')
console.log(ulList);

const liList2 = ulList.querySelector('li')
console.log(liList2);

// querySelectorAll

const test = document.querySelectorAll('li')
console.log(test);

// ŻYWE KOLEKCJE, czyli:
// getElementByClassName & getElementByTagName vs querySelectorAll

const test2 = document.createElement('li');
ulList.appendChild(test2).textContent = 'siemka';
console.log(test.length);
console.log(liTags.length);

// przeszukiwanyObszar.metoda('  ')