import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Spinner from "../components/spinner/Spinner";
import { startLoading, stopLoading } from '../redux/spinner/spinnerAction';
import { APIURL } from "./constrants";

const baseURL = APIURL.API_BASE_URL;

const AxiosInstanceCopy = () => {
    const dispatch = useDispatch();


    // setting token
    const setAuthorization = ({ headers }) => {
        if (localStorage.authToken) {
            return headers.Authorization = `Bearer ${localStorage.authToken}`;
        }
    }
    useEffect(() => {
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            config.url = baseURL + config.url;
            setAuthorization(config);
            dispatch(startLoading());

            return config;
        }, function (error) {
            // Do something with request error
            dispatch(stopLoading());
            return Promise.reject(error);
        });


        axios.interceptors.response.use(function (response) {
            // Do something with response data
            dispatch(stopLoading());
            return response;
        }, function (error) {
            dispatch(stopLoading());
            // const statusCode = error.response.status;
            // const statusMessage = error.response.data.message;
            // if (statusCode != 200) {
            //     errorMsg(statusMessage);
            // }
            // Do something with response error
            return Promise.reject(error);

        });

    }, [])

    return (
        <>
            <Spinner />
        </>
    );
}
export default AxiosInstanceCopy;




    // const result = await axiosInstance.post(url, data)




