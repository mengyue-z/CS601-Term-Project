<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<template>
  <header>
    <Nav />
  </header>
  <main>
    <router-view>
  </router-view>
  </main>
</template>

<style>
</style>
