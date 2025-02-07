const {readFile}= require('fs')

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8',(err, result)=>{
            if(err){
                reject("Error reading file")
            }
            else{
                resolve(result)

            }
        })
    })
}

const start = async()=>{
    const text = await getText("./content/first.txt")
    const secondText = await getText('./content/second.txt')
    console.log('yhr yrcy',text)
    console.log('the second result', secondText)
}

start()

