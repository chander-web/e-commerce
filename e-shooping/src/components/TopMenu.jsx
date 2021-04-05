import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        E-Commerce
          </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/tshirt">
                                    Tshirt
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">
                                    Supermarket
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">
                                    Electronics
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">
                                    Furniture
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">
                                    Garden & Outdoors
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">
                                    Jewellery
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/documentation">
                                    Documentation
                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default TopMenu;
