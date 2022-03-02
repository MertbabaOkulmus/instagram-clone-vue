<template>
  <div>
    <div class="home"><h1>Home</h1></div>
    <CustomText class="a3 xxsmall"> Merhaba Dünya </CustomText>
    <CustomText :tag="'h1'" class="a1 normal"> Merhaba Dünya </CustomText>
    <CustomText :tag="'button'" class="a2 xsmall"> Merhaba Dünya </CustomText>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText.vue";
export default {
  name: "HomeView",
  components: {
    CustomText,
  },
};
</script>
<style scoped>
.a1 {
  color: rgb(var(--ba8));
}
.a2 {
  color: rgb(var(--b3f));
}
.a3 {
  color: rgb(var(--d19));
}
</style>
