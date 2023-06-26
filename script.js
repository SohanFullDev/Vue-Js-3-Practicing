const { createApp} = Vue;

createApp({
    data(){
        return {
          products: [
            {
                title: "Symphony Phone",
                description: "This is a very cool shoes with a cool color",
                price: "50$",
                brand: "Adidass",
                img: './img/pic01.jpg',
                colors: ["red", "green", "blue", "yellow"],
                id: 1,

            },
            {
                title: "Samsung Mobile",
                description: "This is a Samsung Mobile with a cool color",
                price: "500$",
                brand: "Samsung",
                img: './img/pic02.png',
                colors: ["yellow", "red", "green", "purple", ],
                id: 2,

            },
            {
                title: "Apple Mobile",
                description: "This is a Apple Mobile with a cool color",
                price: "150$",
                brand: "Apple",
                img: './img/pic03.jpg',
                colors: ["blue","red", "orange",  "yellow"],
                id: 3,

            },
            {
                title: "Xiami Mobile",
                description: "This is a Xiami Mobile with a cool color",
                price: "150$",
                brand: "Xiami",
                img: './img/pic04.jpg',
                colors: ["green", "black",  "blue", "yellow"],
                id: 4,

            },

          ],
                

         };
    },

}).mount("#app-root");

