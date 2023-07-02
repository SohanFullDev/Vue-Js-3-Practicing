const { createApp} = Vue;

const my_component = {
    template: `<h2> Hello from my first component</h2>
        <h3>My Name is {{ name }} </h3>
        <h3>My Age is {{ age }} </h3>
    `,
    data(){
        return {
            name: "Sohan",
            age: 28,
        };
    },

};

const vue_1 = createApp({
    data(){
        return {};
    },
    components: {
        my_component,

    },
}).mount("#app_root");