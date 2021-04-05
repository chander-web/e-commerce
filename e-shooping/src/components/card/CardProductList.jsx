import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import React from "react";
import { Link } from "react-router-dom";


const CardProductList = (props) => {
    const product = props.data;
    console.log(product);

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-3 text-center">
                    <img src={`http://localhost:4000/${product.image}`} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h6 className="card-subtitle mr-2 d-inline">
                            <Link to={product.link} className="text-decoration-none">
                                {product.productTitle}
                            </Link>
                        </h6>

                        {/* <p className="small mt-2">{product.description}</p> */}

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <div className="mb-2">
                            <span className="font-weight-bold h5">${product.productPrice}</span>
                            {/* {product.originPrice > 0 && (
                                <del className="small text-muted ml-2">
                                    ${product.originPrice}
                                </del>
                            )} */}
                            {/* {(product.discountPercentage > 0 || product.discountPrice > 0) && (
                                <span className={`rounded p-1 bg-warning ml-2 small`}>
                                    -
                                    {product.discountPercentage > 0
                                        ? product.discountPercentage + "%"
                                        : "$" + product.discountPrice}
                                </span>
                            )} */}
                        </div>
                        {/* {product.isFreeShipping && ( */}
                        <p className="text-success small mb-2">
                            <IconTruckFill /> Free shipping
                            </p>
                        {/* )} */}

                        <div className="btn-group btn-block" role="group">
                            <button
                                type="button"
                                className="btn btn-sm btn-primary"
                                title="Add to cart"
                            >
                                <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                title="Add to wishlist"
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProductList;
