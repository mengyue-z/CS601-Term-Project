<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: `https://mengyue-z.github.io/Portfolio/images/aboutme.jpeg`,
    },
    gitLink: {
      type: String,
      default: `https://github.com/mengyue-z`,
    },
    demoLink: {
      type: String,
      default: `https://github.com/mengyue-z`,
    },
    imageAltText: {
      type: String,
      default: `hidden card`,
    },
    projectName: {
      type: String,
      default: "Project Name",
    },
    projectDescription: {
      type: String,
      default: "Description",
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="imageUrl" :alt="imageAltText" style="width: 100%" />
    <div class="container">
      <h2>{{ projectName }}</h2>
      <p>{{ projectDescription }}</p>
      <a :href="gitLink" target="blank"><button>Github</button></a>
      <a :href="demoLink" target="blank"><button>Demo</button></a>
    </div>
  </div>
</template>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50%;
  background-color: #f4f4f2;
  font-family: "Montserrat", sans-serif;
}

.card h2 {
  color: #808db1;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 20px 16px;
}

button {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
  text-align: center;
  padding: 0.375rem;
  margin-right: 20px;
}
</style>