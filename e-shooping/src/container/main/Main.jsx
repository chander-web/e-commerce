import axios from 'axios';
import { ReactComponent as SearchIcon } from 'bootstrap-icons/icons/search.svg';
import React, { lazy, useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useParams } from 'react-router-dom';
import { APIURL } from '../../helpers/constrants';

const CardProductGrid = lazy(() => import('../../components/card/CardProductList'));
const Sidebar = lazy(() => import('../../components/Sidebar'));



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
  const [sidebar, setSidebarResult] = useState([]);

  
  useEffect(() => {
    // load products
    const loadProducts = async() => {
      const result = await axios.get(APIURL.LIST_PRODUCTS, {
        params: {
          ...apiRequest
        }
      });
      setProducts(result.data.data);
      setTotalCount(result.data.totalCount);

    };
      // load sidebar
    const loadSidebar = async() => {
      const result = await axios.get(`${APIURL.SIDEBAR}/${params.slug}`);
      setSidebarResult(result.data.data);

    };

    loadSidebar();
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
        {/* category section */}
        <div className="col-md-3">
          <Sidebar items={sidebar} />
        </div>

        {/* product section */}
        <div className="col-md-9">
          <div className="row g-3">
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