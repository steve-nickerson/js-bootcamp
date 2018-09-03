// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score ${score}`
}

const scoreText = getScoreText(undefined, 99)
console.log(scoreText)

const getTipAmount = function (totalBill, tipAmount = .2) {
    return `A ${100 * tipAmount}% tip on \$${totalBill} would be \$${totalBill * tipAmount}`
}

const tip1 = getTipAmount(50)
const tip2 = getTipAmount(80, .35)
console.log(tip1)
console.log(tip2)
