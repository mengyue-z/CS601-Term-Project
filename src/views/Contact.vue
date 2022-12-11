<template>
  <header>
    <h1>Contact Me</h1>
  </header>

  <main class="contact-info">
    <img src="../assets/phone.jpg" alt="phone" width="240" />
    <p>Name: Mengyue Zhang</p>
    <p>Email: mengyue.z@outlook.com</p>
    <a
      href="https://www.linkedin.com/in/mengyue-zhang-71501913b/"
      target="blank"
      ><img class="icons" :src="'src/assets/linkedin.png'" alt="linkedin icon"
    /></a>
    <a class="icons" href="https://github.com/mengyue-z" target="blank"
      ><img class="icons" :src="'src/assets/github.png'" alt="github icon"
    /></a>
    <a
      :href="'https://drive.google.com/file/d/1zxjciE4sE_cicu0VZU4fhcCvkNTY-aGR/view?usp=sharing'"
      target="blank"
      ><button >View My Resume</button></a
    >
  </main>
</template>

<style scoped>
header {
  margin: 20px;
}
main {
  margin: 20px;
}
.icons {
  width: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
}

a:link {
    text-decoration: none;
}
button {
    text-decoration: none;
    display: block;
    cursor:pointer;
    text-align: center;
    padding:0.375rem;
}
</style>

<script>
import ContactCard from "../components/ContactCard.vue";

export default {
  components: {
    ContactCard,
  },
};
</script>
