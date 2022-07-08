import axios from 'axios'

const baseUrl = 'http://localhost:3004/movies'

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response.data
    } catch (error) {
        console.log('Failure in fetching process: ', error)
    }
}

export default getAll