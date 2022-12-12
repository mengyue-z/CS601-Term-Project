<template>
  <div class="contact-card">
    <h2>Contact Me</h2>
    <div class="card-content">
      <p>Name: Mengyue Zhang</p>
      <p>Email: mengyue.z@outlook.com</p>
      <a
        href="https://www.linkedin.com/in/mengyue-zhang-71501913b/"
        target="blank"
        ><img
          class="icons"
          :src="'public/linkedin.png'"
          alt="linkedin icon"
      /></a>
      <a class="icons" href="https://github.com/mengyue-z" target="blank"
        ><img class="icons" :src="'public/github.png'" alt="github icon"
      /></a>
    </div>
    <button
      href="https://drive.google.com/file/d/1zxjciE4sE_cicu0VZU4fhcCvkNTY-aGR/view?usp=sharing"
      target="_blank"
    >
      View My Resume
    </button>
  </div>
</template>

<style scoped>
.contact-card {
  margin: 20px;
  padding: 10px;
  background-color: #f4f4f2;
  width: 20%;
  text-align: center;
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
  cursor: pointer;
  text-align: center;
  padding: 0.375rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
