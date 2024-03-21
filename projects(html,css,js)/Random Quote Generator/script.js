const apiURL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(apiURL) {
  const response = await fetch(apiURL);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote();
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=",
    quote.innerHTML,
    "----by",
    author.innerHTML,
    "tweet window",
    "height=500,width=800"
  );
}
