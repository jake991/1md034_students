const vm = new Vue({
    el: '#main',
    data: {
        width: 200,
        food,
        clicked: false,
        burger1: null,
        burger2: null,
        burger3: null,
        burger4: null,
        burger5: null,
        
        gender_1: null,
        gender_2: null,
        gender_3: null,
        gender_4: null,
        
        gender1: 'Gender: Male',
        gender2: 'Gender: Female',
        gender3: 'Gender: Other',
        gender4: 'Gender: Not specific',
        
        fname: "",
        email: "",
        street:"",
        house: "",
    },
    methods: {
        getClicked: function (){
            this.clicked = true;
            radio = document.getElementsByName("gender");
            console.log(radio);
            lene = radio.length;
            this.gender_1 = null;
            this.gender_2 = null;
            this.gender_3 = null;
            this.gender_4 = null;
            for(i = 0; i<lene; ++i){
                if(radio[i].checked){
                    console.log(i);
                    switch (i){
                    case 0:
                        this.gender_1 = this.gender1;
                        console.log(this.gender_4);
                        break;
                    case 1:
                        this.gender_2 = this.gender2;
                        console.log(this.gender_4);
                        break;
                    case 2:
                        this.gender_3 = this.gender3;
                        console.log(this.gender_4);
                        break;
                    case 3:
                        this.gender_4 = this.gender4;
                        console.log(this.gender_4);
                        break;

                    }
                }
            }
            
            checkboxes = document.getElementsByName("check");
            len = checkboxes.length;
            this.burger1 = null;
            this.burger2 = null;
            this.burger3 = null;
            this.burger4 = null;
            this.burger5 = null;
            for(i = 0; i<len; ++i){
                if(checkboxes[i].checked){
                    switch (i){
                    case 0:
                        this.burger1 = this.food[0].name;
                        break;
                    case 1:
                        this.burger2 = this.food[1].name;
                        break;
                    case 2:
                        this.burger3 = this.food[2].name;
                        break;
                    case 3:
                        this.burger4 = this.food[3].name;
                        break;
                    case 4:
                        this.burger5 = this.food[4].name;
                        break;

                    }
                }
            }
            
        }

    }
    

})
