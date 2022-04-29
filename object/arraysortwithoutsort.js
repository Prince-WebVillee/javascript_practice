let arr=[3,1,2,6,7,9]
for(let i=0;i<arr.length-1;i++){


    if(arr[i]>arr[i+1]){

        let temp=arr[i];
        arr[i]=arr[i+1]
        arr[i+1]=temp
        i=-1
        
    }
}

console.log(arr)