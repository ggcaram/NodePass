//Caracteres usados
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

//La funcion crea la contraseña por defecto con numeros, simbolos y una longitud de 8
const createPassword = (length = 8, hasNumbers=true,hasSymbols=true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ""
    hasSymbols ? (chars += symbols) : ""
    return generatePassword(length, chars)
}

//Esta funcion genera aleatoriamente la contraseña teniendo en cuenta el resultado de la funcion anterior
const generatePassword = (length,chars) => {
    let password = ""
    for (let i = 0; i <length; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports = createPassword