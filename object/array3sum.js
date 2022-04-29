var list = [-25, -10, -7, -3, 2, 4, 8, 10, -4, 6, 1]

var arr1 = []
var resultArray = [];


const findSumZero = (list) => {

    for (let i = 0; i < list.length - 2; i++) {
        
        for (let j = i + 1; j < list.length - 1; j++) {
            console.count("loop2")
            for (let k = j + 1; k < list.length; k++) {
                if (list[i] + list[j] + list[k] === 0) {
                    arr1.push(list[i],list[j],list[k])

                        arr1.push(list[j]),

                        arr1.push(list[k])


console.count("loop3")
                }
            }
        }

    }
    return arr1

}


findSumZero(list)

arr1.map((item)=>{
    
    resultArray.push(arr1.splice(0,3))
    
})

console.log(resultArray);
