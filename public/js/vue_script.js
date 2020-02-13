'use strict';
const socket = io();
const vm = new Vue({
    el: '#main',
    data: {

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
    },
    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));

        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },
    
    methods: {
        getClicked: function (){
            this.clicked = true;
            radio = document.getElementsByName("gender");
            lene = radio.length;
            this.gender_1 = null;
            this.gender_2 = null;
            this.gender_3 = null;
            this.gender_4 = null;
            for(i = 0; i<lene; ++i){
                if(radio[i].checked){
                    switch (i){
                    case 0:
                        this.gender_1 = this.gender1;
                        break;
                    case 1:
                        this.gender_2 = this.gender2;
                        break;
                    case 2:
                        this.gender_3 = this.gender3;
                        break;
                    case 3:
                        this.gender_4 = this.gender4;
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
            
        },

        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: ['Beans', 'Curry'],
            });
        },

    }
    

})
