const express = require('express')
const app = express()
const path = require('path')
const {getAbsolute, name} = require('./getAbsolute')

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})


app.get('/', (req, res)=>{
    console.log('this is the home page')
    res.send('Home page')
})

app.get('/contact', (req, res)=>{
    res.send('Contact page')
})

app.get('/about', (req, res)=>{
    res.sendFile(getAbsolute('./templates/index.html'))
})

app.post('/register', (req, res)=>{
    res.send('User signed up successfully')
})

app.delete('/delete', (req, res)=>{
    res.send("User is deleted")
})

app.all('*', (req, res)=>{
    res.status(404).send('Oops page not found')
})

app.listen(5000, ()=>{
    console.log("Sever listening on port 5000")
})


