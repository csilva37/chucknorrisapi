import { ref } from "vue"
import axios from "axios"

const joke = ref()

const api = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/random",
})

export const useJokes = () => {
    const getJokes = async () => {
        const response = await api.get()
        joke.value = response.data.value
    }
    return {joke, getJokes}
} 