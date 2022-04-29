//call
// let obj={num:3}

// let addnumbers= function(a,b,c){

//     return this.num+a+b+c


// }
// console.log(addnumbers.call(obj,10,20,30))

/*********************************************************  */

//apply

// let obj={num:3}

// let addnumbers= function(a,b,c){

//     return this.num+a+b+c


// }
// let arr=[1,2,3]
// console.log(addnumbers.apply(obj,arr))

/********************************************************** */
//bind

// let obj={num:3}

// let addnumbers= function(a,b,c){

//     return this.num+a+b+c


// }
// let result = addnumbers.bind(obj)
// console.log(result(1,2,3))


/************************************************************* */

//other example

//call bind and apply

let person = {
  name: 'john',
  age: 23,
  address: 'indore'
};

function print(state, country) {
  console.log(this.name, state, country);
}

let person1 = {
  name: 'stefen',
  age: 24,
  address: 'indore'
};

print.call(person, 'mp', 'india');
print.apply(person, ['mp', 'india']);
let bind = print.bind(person, 'mp', 'india');
bind();