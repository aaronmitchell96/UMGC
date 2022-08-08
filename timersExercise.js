function countdown(num){
    let timer = setInterval(function(){
        num--;
        if (num<=0){
            clearInterval(timer);
            console.log('DONE!');
        }
        else {
            console.log(num);
        }
    },1000)
}

function randomGame(){
    let num;
    let counter = 0;
    let randNumGen = setInterval(function(){
        num = Math.round(Math.random() * 100) / 100;
        counter++;
        if (num >.75){
            clearInterval(randNumGen);
            console.log(num);
            console.log(`it took you ${counter} tries!`);
        }
        else{
            console.log(num);
        }
    },1000)
}