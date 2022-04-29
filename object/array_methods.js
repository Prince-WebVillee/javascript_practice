//concat()
let movies = ["spiderman", "ironman"]
let favouriteMovies = ["avengers", "justice league"]
let arr = []
let result = movies.concat(favouriteMovies)
//console.log(result)
/*******************************************************************/


//copyWithin()
//array.copyWithin(target, start, end)

const fruits = ["Banana", "grapes", "Orange", "Apple", "Mango", "pear", "strawberry"];
//console.log(fruits)
fruits.copyWithin(3, 1, 2);
//console.log(fruits)


/*******************************************************************/



//entries()

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();
let result1=0;
for (let x of f) {
    result1 = x;
    //console.log(result1)
}


/*******************************************************************/


//every()
const arr3 = [1, 3, 5, 7, 9, 11, 12]
let result3 = arr3.every(item => item > 0)
//console.log(result3)

/*******************************************************************/



//some()
const arr4 = [1, 3, 5, 7, 9, 11, 12]
let result4 = arr3.some(item => item < 2)
//console.log(result4)

/*******************************************************************/



//fill()

const arr5 = new Array(5)
let result5 = arr5.fill(20)
//console.log(result5)

/*******************************************************************/



//filter()

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result6 = arr6.filter(item => item > 5)
//console.log(result6)

/*******************************************************************/

//find()


const arr7 = [1, 2, 3, 4, , 5, 6, 7, 8, 9]
let result7 = arr7.find(item => item > 5)
//console.log(result7)

/*******************************************************************/

//findIndex()

const arr8 = [1, 2, 3, 4, 5, 6, 7, 8]
let result8 = arr8.findIndex(item => item > 4)
//console.log(result8)

/*******************************************************************/


//forEach()

const arr9 = [1, 2, 3, , 4, 5, 6, 7, 8,10]
let result9 = arr9.forEach(item => {
    //console.log(item)
})
//console.log(result9)


/*******************************************************************/

//Array.from()

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8]
let result10 = Array.from("ABCDEF")
//console.log(result10)

/*******************************************************************/


//includes()

const arr11=[1, 2, 3, 4, 5, 6, 7, 8,9]
let result11=arr11.includes(2)
//console.log(result11)


/*******************************************************************/


//indexOf()

const arr12=[1, 2, 3, 4, 5, 6, 7, 8, 9]
let result12=arr12.indexOf(2)
//console.log(result12)


/*******************************************************************/


//Array.isArray()

const arr13=[1, 2, 3, 4, 5, 6, 7, 8]
let result13=Array.isArray(arr13)
//console.log(result13)


/*******************************************************************/


//join()

const arr14=[1, 2, 3, 4, 5, 6, 7, 8]
let result14=arr14.join(" and ")
//console.log(result14)

/*******************************************************************/


//lastIndexOf()


const arr15=[1, 2, 3,2, 4, 5, 6, 7, 8]
let result15=arr15.lastIndexOf(2)
//console.log(result15)

/*******************************************************************/

//map()


const arr16=[1,2, 3, 4, 5, 6, 7, 8]
let result16=arr16.map(item=>item**3)
//console.log(result16)



/*******************************************************************/


//reduce()

const arr17=[200,25,50]
let result17=arr17.reduce((prev,curr)=>{

    return prev+curr
})
//console.log(result17)

//reduceRight()

const arr18=[200,25,50]
let result18=arr18.reduceRight((prev,curr)=>{

    return prev-curr
})

//console.log(result18)


/*******************************************************************/


//reverse()

const arr19=[1, 2, 3, 4, 5, 6, 7, 8]
let result19=arr19.reverse()
//console.log(result19)


/*******************************************************************/

//splice()


const arr20=[23,56,78,90]
let result20=arr20.splice(0,1)
//console.log(result20)

const arr21=["dipesh","kunal","prince","dheeraj","rahul"]
arr21.splice(1,2,"hello","hello1")
//console.log(arr21)


/*******************************************************************/

//slice()

const arr22=[23,56,78,90]
let result22=arr22.slice(0,2)
//console.log(result22)


/*******************************************************************/


//toString()


const arr23=[23,56,78,90]
let result23=arr23.toString()
//console.log(result23)

const string = ["avengers","spiderman","justice league"]
let value=string.toString()
//console.log(value)

/*******************************************************************/

//valueOf()

const arr24=["avengers","spiderman","justice league"]
let result24=arr24.valueOf()
//console.log(result24)



const favourite=["avengers","spiderman","justice league"]
let movies23 = [...favourite,"batman"]

console.log(movies23)