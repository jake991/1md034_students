function  menuItem(name, ingreds, kcal, allergy, image){
    this.name=name;
    this.ingreds=ingreds;
    this.kcal=kcal;
    this.allergy=allergy;
    this.image=image;

    this.getNameAndKcal = function(){
        return this.name + " " + this.kcal + " Calories";
    }
    
    this.getAllergy = function(){
    		return this.allergy;
    }
  
}


let burger1 = new menuItem("Cheese and Bacon Burger", "Contains: cheese, bacon, meet and fries.", 923, "contains gluten.", "https://i1.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/baconbluecheeseburger.jpg?resize=700%2C%20466&ssl=1");

let burger2 = new menuItem("Umami Burger", "Contains: cheese, bacon, meet and fries.", 923, "contains gluten.", "https://mealhack.com/wp-content/uploads/2014/09/umami-dusted-burger_0008-680x453.jpg");

let burger3 = new menuItem("Vegge Burger","Contains: flafel and fries.",700, null, "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/master/pass/ultimate-veggie-burger.jpg");

let burger4 = new menuItem("American Stack", "Contains: ribs with BBQ sauce.", 950, null, "https://i.pinimg.com/originals/3b/af/2c/3baf2c99ed5978491503248ac505c989.jpg");

let burger5 = new menuItem("Chorizo Burger", "Contains: Chorizo sausages.", 940, null, "https://www.kitchenkonfidence.com/wp-content/uploads/2015/08/Chorizo-Cheddar-Burger.jpg");

var burgers = [burger1, burger2, burger3, burger4, burger5];

for(let burger of  burgers){
let par = document.createElement('p');
par.appendChild(document.createTextNode(burger.getNameAndKcal()));
if(burger.getAllergy() != null){
par.appendChild(document.createTextNode(" " + burger.getAllergy()));
}
document.getElementById('myID').appendChild(par);
}
