import fruits from './fruits'
import {choice, remove} from './helpers'

let fruit = choice(fruits)

console.log(`id like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)

let remaining = remove(fruit, fruits)

console.log(`Im sorry, we're all out. We have ${remaining.length} left.`)