function addPrice(amount){
with(this){


    price=amount
}

}



function book(name,author){


    this.name=name;
    this.author=author;
    this.price=0;
    this.addPrice =addPrice;



}


let mybook=new book ("Javascript","Brenden Eich")
mybook.addPrice("$40")

