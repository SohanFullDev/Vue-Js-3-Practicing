const { createApp } = Vue;

const vue_1 = createApp({
    data(){
        return {
            age: 10,
         };
    },
    methods:{
        checkRefs(){
          //  console.log(this.$refs);
           // console.log(this.$refs.myInput.value);
           this.age = this.$refs.myInput.value;
        },
    },
}).mount("#app_root");