//Custom  forEach function Returns value in Uppercase

// Array.prototype.myForEach=function(callback){

// for(var i=0;i<this.length;i++){

//     callback(this[i].toUpperCase(),i,this)
// }

// }

// var arr=["avengers","superman","ironman"]
// arr.myForEach(item=>console.log(item))

/********************************************************************** */

//Custom map Function

// Array.prototype.myMap = function (callback) {
//   var arr = [];
//   for (var i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i, this));
//   }

//   return arr;
// };

// let array = [1, 2, 3, 4, 5, 6];

// let result = array.myMap((item) => item ** 3);

// console.log(result);

/************************************************************************* */

//Custom Filter function return values in Descending order

Array.prototype.myFilter = function (callback) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr.reverse();
};

let array = [1, 2, 3, 4, 5];

let result = array.myFilter((item) => item > 1);
console.log(result);
