const data={


    a:24
}

Object.freeze(data)

 data.name="xyz"
data.a=25

console.log(data)
console.log(Object.isFrozen(data))