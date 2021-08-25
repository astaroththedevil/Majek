//skrypt nalezy podpiąć do pliku index.html

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const url = 'https://dog.ceo/api/breeds/image/random'

fetch(url).then(res => res.json()).then(res => one.setAttribute('src', res.message))

axios.get(url).then(res => two.setAttribute('src', res.data.message));
axios.get(url).then(res => three.setAttribute('src', res.data.message));

async function showImage(){
    const response = await axios.get(url);
    console.log(response);
    three.setAttribute('src', response.data.message);
}

showImage()