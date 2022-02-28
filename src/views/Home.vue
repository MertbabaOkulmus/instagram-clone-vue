<template>
  <div class="home"><h1>Home</h1></div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
h1 {
  color: red;
  @media (--d) {
    color: blue;
  }
}
</style>
