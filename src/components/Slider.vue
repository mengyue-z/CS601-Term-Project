<template>
  <div class="slider-container">
    <img :src="currentImage" />
    <button id="btn-prev" @click="prevImage">Prev</button>
    <button id="btn-next" @click="nextImage">Next</button>
  </div>
</template>
  
  <script>
export default {
  name: "ImageSlider",
  data() {
    return {
      currentIndex: 0,
      images: [
        "image1.png",
        "image2.png",
        "image3.png",
        "image4.png",
        "image5.png",
        "image6.png",
        "image7.png",
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

  <style scoped>
.slider-container {
  position: relative;
  display: inline-block;
  width: 70%;
  height: 400px;
}

.slider-container img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
}

.slider-container button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5em 1em;
  background: white;
  border: none;
  font-size: 1em;
  cursor: pointer;
}

.slider-container button:focus {
  outline: none;
}

#btn-prev {
  left: 1em;
}

#btn-next {
  right: 1em;
}

@media only screen and (max-width: 1150px) {
  .slider-container {
    width: 100%;
    margin: 0 !important;
    height: 400px;
  }

  .slider-container img {
    max-height: 100%;
    max-width: 100%;
  }

  .slider-container button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5em 1em;
    background: white;
    border: none;
    font-size: 1em;
    cursor: pointer;
  }
}

@media only screen and (max-width: 750px) {
  .slider-container {
    width: 100%;
    margin: 0 !important;
    height: 400px;
  }

  .slider-container img {
    max-height: 100%;
    max-width: 100%;
  }

  .slider-container button {
    position: absolute;
    margin-top: 20px;
    top: 100%;
    transform: translateY(-50%);
    padding: 0.5em 1em;
    background: white;
    border: none;
    font-size: 1em;
    cursor: pointer;
  }
}
</style>
  