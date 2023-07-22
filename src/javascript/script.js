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
    try {
        for (let i = 0; i < tecNews.length; i++) {
            const newsImage = tecNews[i].urlToImage
            const newsDate = tecNews[i].publishedAt.substr(0, 10)
            const newsTitle = tecNews[i].title
    
            if (!newsImage || !newsDate || !newsTitle) {
                continue;
            }
    
            const newsDateContainer = document.createElement('p')
            newsDateContainer.classList.add('content__text-date')
            newsDateContainer.textContent = newsDate
    
            const newsTitleContainer = document.createElement('h2')
            newsTitleContainer.classList.add('content__text-title')
            newsTitleContainer.textContent =  newsTitle 
    
            const newsTextContainer = document.createElement('div')
            newsTextContainer.classList.add('content__text')
            newsTextContainer.appendChild(newsDateContainer)
            newsTextContainer.appendChild(newsTitleContainer)
    
            const newsImageSrc = document.createElement('img')
            newsImageSrc.classList.add('content__image')
            newsImageSrc.src = `${newsImage}`
    
            const newsArticle = document.createElement('article')
            newsArticle.classList.add('content__news')
            
            newsArticle.appendChild(newsImageSrc)
            newsArticle.appendChild(newsTextContainer)
           
            mainNews.appendChild(newsArticle)
            console.log(tecNews)
        }     
    }
    
    catch(error) {
        console.log(error)
    }
}

setNews()


