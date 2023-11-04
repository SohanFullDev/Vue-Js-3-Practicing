<template>
  <div class="my-content">
    <ul>
      <li v-for="(student, i) in myStudents" :key="i">
        {{ student }}
      </li>
    </ul>
    <button @click="deleteSt">Change Ref</button>
    <p>active is: {{ myActive }}</p>
    <button @click="($event) => (myActive = !myActive)">Change Prem</button>
  </div>
</template>
<script>
export default {
  // props: ["st", "isActive"],
  props: {
    st: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      myStudents: this.st,
      myActive: this.isActive,
    };
  },
  methods: {
    deleteSt() {
      this.myStudents.shift();
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
