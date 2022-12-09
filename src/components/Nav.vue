<template>
    <nav class = "nav-bar">
        <router-link to="/">About Me</router-link>
        <router-link to="/carrot">About Carrot</router-link>
        <router-link to="/gallery">My Gallery</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/contact">Contact Me</router-link>
    </nav>
</template>

<style>
.nav-bar{
    margin: 0px;
    overflow: hidden;
    background-color: #BBBFCA;
}

.nav-bar a {
    float: left;
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
  
.nav-bar a:hover {
    background-color: #ddd;
    color: black;
}
  
.nav-bar a.active {
    background-color: #ddd;
    color: white;
}

@media screen and (max-width: 600px) {
    .nav-bar a {
      float: none;
      width: 100%;
    }
}
</style>