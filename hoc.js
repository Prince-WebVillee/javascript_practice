function isAdult(person){

return person.age>=18
}

let people=[


    {name:"john",age:25},
    {name:"charlie",age:17},
    {name:"stefen",age:19},
    {name:"katherine",age:21},
]

let peopleAdult = people.filter(isAdult)
console.log(peopleAdult)
/******************************************************************** */

//method 2

let people=[


    {name:"john",age:25},
    {name:"charlie",age:17},
    {name:"stefen",age:19},
    {name:"katherine",age:21},
]

let peopleOver18=people.filter(person=>person.age>18)
console.log(peopleOver18)

/*********************************************************************** */


