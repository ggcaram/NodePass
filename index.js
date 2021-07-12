#!/usr/bin/env node

//Se exportan 3 paquetes de node commander, chalk y clipboardy
//Commander para trabajar con la consola
const program = require ("commander")
//Chalk para estilizar la consola
const chalk = require("chalk")
//Clipboardy para copiar a portapapeles el contenido generado
const clipboardy = require("clipboardy")
const log = console.log
//Apuntado de los dos archivos
const createPassword = require("./utils/createPassword.js")
const savePassword = require("./utils/savePassword.js")

program.version("1.0.0").description("Generador de claves simples")

//Opciones de consola: asignar largo, guardado en txt, contraseña sin numeros y sin simbolos
program
    .option('-l, --length <number>', 'length of password', '8')
    .option("-s, --save", "guardar la contraseña en un .txt")
    .option("-nn, --no-numbers", "remover numeros")
    .option("-ns, --no-symbols", "remover simbolos")
    .parse()

const {length, save, numbers, symbols} = program.opts ()

//Obtener la contraseña generada
const generatedPassword = createPassword(length,numbers,symbols)

//Guardar la contraseña en un .txt
if(save) {
    savePassword(generatedPassword)
}

//Copiar la contraseña a portapapeles
clipboardy.writeSync(generatedPassword)

//Salida de contraseña generada
log (chalk.blue("Contraseña generada: ") + chalk.bold(generatedPassword))
log (chalk.yellow("Contraseña copiada al portapapeles"))
