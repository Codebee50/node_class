const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')


const second = readFileSync('./content/second.txt', 'utf8')


// // writeFileSync('./content/result-sync.txt', `Here is the result first: ${first}, second: ${second}`)
// writeFileSync('./content/result-sync.txt', `domr dyug is the result first: ${first}, second: ${second}`, {
//     flag: 'a'
// })