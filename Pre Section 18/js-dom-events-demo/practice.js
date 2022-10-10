// document.addEventListener('mousemove',function(e){
//     //console.log(e.pageX,e.pageY);
//     const r = Math.round(e.pageX*255 / window.innerWidth)
//     const s = Math.round(e.pageY*255 / window.innerHeight)
//     const rgb = `rgb(${r},0,${s})`;
//     document.body.style.backgroundColor = rgb;
//     console.log(rgb);
// });


const btn = document.querySelectorAll('button')

for(let btns of btn){
    btns.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })

}

const form = document.querySelector('#add-friend');
form.addEventListener('submit', function(e){
    e.preventDefault();
})