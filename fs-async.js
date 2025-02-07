const {writeFile, readFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log('An error occurred while reading your file',err)
        return
    }
    console.log("First file read successfully")
    const firstResult = result

    spacedString = ""
    for (let i=0; i<=firstResult.length; i++){
        spacedString += firstResult[i] + '\n'
    }

    writeFile('./content/spaced-result.txt', spacedString, (err, result)=>{
        if(err){
            console.log('An error occurred while writing your file',err)
            return
        }
        console.log('File written successfully')
    })

})

console.log('starting the next task')
