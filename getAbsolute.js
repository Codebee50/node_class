const path = require('path')

const getAbsolute = (filePath)=>{
    return path.resolve(__dirname, filePath) 
}

module.exports = {
    getAbsolute,
    name: "Kyrian"
}