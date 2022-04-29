const person = {
  name: "john",
  age: 20,
  address: {
    address3: "indore",
    address2: "bhopal",
  },
};

let result = person.address?.address1 ?? "ujjain";
console.log(result);
