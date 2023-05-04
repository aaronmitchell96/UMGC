let inTime  = '16:09'
let outTime = "";
let hour = 0;
let minute = 0;
let amOrPm = ''

const hourArr = 
["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve",
"one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];

const teens = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]

const wordChanger = ["ten","twenty","thirty","fourty","fifty"];

function timeChanger(inTime){
    if (parseInt(inTime[0] + inTime[1]) < 12){
        amOrPm = 'am'
    }
    else{
        amOrPm = 'pm'
    }
    
    hour = hourArr[parseInt(inTime[0] + inTime[1]) -1]
    if(inTime == '12:00'){
        return 'Noon'
    }
    else if(inTime == '00:00'){
        return 'Midnight'
    }
    else if (inTime[3] == '0' && inTime[4] == '0'){
        minute = "o'clock"
    }
    else if (inTime[3] == '0' && inTime[4] != '0'){
        minute = 'oh ' + hourArr[parseInt(inTime[4]) -1]
    }
    else if (inTime[3] == '1' && inTime[4] != '0'){
        minute = teens[parseInt(inTime[4] -1)]
    }
    else if (inTime[4] == '0'){
        minute = wordChanger[parseInt(inTime[3] -1)]
    }
    else{
        minute = wordChanger[parseInt(inTime[3] -1)] + ' ' + hourArr[parseInt(inTime[4])-1]
    }
    
    outTime = hour + ' ' + minute + ' ' + amOrPm;
    
    return outTime
}

console.log(timeChanger(inTime))