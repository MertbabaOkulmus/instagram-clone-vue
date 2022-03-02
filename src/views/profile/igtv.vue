<template>
  <div class="home">
    <CustomText :tag="'h1'"><h1>Profile IGTV</h1></CustomText>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText.vue";
export default {
  name: "ProfileIGTV",
  components: {
    CustomText,
  },
};
</script>
