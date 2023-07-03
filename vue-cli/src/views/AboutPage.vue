<template>
  <div class="about">
    <h2>This is about page</h2>
    <MyCont :st="students" />
  </div>
</template>
<script>
import MyCont from "@/components/MyContent.vue";
export default {
  components: {
    MyCont,
  },
  data() {
    return {
      students: ["Rubel", "Kamal", "Jamal", "Roman", "Suman"],
    };
  },
};
</script>
