<template>
  <header>
    <h1>Projects</h1>
  </header>
  <div class="wrapper">
    <Card
      :imageUrl="'public/sprinter.png'"
      :imageAltText="'Sprinter screenshot'"
      :projectName="'Sprinter'"
      :projectDescription="'A project and employee management application built in React with a Mongo database.'"
      :gitLink="'https://github.com/mengyue-z/Sprinter-React'"
      :demoLink="'https://vibrant-pasteur-087033.netlify.app/'"
    />
    <Card
      :imageUrl="'public/google-book.png'"
      :imageAltText="'google book screenshot'"
      :projectName="'Google Book Search'"
      :projectDescription="'This is a React-based Google Books Search app. Users can search books with Google Books API and save them for future reference.'"
      :gitLink="'https://github.com/mengyue-z/Google-Books-Search'"
      :demoLink="'https://salty-headland-20840.herokuapp.com/'"
    />
    <Card
      :imageUrl="'public/well-finder.png'"
      :imageAltText="'Wellness Place Finder screenshot'"
      :projectName="'Wellness Place Finder'"
      :projectDescription="'A project and employee management application built in React with a Mongo database.'"
      :gitLink="'https://github.com/mengyue-z/Wellness-Place-Finder'"
      :demoLink="'https://mengyue-z.github.io/Wellness-Place-Finder'"
    />
    <Card
      :imageUrl="'public/weather.jpeg'"
      :imageAltText="'Weather Dashboard screenshot'"
      :projectName="'Weather Dashboard'"
      :projectDescription="'This is an application that users can get weather information for different cities all over the world.Once users search for a city, the current weather and 5-day forecast will be displayed.'"
      :gitLink="'https://github.com/mengyue-z/weather-dashboard'"
      :demoLink="'https://mengyue-z.github.io/weather-dashboard/'"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
header {
  margin: 20px;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  flex: 1 1 150px;
  margin: 20px;
  gap: 1rem;
}

@media screen and (max-width: 900px) {
  .wrapper {
    display: block;
  }
  .card {
    width: 80%;
  }
}
</style>
