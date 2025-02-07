//callback functions
const fetchGreeting = ()=>{
    return "Hello Kyrian"
}

const greetUser=(name, greetingFunction) =>{
    console.log(`${greetingFunction()} you are welcome to our node app`)
}

greetUser("Kyrian", ()=>{
    return "Hello kyrian"
})

