import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://riteshblog-app.herokuapp.com/"
})