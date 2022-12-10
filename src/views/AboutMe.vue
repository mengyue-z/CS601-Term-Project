<template>
    <article class="details">
            <header>
                <h2>About Me</h2>
            </header>
            <p> Hello, my name is Mengyue Zhang. </p>
            <p> I'm currently working as a Java Developer and attending school at Boston University in the meantime,
                pursuing a master's degree in software development.
                Before stepping into the tech field, I worked as a digital marketing specialist for about 3 years.
                I attended a full-stack web development coding boot camp at George Washington University in 2021 and
                started to feel very interested in coding.
                Then I decided to change my career path.
            </p>
            <p>Thanks for visiting my site! Please feel free to reach me at the contact page.</p>
            <img id = "my-pic" src="https://mengyue-z.github.io/Portfolio/images/aboutme.jpeg" alt="my photo in iceland">
    </article>
</template>

<style scoped>

article {
    margin:20px;
}

@media screen and (max-width: 600px) {
    #my-pic {width: 200px;}
}
</style>