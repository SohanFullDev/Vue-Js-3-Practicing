<template>
  <div class="my-content">
    <ul>
      <li v-for="(student, i) in st" :key="i">
        {{ student }}
      </li>
    </ul>
    <button @click="deleteSt">Change Ref</button>
  </div>
</template>
<script>
export default {
  props: ["st"],
  data() {
    return {
      myStudents: this.st,
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
