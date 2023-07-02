const { createApp} = Vue;

const my_component = {
    template: "<h2> Hello from my first component</h2>"

};

const vue_1 = createApp({
    data(){
        return {};
    },
    components: {
        my_component,

    },
}).mount("#app_root");