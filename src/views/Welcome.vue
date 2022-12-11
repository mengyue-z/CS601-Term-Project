<template>
  <div class="hero-text">
    <h1>Welcome to my website!</h1>
    <p id="date"></p>
    <p id="weather"></p>
    <Quote />
    <a :href="'/about'"><button>Start to Explore</button></a>
  </div>
</template>

<style scoped>
header {
  text-align: center;
}

.hero-text {
  margin-top: 5%;
  text-align: center;
  position: absolute;
  z-index: 0;
  width: 100%;
}

.hero-text h1 {
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 4vw;
  color: #784d80;
  letter-spacing: 2px;
  margin-top: 0;
}

.hero-text button {
  background-color: #d6859f;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  color: white;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
</style>

<script>
import Quote from "../components/Quote.vue";

export default {
  components: {
    Quote,
  },
};
</script>

