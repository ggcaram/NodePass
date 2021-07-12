//Modulos de Node
// FS: https://nodejs.dev/learn/the-nodejs-fs-module
// Path: https://nodejs.dev/learn/the-nodejs-path-module
// OS: https://nodejs.dev/learn/the-nodejs-os-module
const fs = require("fs")
const path = require("path")
const os = require("os")


const chalk = require("chalk")

const savePassword = (password) => {
    fs.open(path.join(__dirname,"../", "passwords.txt"), "a", 666, (e,id)=>{
        fs.write(id,password + os.EOL, null, "utf-8", () => {
            fs.close(id, () => {
                console.log(chalk.green ("Se guardo la contraseña en el archivo passwords.txt"))
            })
        })
    })
}

module.exports = savePassword