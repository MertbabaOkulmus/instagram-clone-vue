<template>
  <div class="home">
    <CustomText :tag="'h1'"><h1>Profile</h1></CustomText>
    <div>
      <router-link to="/profile">Post</router-link>
      <router-link to="/profile/igtv">IGTV</router-link>
      <router-link to="/profile/save">Save</router-link>
      <router-link to="/profile/tag">Tag</router-link>
    </div>
    <router-view />
    <!-- route da profil ın altında ki child'lar burada render olur -->
  </div>
</template>

<script>
import CustomText from "@/components/CustomText.vue";
export default {
  name: "ProfileVue",
  components: {
    CustomText,
  },
};
</script>
