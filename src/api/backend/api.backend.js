import axios from "axios";

const apiBackEnd = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})

export default apiBackEnd;