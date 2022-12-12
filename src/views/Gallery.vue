<template>
  <header>
    <h1>Photo Gallery</h1>
  </header>
  <div class="paragraph">
    <p>
      I am a passionate traveler. I love exploring new places and experiencing
      different cultures. Over the years, I have had the opportunity to visit
      many amazing destinations around the world, from the bustling cities of
      Europe to the stunning beaches of the Caribbean. I also enjoy trying new
      foods and trying my hand at local traditions and customs.
    </p>
    <p>Check out some of my favorite photos around the world!</p>
  </div>
  <Slider class="slideshow-container" />
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  components: {
    Slider,
  },
};
</script>

<style scoped>
header {
  margin: 20px;
}
.slideshow-container {
  margin: 20px;
}

.paragraph {
  margin: 20px;
  font-family: "Montserrat", sans-serif;
  width: 70%;
}
</style>