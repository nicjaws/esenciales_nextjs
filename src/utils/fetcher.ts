const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'B8Y7Mlp28Eppji4ye4f7kF6W3vg44wRmERjWxaxM'

const fetcher = async (queryParams?: string) => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}${queryParams?.length ? queryParams : ''}`)
        const data = await response.json()

       return Promise.resolve(data)
    }catch(error){
        return Promise.reject(error)
    }
}

export default fetcher