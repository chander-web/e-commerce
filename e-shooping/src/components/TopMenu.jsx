import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIURL } from "../helpers/constrants";

const TopMenu = () => {
    const [allCategory, setCategory] = useState([]);
    useEffect(async () => {
        const result = await axios.get(APIURL.ALLCATEGORY);
        setCategory(result.data.data);
    }, []);
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
                            {
                                allCategory.map(category => (
                                    <li className="nav-item" key={category._id}>
                                        <Link className="nav-link" to={`/products/${category.categoryTitle}/${category._id}`}>
                                            {category.categoryTitle}
                                        </Link>
                                    </li>
                                ))}


                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default TopMenu;
