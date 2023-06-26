const { createApp} = Vue;

createApp({
    data(){
        return {
            
            name: "Sohan",
            students: [
                {
                    name: "Sohan",
                    id: 1,
                    age: 12,
                },
                {
                    name: "Sujan",
                    id: 2,
                    age: 25,
                },
                {
                    name: "Salman",
                    id: 3,
                    age: 27,
                }

            ],

         };
    },

}).mount("#app-root");

