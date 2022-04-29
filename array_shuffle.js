function show(a) {      
    var len = a.length;
    var t, index;  
    while (len > 0) {  
       index = Math.floor(Math.random() * len);  
       len--;  
       t = a[len];          
       a[len] = a[index];          
       a[index] = t;      
    }    
    return a;    
 }        
 var a = [99, 150, 299, 340, 390, 450, 590, 600];
 console.log(show(a))