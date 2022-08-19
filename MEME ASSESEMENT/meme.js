const input = document.querySelectorAll('input');
const submit = document.querySelector('#submit');
const memes = document.querySelectorAll('.memes');
const imgUrl = document.querySelector('#img-input');
const lowerText = document.querySelector('#lower-input');
const upperText = document.querySelector('#upper-input');
const form = document.querySelector('form');

for (let inp of input){
    inp.addEventListener('click',function(e){
        e.preventDefault();
    })
}

submit.addEventListener('click',function(e){
    e.preventDefault();
    const divContainer = document.getElementsByClassName('memes')[0];
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    divContainer.appendChild(textContainer);
    const imgSrc = imgUrl.value;
    const memeImg = document.createElement('img');
    memeImg.className = 'memes-img';
    memeImg.setAttribute('src',imgSrc);
    textContainer.appendChild(memeImg);
    const lowerTextDiv = document.createElement('div');
    lowerTextDiv.className = 'lower-text'
    lowerTextDiv.innerHTML = lowerText.value;
    textContainer.appendChild(lowerTextDiv);
    const upperTextDiv = document.createElement('div');
    upperTextDiv.className = 'upper-text'
    upperTextDiv.innerHTML = upperText.value;
    textContainer.appendChild(upperTextDiv);
    divContainer.appendChild(textContainer);
    memeImg.addEventListener('click',function(event){
        event.target.parentElement.remove();
    })
    form.reset();
})

