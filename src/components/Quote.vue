<template>
  <div class="dashboard">
    <p id="quote"></p>
    <p id="author"></p>
  </div>
</template>

<script>
const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
export default {
  methods: {
    getQuote(url) {
      //fetch request
      fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "I9a/stpzwXfS9MOl6fRnVA==BRAEEZINQ3kUlPuY",
        },
      })
        //checking response status
        .then((response) => {
          console.log(response.status);
          return response.json();
        })
        //process returned data and print to page
        .then((data) => {
          console.log(data);
          let quote = data[0].quote;
          let author = data[0].author;
          let quoteText = document.createTextNode('"' + quote + '"');
          let authorName = document.createTextNode("-" + author);
          document.getElementById("quote").append(quoteText);
          document.getElementById("author").append(authorName);
        })
        .catch((error) => {
          console.log(error);
          //print some error message for users
          let errorMessage = document.createTextNode(
            "Sorry there is some problem generating the quote, please refresh the page and try again."
          );
          document.getElementById("quote").append(errorMessage);
        });
    },
  },
  beforeMount() {
    this.getQuote(url);
  },
};
</script>

<style scoped>
.dashboard {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5vmax;
  color: #784d80;
  letter-spacing: 2px;
  margin: 20px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
</style>