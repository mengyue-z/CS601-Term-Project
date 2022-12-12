<template>
  <header>
    <h1>About Carrot</h1>
  </header>
  <div class="wrapper">
    <article class="flex-item details">
      <p>Hi, This is Carrot.</p>
      <p>
        I love chasing toys, palying with strings and napping in sunny spots. My
        favorite food is treat with catnip. I'm also quite vocal and loves to
        meow for attention and to announce my presence.
      </p>
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
    </article>
    <div class="flex-item">
      <video id="cat-video" controls>
        <source :src="'public/cat.mp4'" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<style scoped>
header {
  margin: 20px;
}
article {
  margin-left: 20px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.flex-item {
  flex: 1 1 150px;
  margin: 20px;
  margin-top: 0px;
  gap: 1rem;
}
#cat-video {
  width: 350px;
}
.details {
  flex-grow: 4;
}
.details p {
  width: 80%;
}

@media screen and (max-width: 800px) {
  #cat-video {
    width: 200px;
  }
  .wrapper {
    display: block;
  }
}
</style>