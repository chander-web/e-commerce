import axios from 'axios';
import React, { lazy, useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { useParams } from 'react-router-dom';
import { APIURL } from '../../helpers/constrants';
import { getStoreData } from '../../helpers/storage';

const CardProductGrid = lazy(() => import('../../components/card/CardProductList'));



const Main = _ => {
    var requestOptions = {
        page: 1,
        pageSize: 10,
    };

    const [products, setProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [apiRequest, setApiRequest] = useState(requestOptions);
    const params = useParams();


    useEffect(() => {
        const cateId = getStoreData('categoryId')
        const loadProducts = async () => {
            const finalRes = {
                categoryId: cateId,
                ...apiRequest
            }
            const result = await axios.post(APIURL.ALLPRODUCTS, finalRes);
            setProducts(result.data.data);
            setTotalCount(result.data.totalCount);

        }
        loadProducts();
    }, [apiRequest, params.data]);




    const handlePageChange = (pageNumber) => {
        requestOptions.page = pageNumber;
        setApiRequest(requestOptions);

    }
    return (
        <div className="container-fluid mb-3">
            <div className="row">

                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                    <div className="btn-group ml-3" role="group">
                        {/* <button
                        aria-label="Grid"
                        type="button"
                        onClick={() => this.onChangeView("grid")}
                        className={`btn ${
                            this.state.view === "grid"
                                ? "btn-primary"
                                : "btn-outline-primary"
                            }`}
                    >
                        <FontAwesomeIcon icon={faTh} />
                    </button> */}
                        {/* <button
                        aria-label="List"
                        type="button"
                        onClick={() => this.onChangeView("list")}
                        className={`btn ${
                            this.state.view === "list"
                                ? "btn-primary"
                                : "btn-outline-primary"
                            }`}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button> */}
                    </div>
                    <div className="row g-3">
                        {/* {this.state.view === "grid" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <CardProductGrid data={product} />
                      </div>
                    );
                  })}
                {this.state.view === "list" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-12">
                        <CardProductList data={product} />
                      </div>
                    );
                  })} */}
                        {products.map(products => (
                            <CardProductGrid data={products} />
                        ))}

                    </div>
                    <hr />
                    {/* pagination */}
                    <Pagination
                        activePage={apiRequest.page}
                        itemsCountPerPage={apiRequest.pageSize}
                        totalItemsCount={totalCount}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                    />
                </div>
            </div>

        </div >
    );
};




export default Main;