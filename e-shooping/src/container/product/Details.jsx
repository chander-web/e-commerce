import { faCartPlus, faHeart, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { ReactComponent as IconStarFill } from 'bootstrap-icons/icons/star-fill.svg';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIURL } from '../../helpers/constrants';

const Details = () => {
  const { slug } = useParams();
  const [products, setProduct] = useState({});

  useEffect(() => {
    const loadProduct = async() => {
      const result = await axios.get(`${APIURL.PRODUCT_DETAIL}/${slug}`);
      setProduct(result.data.data[0]);
    };
    loadProduct();
  }, []);



  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img
                src={`${APIURL.BASE_PATH}${products.image}`}
                className="img-fluid mb-3"
                alt=""
              />

            </div>
            <div className="col-md-7">
              <h1 className="h5 d-inline mr-2">

                {products.productTitle}
              </h1>
              <span className="badge bg-success mr-2">New</span>
              <span className="badge bg-danger mr-2">Hot</span>
              <div className="mb-3">
                <IconStarFill className="text-warning mr-1" />
                <IconStarFill className="text-warning mr-1" />
                <IconStarFill className="text-warning mr-1" />
                <IconStarFill className="text-warning mr-1" />
                <IconStarFill className="text-secondary mr-1" />|{' '}
                <span className="text-muted small">
                                    42 ratings and 4 reviews
                </span>
              </div>
              <dl className="row small mb-3">
                <dt className="col-sm-3">Availability</dt>
                <dd className="col-sm-9">In stock</dd>
                <dt className="col-sm-3">Sold by</dt>
                <dd className="col-sm-9">{products.soldBy}</dd>
                <dt className="col-sm-3">Size</dt>
                <dd className="col-sm-9">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizes"
                      disabled={true}
                    />
                    <label className="form-check-label" htmlFor="sizes">
                                            S
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizem"
                      disabled={true}
                    />
                    <label className="form-check-label" htmlFor="sizem">
                                            M
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizel"
                    />
                    <label className="form-check-label" htmlFor="sizel">
                                            L
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizexl"
                    />
                    <label className="form-check-label" htmlFor="sizexl">
                                            XL
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizexxl"
                    />
                    <label className="form-check-label" htmlFor="sizexxl">
                                            XXL
                    </label>
                  </div>
                </dd>
                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">
                  <button className="btn btn-sm btn-primary p-2 mr-2" />
                  <button className="btn btn-sm btn-secondary p-2 mr-2" />
                  <button className="btn btn-sm btn-success p-2 mr-2" />
                  <button className="btn btn-sm btn-danger p-2 mr-2" />
                  <button className="btn btn-sm btn-warning p-2 mr-2" />
                  <button className="btn btn-sm btn-info p-2 mr-2" />
                  <button className="btn btn-sm btn-dark p-2 mr-2" />
                </dd>
              </dl>

              <div className="mb-3">
                <span className="font-weight-bold h5 mr-2">${products.productPrice}</span>
                <del className="small text-muted mr-2">$2000</del>
                <span className="rounded p-1 bg-warning  mr-2 small">
                                    -$100
                </span>
              </div>
              <div className="mb-3">
                <div className="d-inline float-left mr-2">
                  <div className="input-group input-group-sm mw-140">
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="1"
                    />
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-primary mr-2"
                  title="Add to cart"
                >
                  <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-warning mr-2"
                  title="Buy now"
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Buy now
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  title="Add to wishlist"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div>
                <p className="font-weight-bold mb-2 small">
                                    Product Description
                </p>
                <ul className="small">
                  <li>
                    {products.description}
                  </li>

                </ul>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  );
};



export default Details;