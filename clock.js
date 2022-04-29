const getTime=()=>{
  
    let date =new Date()
    console.log(date.toUTCString())
  }

  
  let result = setInterval(getTime,1000)