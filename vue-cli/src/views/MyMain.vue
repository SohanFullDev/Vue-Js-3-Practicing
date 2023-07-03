<template>
  <div class="my-main">
    <h2>This is my main page.</h2>
    <MyCont :st="students" />
  </div>
</template>
<script>
import MyCont from "@/components/MyContent.vue";

export default {
  name: "MyMain",
  components: {
    MyCont,
  },
  data() {
    return {
      students: ["Brazil", "Argentina", "Panama"],
    };
  },
};
</script>
<style scoped lang="scss">
.my-main {
  h2 {
    color: red;
  }
  p {
    color: green;
  }
}
</style>
