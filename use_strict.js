// 1. Can not use undefined variables

"use strict"


// x=1;
// console.log(x)

/***************************************************** */

// 2. Can not use reserved keywords as variable names

// var for=1;

/***************************************************** */

// 3. Can not use Duplicated Arguments in functions

// function Sum(val, val){return val + val };
// console.log(Sum(10,20))

/***************************************************** */

// 4. Can not use Duplicate key in Objects

// var myObj = { myProp: 100, myProp:"checking Use Strict" };

// console.log(myObj)


/***************************************************** */

// 5. Can not Assign values to Read Only property

// let arr=[1,2,3,4,5]
// console.log(arr.length)
// arr.length=10 
// console.log(arr.length)

/***************************************************** */

// 6. Can not Modify Argument Objects

// function Sum(val1, val2){
//     arguments = 100; // error
//     console.log(arguments)
// }

// Sum(20,30)

/***************************************************** */

// 7. Can not use With Statement



// with (Math){
//     x = abs(200.234, 2); // error
//     console.log(x)
// };

/***************************************************** */

// 8. can not use eval to create a variable

// let result = eval("var a=2")
// console.log(a)

/***************************************************** */
