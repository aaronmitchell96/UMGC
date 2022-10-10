const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener("click",function(){
    document.body.style.backgroundColor = 'pink';
})

btn2.addEventListener("click",function(){
    document.body.style.backgroundColor = 'purple';
})

btn3.addEventListener("click",function(){
    document.body.style.backgroundColor = 'orange';
})