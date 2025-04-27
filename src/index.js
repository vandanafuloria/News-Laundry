import "./styles.css";

const query = document.querySelector("#search");

const apiKey = "a7b56bc21d024766a297882099d87413";
const primaryLink = document.getElementById("primary-a");
const primaryTitle = document.getElementById("primary-title");
const primaryImg = document.getElementById("primary-img");
const primaryDesc = document.getElementById("primary-desc");
const authorPrimary = document.getElementById("primary-by");
const datePrimary = document.getElementById("primary-date");

/********************************************************************** */

const secLink = document.getElementById("sec-a");
const secTitle = document.getElementById("sec-title");
const secImg = document.getElementById("sec-img");
const secDesc = document.getElementById("sec-desc");

const authorSec = document.getElementById("secondry-by");
const dateSec = document.getElementById("secondry-date");
console.log(authorSec, dateSec, secDesc);

/************************************************************************** */
const latestNewsContainerEl = document.querySelector(".latest-news");
const trendingContainer = document.querySelector(".trending");
// latestNewsContainerEl.scrollIntoView({ behavior: "smooth" });

function addToDom(news) {
  for (let i = 1; i < 4; i++) {
    if (!news.articles[i].urlToImage) continue;
    const url = news.articles[i].url;
    if (url.includes("biztoc.com") || url.includes("english.khabarhub.com"))
      continue;

    primaryLink.href = news.articles[i - 1].url;
    primaryTitle.textContent = news.articles[i - 1].title;
    primaryImg.src = news.articles[i - 1].urlToImage;

    primaryDesc.textContent = news.articles[i - 1].description;
    authorPrimary.textContent = news.articles[i - 1].author;

    const date = news.articles[i - 1].publishedAt.split("T");
    datePrimary.textContent = date[0];

    /*********************************************************/

    secLink.href = news.articles[i].url;
    secTitle.textContent = news.articles[i].title;
    secImg.src = news.articles[i].urlToImage;

    secDesc.textContent = news.articles[i].description;

    authorSec.textContent = news.articles[i].author;

    const secDate = news.articles[i].publishedAt.split("T");
    dateSec.textContent = secDate[0];
  }
  /************************************************************** */
}

function MoveTosearchContent() {
  let keyword = document.getElementById("keyword");
  console.log(keyword);
  keyword.textContent = query.value;
  getLatestNews();
  latestNewsContainerEl.scrollIntoView({ behavior: "smooth" });
}

function getHeadlines() {
  const country = "india";
  let keyword = query.value;
  if (!keyword) keyword = "health";
  const url = `https://newsapi.org/v2/everything?q=${keyword} + ${country}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
  // const url = `https://newsapi.org/v2/everything?q=${keyword} + ${country}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
  const x = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      addToDom(response);
      console.log(response);
    })
    .catch((err) => {
      console.log("error occured", err);
    });
}

function addInformationToSkeleton(latest) {
  latestNewsContainerEl.replaceChildren();
  for (let i = 0; i < latest.articles.length; i++) {
    const newsBox = createSkeleton();
    // img setting
    if (!latest.articles[i].urlToImage) continue;
    const url = latest.articles[i].url;
    if (url.includes("biztoc.com")) continue;

    const img = newsBox.firstElementChild;
    img.src = latest.articles[i].urlToImage;
    if (img.src == null) continue;
    // link setting
    const link = newsBox.firstElementChild.nextSibling;
    link.href = latest.articles[i].url;
    // title setting;
    const h1 = link.firstChild;
    h1.textContent = latest.articles[i].title;
    // desc setting;
    const desc = newsBox.firstChild.nextSibling.nextSibling;
    desc.textContent = latest.articles[i].description;
    // setting details
    const details = desc.nextSibling;

    const date = latest.articles[i].publishedAt.split("T");
    details.firstChild.textContent = date[0];

    details.firstChild.nextSibling.textContent = latest.articles[i].author;

    latestNewsContainerEl.appendChild(newsBox);
  }
}

function createSkeleton() {
  const newsContainer = document.createElement("div");
  newsContainer.classList.add("news");

  const imgEl = document.createElement("img");
  /************************************************************** */
  const anchorEl = document.createElement("a");
  const headingEl = document.createElement("h1");
  anchorEl.appendChild(headingEl);
  /********************************************************** */
  const desc = document.createElement("p");
  desc.classList.add("m1");

  /*********************************************************************** */
  const detailContainer = document.createElement("div");
  detailContainer.classList.add("details");
  const p1 = document.createElement("p");

  const p2 = document.createElement("p");

  detailContainer.append(p1, p2);

  /****************************************************** */
  newsContainer.append(imgEl, anchorEl, desc, detailContainer);

  return newsContainer;
}

function getLatestNews() {
  let keyword = query.value;
  console.log(keyword);
  if (!keyword) keyword = "india";
  //const urlLatest = `https://newsapi.org/v2/everything?q=${keyword}&language=en&sortBy=publishedAt&pageSize=30&apiKey=${apiKey}`;//
  const urlLatest = `https://newsapi.org/v2/everything?q=india&language=hi&sortBy=publishedAt&apiKey=${apiKey}`;

  const latestNews = fetch(urlLatest)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((response) => {
      console.log(response);
      addInformationToSkeleton(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function trendingNewsToUi(trending) {
  for (let i = 0; i < 15; i++) {
    if (!trending.articles[i].urlToImage) continue;

    const url = trending.articles[i].url;
    if (url.includes("biztoc.com")) continue;

    const img = trending.articles[i].urlToImage;
    const aTag = trending.articles[i].url;
    const title = trending.articles[i].title;
    const desc = trending.articles[i].description;

    const divEl = document.createElement("div");
    divEl.classList.add("trend");
    const imgEl = document.createElement("img");
    const div2 = document.createElement("div");
    div2.classList.add("details");

    const a = document.createElement("a");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    div2.append(a, p);
    a.appendChild(h1);
    divEl.append(imgEl, div2);

    imgEl.src = img;
    a.href = aTag;
    h1.textContent = title;
    p.textContent = desc;

    trendingContainer.appendChild(divEl);

    /********************************************* */
  }
}

function getTrendingNews() {
  const urlTrending = `https://newsapi.org/v2/everything?q=trending&sortBy=popularity&apiKey=${apiKey}`;
  const trending = fetch(urlTrending)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((response) => {
      console.log(response);
      trendingNewsToUi(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
/************************************************** */

getLatestNews();

getHeadlines();
getTrendingNews();

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", MoveTosearchContent);
