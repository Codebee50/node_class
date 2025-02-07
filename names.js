const config = {
    name: "Kyrian",
    age: 50,
    logLocation: ()=>{
        console.log('I am at nanocodes')
    }
}

const {name:guy, age, logLocation} = config
console.log(guy)
console.log(age)

logLocation()
