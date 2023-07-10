function addCommas(number) {
    let counter = 0
    let newNumber = ''
    number = number.toString()
    for (let i = number.length - 1; i >= 0; i--){
        if(number.length > 3){
            if (counter % 3 == 0 && counter != 0 && number[i] != '-'){
                newNumber += ','
            }
            newNumber += number[i]
            counter ++
        }
        else{
            newNumber += number[i]
        }
     }
     newNumber= newNumber.split('').reverse().join('')
    return (newNumber)
}

console.log(addCommas(-5678787777))

module.exports = addCommas;