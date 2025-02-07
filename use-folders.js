const fs = require('node:fs');

const folderPath = './Users/kyrian';

try{
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath)
    }
}
catch(err){
    console.log('An error occured here')
    console.error(err)
}