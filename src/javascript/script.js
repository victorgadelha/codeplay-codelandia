const cardNews = document.querySelector('.content__news')

const API_URL = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=8a7f37754729406887c42dac68fb9edf'
const fetchNews = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

const setNews = async () => {
    const data = await fetchNews()
    const image = await data.articles[5].urlToImage

    
    console.log(data.articles[5].urlToImage)
}

setNews()



