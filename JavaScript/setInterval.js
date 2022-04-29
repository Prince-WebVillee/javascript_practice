let count =1;

var interval = setInterval(showDateTime,1000); 
function showDateTime() {
  let date=new Date()
  console.log(date)
  count++
  count==5?clearInterval(interval):""
}



