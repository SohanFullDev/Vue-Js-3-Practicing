const { createApp} = Vue;

createApp({
    data(){
        return {
            
            title: "my_title",
            myColor:"",
        };
    },
methods: {},
computed: {
    numOneChange(){
        console.log("First function fired");
        return this.numberOne * 2;
    },
    numTwoChange(){
        console.log("Second function fired");
        return this.numberTwo + 10;
    },
},

}).mount("#app-root");

