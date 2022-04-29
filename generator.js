
function* print(){


    console.log("print function")
}
function* sequenceGenerator(a,b){

yield a+b
yield a-b
yield a*b
yield a*b+b
yield a+b*a+b
yield* print()
return  4;

}


let sequence = sequenceGenerator(10,20)
let one = sequence.next()
let two = sequence.next()
let three = sequence.next()
let four =sequence.next()
let five =sequence.next()
let six =sequence.next()
let seven =sequence.next()

console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(five)
console.log(six)
console.log(seven)
