

let greetUser = function () {
    console.log('Welcome user!')    
}

greetUser()
greetUser()
greetUser()
console.log('-----------------------')

let square = function (num) {
    return num * num
}

const result = square(10)
console.log(result)
console.log('-----------------------')
// convertFahrenheitToCelcius

const convertToCelcius = function (farenheit) {
    return (farenheit - 32) * 5 / 9
}

const result1 = convertToCelcius(100)
const result2 = convertToCelcius(32)

console.log(result1, result2)
console.log('-----------------------')