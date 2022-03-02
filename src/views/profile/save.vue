<template>
  <div class="home">
    <CustomText :tag="'h1'"><h1>Profile Save</h1></CustomText>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText.vue";
export default {
  name: "ProfileSave",
  components: {
    CustomText,
  },
};
</script>
