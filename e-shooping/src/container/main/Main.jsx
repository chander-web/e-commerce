import axios from 'axios';
import { ReactComponent as SearchIcon } from 'bootstrap-icons/icons/search.svg';
import React, { lazy, useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useParams } from 'react-router-dom';
import { APIURL } from '../../helpers/constrants';

const CardProductGrid = lazy(() => import('../../components/card/CardProductList'));



const Main = () => {
 

  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const params = useParams();
  const requestOptions = {
    type: params.slug,
    page: 1,
    pageSize: 10,
  };

  const [apiRequest, setApiRequest] = useState(requestOptions);
  
  useEffect(() => {
    const loadProducts = async() => {
      const result = await axios.get(APIURL.LIST_PRODUCTS, {
        params: {
          ...apiRequest
        }
      });
      setProducts(result.data.data);
      setTotalCount(result.data.totalCount);

    };
    loadProducts();
  }, [apiRequest]);
  useEffect(() => {
    setApiRequest(requestOptions);
  }, [params]);



  const handlePageChange = (pageNumber) => {
    requestOptions.page = pageNumber;
    requestOptions.type = params.slug;
    setApiRequest(requestOptions);

  };
  return (
    <div className="container-fluid mb-3">
      <div className="row">

        <div className="col-md-3" />
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
            {products.map(product => 
              <CardProductGrid data={product} key={product._id} />
            )}
          </div>
          
          {/* product not found  */}
          {!products.length ?
            <div className="product_not_found">
              <h2><SearchIcon /> We are sorry, no results found.</h2>
              <p>Please try to search with a different spelling or check out our categories.</p>
            </div>
            : null
          }
          {/* pagination */}
          <hr />
          {totalCount > 10 ?
            <Pagination
              activePage={apiRequest.page}
              itemsCountPerPage={apiRequest.pageSize}
              totalItemsCount={totalCount}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
            : null
          } 
        </div>
      </div>

    </div >
  );
};




export default Main;