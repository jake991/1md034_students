'use strict';
const socket = io();
const vm = new Vue({
    el: '#main',
    data: {

        local_object: {
            details:{
                x: 0,
                y: 0,
            }
        },

        orderId: 0,

        orderItems: [],
        
        orders: {},
        
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
        customerInfo: [],
    },
    
    methods: {
        getClicked: function (){
            this.clicked = true;

            this.customerInfo = [];
            this.customerInfo.push("Full name: " + this.fname);
            this.customerInfo.push("Email: " + this.email);
            
            var radio = document.getElementsByName("gender");
            var leng = radio.length;
            this.gender_1 = null;
            this.gender_2 = null;
            this.gender_3 = null;
            this.gender_4 = null;
            for(var i = 0; i<leng; ++i){
                if(radio[i].checked){
                    switch (i){
                    case 0:
                        this.gender_1 = this.gender1;
                        this.customerInfo.push( this.gender_1);
                        break;
                    case 1:
                        this.gender_2 = this.gender2;
                        this.customerInfo.push( this.gender_2);
                        break;
                    case 2:
                        this.gender_3 = this.gender3;
                        this.customerInfo.push( this.gender_3);
                        break;
                    case 3:
                        this.gender_4 = this.gender4;
                        this.customerInfo.push( this.gender_4);
                        break;

                    }
                }
            }
            
            var checkboxes = document.getElementsByName("check");
            var len = checkboxes.length;
            this.burger1 = null;
            this.burger2 = null;
            this.burger3 = null;
            this.burger4 = null;
            this.burger5 = null;
            this.orderItems = [];
            for(var i = 0; i<len; ++i){
                if(checkboxes[i].checked){
                    switch (i){
                    case 0:
                        this.burger1 = this.food[0].name;
                        this.orderItems.push(this.burger1);
                        break;
                    case 1:
                        this.burger2 = this.food[1].name;
                        this.orderItems.push(this.burger2);
                        break;
                    case 2:
                        this.burger3 = this.food[2].name;
                        this.orderItems.push(this.burger3);
                        break;
                    case 3:
                        this.burger4 = this.food[3].name;
                        this.orderItems.push(this.burger4);
                        break;
                    case 4:
                        this.burger5 = this.food[4].name;
                        this.orderItems.push(this.burger5);
                        break;

                    }
                }
            }
            
        },

        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            // let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
            //     return Math.max(last, next);
            // }, 0);
            // return lastOrder + 1;
            this.orderId += 1;
            return this.orderId;
        },
        addOrder: function() {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: this.local_object.details.x,
                    y: this.local_object.details.y,
                },
                orderItems: this.orderItems,
                customerInfo: this.customerInfo,
            });
        },

        displayOrder: function(event) {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            
            this.local_object.details.x =   event.clientX - 10 - offset.x;
            this.local_object.details.y =   event.clientY - 10 - offset.y;
        },

    }    

})
