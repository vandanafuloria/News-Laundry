# 🌏 News Laundry

# 📰 News Website - English & Hindi

This is a news website that allows users to read the latest news in both English and Hindi. The site primarily focuses on news related to India, but users can also get global news by searching relevant keywords (e.g., typing "world" shows global news).

The website features three main sections:

### Headline Section

Displays the top headlines with key images, titles, and brief descriptions.

### Latest or Searched News

Shows the most recent news or search-based articles based on user input.

### Trending News

Highlights popular and trending news articles based on relevance and popularity.

![Image](./assets/image.png)

![tablet](./assets/tablet.png)

# Installation

1.  Repository clone

```
git clone https://github.com/vandanafuloria/weather-update.git
```

2.  Install dependencies

```
 npm install
```

3.  commands for build , dev server, deployment respectly

```
npm run start
npm run dev
npm run deploy
```

# Bundler : parcel

- To add parcel

```
npm install --save-dev parcel
```

- default port of parcel

```
http://localhost:1234
```

# Api Used

`https://newsapi.org/`

- 🔑 Keyword (q) – Search for news articles related to any topic (e.g., "health", "India", "world").

- 🗣 Language (language) – Retrieve articles in different languages like en (English), hi (Hindi), etc.

- 📄 Pagination (page, pageSize) – Control how many results you get and on which page.

- 🔥 Popularity (sortBy=popularity) – Sort news by popularity to get trending articles.

- 🕒 Date (from, to) – Filter articles published within a specific date range.\*

```
https://newsapi.org/v2/everything?q=india&language=en&sortBy=popularity&page=1&pageSize=10&from=2024-04-01&to=2024-04-29&apiKey=YOUR_API_KEY
```

`News content is dynamically displayed based on user-selected customizations such as language, keywords, and popularity.`

# Contact Me 🧑🏻‍💻👉[Email](vandanafuloria@gmail.com)
