const var22 = 22

function createUser(name, age){
    logger(`Hello. My name is ${name} and i am ${age} years`)
}
function logger(sting){
    console.log(sting)
}
module.exports = {
    var22,
    createUser
}
