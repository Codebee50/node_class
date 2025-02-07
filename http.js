const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/contact'){
        res.end('Contact us')
    }

    if (req.url == '/about'){
        res.end('This is about is')
    }

    if(req.url == '/people'){
        res.end(JSON.stringify({
            people_list:[
                {
                    name: "kyrian",
                    age: 50
                },
                {
                    name: "john",
                    age: 50
                },
                {
                    name: "mercy",
                    age: 50
                }
            ]
        }))
    }

})

server.listen(5000)