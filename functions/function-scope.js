

const convertToCelcius = function (farenheit) {    
    let celcius = (farenheit - 32) * 5 / 9
    if (celcius <= 0) {
        let isFreezing = true        
    }
    return celcius
}

const result1 = convertToCelcius(100)
const result2 = convertToCelcius(32)

console.log(result1, result2)
console.log('-----------------------')