/*let button = document.getElementById('order');
button.addEventListener('click', printToComLine);
button.addEventListener('click', getFormInfo);*/
/*function getFormInfo(){
    var fname = document.getElementById("fullname").value;
    var email = document.getElementById('email').value;
    var street = document.getElementById('street').value;
    var house = document.getElementById('house').value;
    var array = [fname, email, street, house];
    for(let object of array){
        console.log(object)
    }
    return array;
}*/
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
