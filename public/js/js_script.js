function  menuItem(name, ingreds, kcal, allergy, image){
    this.name=name;
    this.ingreds=ingreds;
    this.kcal=kcal;
    this.allergy=allergy;
    this.image=image;

    this.getName = function(){
        return this.name;
    }

    this.getIngreds = function(){
        return this.ingreds;
    }

    this.getKcal = function(){
        return this.kcal + " Calories";
    }

    this.getImage = function(){
        return this.image;
    }
    
    this.getAllergy = function(){
    		return this.allergy;
    }
    
}


let burger1 = new menuItem("Cheese and Bacon Burger", "Contains: cheese, bacon, meet and fries.", 923, "contains gluten.", "https://i1.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/baconbluecheeseburger.jpg?resize=700%2C%20466&ssl=1");

let burger2 = new menuItem("Umami Burger", "Contains: cheese, bacon, meet, umami and fries.", 923, "contains gluten.", "https://mealhack.com/wp-content/uploads/2014/09/umami-dusted-burger_0008-680x453.jpg");

let burger3 = new menuItem("Vegge Burger","Contains: flafel and fries.",700, null, "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/master/pass/ultimate-veggie-burger.jpg");

let burger4 = new menuItem("American Stack", "Contains: ribs with BBQ sauce.", 950, null, "https://i.pinimg.com/originals/3b/af/2c/3baf2c99ed5978491503248ac505c989.jpg");

let burger5 = new menuItem("Chorizo Burger", "Contains: Chorizo sausages.", 940, null, "https://www.kitchenkonfidence.com/wp-content/uploads/2015/08/Chorizo-Cheddar-Burger.jpg");

/*
var burgers = [burger1, burger2, burger3, burger4, burger5];

for(let burger of  burgers){
    let div = document.createElement('div');
    let heading = document.createElement('h3');
    heading.appendChild(document.createTextNode(burger.getName()));
    let image = document.createElement('img');
    image.src = burger.getImage();
    image.width = '200';
    image.length= '200';
    let list = document.createElement('ul');
    let item1 = document.createElement('li');
    let par1 = document.createElement('p');
    par1.appendChild(document.createTextNode(burger.getIngreds()));
    item1.appendChild(par1);
    list.appendChild(item1);
    let item2 = document.createElement('li');
    let par2 = document.createElement('p');
    par2.appendChild(document.createTextNode(burger.getKcal()));
    item2.appendChild(par2);
    list.appendChild(item2);
    if(burger.getAllergy() != null){
        let item3 = document.createElement('li');
        let par3 = document.createElement('p');
        par3.appendChild(document.createTextNode(burger.getAllergy()));
        item3.appendChild(par3);
        list.appendChild(item3);
    }
    div.appendChild(heading);
    div.appendChild(image);
    div.appendChild(list);
    document.getElementById('wrapperID').appendChild(div);
}

*/
