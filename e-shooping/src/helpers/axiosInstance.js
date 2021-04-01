import axios from "axios";

const baseURL = process.env.API_BASE_URL;


let headers = {};



// set the baseURL and header
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
});

axiosInstance.interceptors.request.use(
    request => {
        // set the token
        if (localStorage.token) {
            headers.Authorization = `Bearer ${localStorage.token}`;
        }
        return request;
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    });



    // const result = await axiosInstance.post(url, data)


