let Car = function(model)
{
this.model=model

}

Car.prototype.getModel=function(){

    return this.model;
}

let car1=new Car("Toyota")
console.log(car1.getModel())