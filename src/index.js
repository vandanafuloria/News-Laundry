import "./styles.css";
const primaryLink = document.getElementById("primary-a");
const primaryTitle = document.getElementById("primary-title");
const primaryImg = document.getElementById("primary-img");
const primaryDesc = document.getElementById("primary-desc");
/********************************************************************** */

const secLink = document.getElementById("sec-a");
const secTitle = document.getElementById("sec-title");
const secImg = document.getElementById("sec-img");
const secDesc = document.getElementById("sec-desc");

function addToDom(news) {
  console.log(news.articles[0]);
  primaryLink.href = news.articles[0].url;
  primaryTitle.textContent = news.articles[0].title;
  primaryImg.src = news.articles[0].urlToImage;
  console.log(primaryImg);
  primaryDesc.textContent = news.articles[0].description;
  /*********************************************************/

  secLink.href = news.articles[1].url;
  secTitle.textContent = news.articles[1].title;
  secImg.src = news.articles[1].urlToImage;

  secDesc.textContent = news.articles[1].description;
}

function getHeadlines() {
  const country = "india";
  const keyword = "science";
  const x = fetch(
    `https://newsapi.org/v2/everything?q=${keyword} + ${country}&language=en&sortBy=publishedAt&apiKey=d3b4aa55576c4658ab70b936ed107197`
  )
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      addToDom(response);
      console.log(response);
    })
    .catch((err) => {
      console.log("error occured");
    });
}

function getLatestNews() {}

getHeadlines();
