const die = (size) => {
    return Math.ceil(Math.random() * size)
}

const roll = (number, size) => {
    let result = {}
    let rolls = []
    for (let i = 1; i <= number; i++) {
        rolls.push(die(size))
    }
    result[rolls.reduce((a, b) => a + b)] = rolls
    return result
}

console.log(roll(2, 4))