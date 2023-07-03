<template>
  <div class="my-main">
    <MyHeading />

    <h2>This is my main page.</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      tenetur? Enim, quae fuga facere maxime dignissimos dolore nihil incidunt
      dolor non unde iste odit, labore tenetur ipsam earum amet cum?
    </p>
  </div>
</template>
<script>
import MyHeading from "@/components/MyHeading.vue";
export default {
  name: "MyMain",
  components: {
    MyHeading,
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
