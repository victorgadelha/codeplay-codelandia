const API_URL = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=8a7f37754729406887c42dac68fb9edf'
const fetchData = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
}

fetchData()