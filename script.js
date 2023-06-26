const { createApp} = Vue;

createApp({
    data(){
        return {
          products: [
            {
                title: "Symphony Phone",
                description: "This is a very cool shoes with a cool color",
                price: "50$",
                brands: "Adidass",
                img: './img/pic01.jpg',
                id: 1,

            },
            {
                title: "Samsung Mobile",
                description: "This is a Samsung Mobile with a cool color",
                price: "500$",
                brands: "Samsung",
                img: './img/pic02.png',
                id: 2,

            },
            {
                title: "Apple Mobile",
                description: "This is a Apple Mobile with a cool color",
                price: "150$",
                brands: "Apple",
                img: './img/pic03.jpg',
                id: 3,

            },
            {
                title: "Xiami Mobile",
                description: "This is a Xiami Mobile with a cool color",
                price: "150$",
                brands: "Xiami",
                img: './img/pic04.jpg',
                id: 3,

            },

          ],
                

         };
    },

}).mount("#app-root");

