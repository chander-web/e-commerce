
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APIURL } from '../../helpers/constrants';
import { Link } from 'react-router-dom';

const Main = () => {

    const [data, setData] = useState([]);
    useEffect(async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    page: 1,
                    pageSize: 10
                }
            )
        };
        const result = await axios(APIURL.ALLPRODUCTS, requestOptions);
        setData(result.data.data);
    }, []);

    return (
        <>
            <div className="bg-info bg-gradient p-3 text-center mb-3">
                <h4 className="m-0">Explore Fashion Collection</h4>
            </div>
            <div className="container">
                <div className="row">
                    {data.map(item => (
                        <div className="col-md-3" key={item.productTitle} >
                            <Link to="/" className="text-decoration-none">
                                <img
                                    src={item.image}
                                    className="img-fluid rounded-circle"
                                    alt="..."
                                />
                                <div className="text-center h6">{item.productTitle}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Main;