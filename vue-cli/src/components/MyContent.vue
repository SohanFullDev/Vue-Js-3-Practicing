<template>
  <div class="my-content">
    <ul>
      <li v-for="(student, i) in st" :key="i">
        {{ student }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // props: ["students"],
  props: ["st"],

  /*
  data() {
    return {
      students: ["Sohan", "Sujan", "Bishu"],
    };
  },*/
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
