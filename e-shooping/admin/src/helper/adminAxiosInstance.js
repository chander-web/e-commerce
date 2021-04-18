import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../components/spinner/Spinner';
import { startLoading, stopLoading } from '../redux/spinner/spinnerAction';
import { APIURL } from './adminConstants';
const React = require('react');

const baseURL = APIURL.API_BASE_URL;

const AdminAxiosInstance = () => {
  const dispatch = useDispatch();


  // setting token
  const setAuthorization = ({ headers }) => {
    if (localStorage.authToken) {
      const result = headers.Authorization = `Bearer ${localStorage.authToken}`;
      return result;
    }
  };
  useEffect(() => {
    axios.interceptors.request.use(function(config) {
      // Do something before request is sent
      config.url = baseURL + config.url;
      setAuthorization(config);
      dispatch(startLoading());

      return config;
    }, function(error) {
      // Do something with request error
      dispatch(stopLoading());
      return Promise.reject(error);
    });


    axios.interceptors.response.use(function(response) {
      // Do something with response data
      dispatch(stopLoading());
      return response;
    }, function(error) {
      dispatch(stopLoading());
      return Promise.reject(error);

    });

  },[]);

  return (
    <React.Fragment>
      <Spinner />
    </React.Fragment>
  );
};
export default AdminAxiosInstance;






