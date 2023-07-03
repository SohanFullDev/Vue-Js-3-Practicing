<template>
  <nav class="my-nav">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="links">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
    <div class="btns">
      <button style="margin-right: 10px">LOG IN</button>
      <button>SIGN UP</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "My Logo",
      links: ["Link One", "Link Two", "Link Three", "Link Four"],
    };
  },
};
</script>
<style>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: #d4d4d4;
  box-shadow: 0px 0px 9px -3px black;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}
img {
  width: 100px;
}
button {
  background-color: green;
  color: white;
  padding: 5px 10px;
}
</style>
