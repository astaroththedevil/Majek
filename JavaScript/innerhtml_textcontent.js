const btn = document.querySelector('button');

// console.log(btn.innerHTML);btn.innerHTML = 'cześć'; // łapie zawartośc taga

// console.log(btn.outerHTML);  // edytuje cały element np. div, h1 itp.
// btn.outerHTML = '<li>123,</li>'

const one = document.querySelector('.one');
const two = document.querySelector('.two');

// one.textContent = '098';
// two.innerText = 'xyz'

const test = document.querySelector('#test');
console.log(test.innerText);
console.log(test.textContent);