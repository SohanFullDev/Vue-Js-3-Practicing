const { createApp} = Vue;

createApp({
    data(){
        return {
            
             numberOne: 0,
             numberTwo: 0,

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

