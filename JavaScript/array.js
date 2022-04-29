let arr =[1,1,1,1,2,2,2,3,3,3,5,6]
let count=[]
for(let value of arr ){

count[value]=count[value]?count[value]+1:1;

}

console.log(count[5])