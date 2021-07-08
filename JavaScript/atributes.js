const link = document.querySelector('a');
const img = document.querySelector('img');
const h1 = document.querySelector('h1');

link.setAttribute('href', '#');
// setAttribute(nazwa_atrybutu, właściwość)

console.log(img.getAttribute('alt'));
// getAttribute pobiera zawartość atrybutu

const hasAtr = img.hasAttribute('src');
console.log(hasAtr);
// true/false - sprawdza czy element ma dany atrybut

h1.removeAttribute('style');
// usuwa wskazany atrybut