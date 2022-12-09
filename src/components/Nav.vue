<template>
    <nav class = "nav-bar">
        <a href="index.html">About Me</a>
        <a href="carrot.html">About Carrot</a>
        <a href="gallery.html">My Gallery</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="contact.html">Contact</a>
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
</style>