
import axios from "axios"


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const localBaseUrl='http://localhost:8800'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: '200'
    },
    headers: {
'X-RapidAPI-Key' : '98dbbba05a6msh56c62c798d965f5p1222abjsncfb9408cef39',

//
// 8dbbba05a6msh56c62c798d965f5p1222abjsncfb9408cef39
//98dbbba05a6msh56c62c798d965f5p1222abjsncfb9408cef39

// AIzaSyDie41FgodK2TptolmJ6tLaqznolSq4GOQ


        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}
export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    // console.log(data);
    return data
}
export const fetchFromLocalApi=async (localUrl)=>{
    const {data}=await axios.get(`${localBaseUrl}/${localUrl}`)
    return data
}