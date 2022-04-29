// const obj={

//   age:12
// }

// Object.preventExtensions(obj)
// delete obj.age
// console.log(obj)

// const data={

//   name:"harry"
// }

// Object.seal(data)
// data.name="john"
// data.age=12
// delete data.name
// console.log(data)

const data1 = {
  name: "stefen",
};

Object.freeze(data1);
data1.name = "john";
data1.age = 12;
delete data1.name;
console.log(data1);
