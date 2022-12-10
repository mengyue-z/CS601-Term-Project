<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: `https://mengyue-z.github.io/Portfolio/images/aboutme.jpeg`,
    },
    imageAltText: {
      type: String,
      default: `hidden card`,
    },
    projectName:{
        type: String,
        default: 'Project Name',
    },
    projectDescription:{
        type: String,
        default: 'Description',
    }
  },
};
</script>

<template>

<div class="card">
  <img :src="imageUrl" :alt="imageAltText" style="width:100%">
  <div class="container">
    <h2>{{projectName}}</h2> 
    <p>{{projectDescription}}</p> 
  </div>
</div>
</template>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

@media maxWidth {
    
}
</style>