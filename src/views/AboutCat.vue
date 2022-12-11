<template>
  <header>
    <h1>About Carrot</h1>
  </header>
  <article>
    <p>Hi, This is Carrot.</p>
    <p>
      I have lived with Mengyue for 4 years without paying rent. She feeds me
      and in return, I destroy her furniture and scratch her carpet. I enjoy
      supervising and accompanying her when she is working by lying on her
      keyboard.
    </p>
    <p>
      She also creates a TikTok account for me and here is one of my popular
      videos.
    </p>
    <video id="cat-video" controls>
      <source src="../assets/cat.mp4" type="video/mp4" />
    </video>
  </article>
</template>

<style scoped>
header {
  margin: 20px;
}
article {
  margin: 20px;
}

#cat-video {
    width:350px;
}

@media screen and (max-width: 600px) {
  #cat-video {
    width: 200px;
  }
}
</style>