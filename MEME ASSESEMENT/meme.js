const input = document.querySelectorAll('input');
const submit = document.querySelector('#submit');
const memes = document.querySelector('.memes')
const imgUrl = document.querySelector('#img-input')

for (let inp of input){
    inp.addEventListener('click',function(e){
        e.preventDefault();
    })
}


submit.addEventListener('click',function(){
    const memeDivCollection = document.getElementsByClassName('memes');
    console.log(memeDivCollection)
    const memeDiv = memeDivCollection[0];
    console.log(memeDiv)
    const img = document.createElement('img');
    img.setAttribute('src', imgUrl.value);
    img.className = 'meme-image';
    memeDiv.appendChild(img);
})

