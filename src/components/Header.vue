<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/">Instagram</router-link>
      <form action="">
        <input type="text" placeholder="Search" />
      </form>
      <nav>
        <router-link to="/">
          <Home />
          <HomeFill />
        </router-link>
        <router-link to="/profile">Profil</router-link>
        <router-link to="/explore">Explore</router-link>
        <router-link to="/direct">Direct</router-link>
      </nav>
    </Container>
  </header>
</template>
<script>
import Home from "@/icons/home.svg";
import HomeFill from "@/icons/home-fill.svg";
import Container from "@/components/Container.vue";
export default {
  name: "HeaderVue",
  components: {
    Container,
    Home,
    HomeFill,
  },
};
</script>
<style scoped>
.header-inner {
  background-color: aqua;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 20px;
}
</style>
