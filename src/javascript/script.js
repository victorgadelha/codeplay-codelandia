const mainNews = document.querySelector('.content')

const API_URL = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=8a7f37754729406887c42dac68fb9edf'
const fetchNews = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

const setNews = async () => {
    allNews = await fetchNews()
    tecNews = allNews.articles
    for (let i = 0; i < tecNews.length; i++) {
        const newsImage = tecNews[i].urlToImage
        const newsDate = tecNews[i].publishedAt
        const newsTitle = tecNews[i].title

        newsDateContainer = document.createElement('p')
        newsDateContainer.classList.add('content__date')
        newsDateContainer.textContent = newsDate

        newsTitleContainer = document.createElement('h2')
        newsTitleContainer.classList.add('content__text')
        newsTitleContainer.textContent = newsTitle

        newsArticle = document.createElement('article')
        newsArticle.classList.add('content__news')
        newsArticle.style.backgroundImage = `url(${newsImage})`
        newsArticle.appendChild(newsDateContainer)
        newsArticle.appendChild(newsTitleContainer)

        
        console.log(tecNews)
    }
   
}

setNews()


