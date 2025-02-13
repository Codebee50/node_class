const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.method)
    if (req.url == '/about'){
        res.end('<h1>About page</h1>')
    }
    else{
        res.writeHead(404)
        res.write('<h1>404 page not found</h1>')
        res.end()
    }
})

server.listen(5000, ()=>{
    console.log('Server now listening on port 5000')
})