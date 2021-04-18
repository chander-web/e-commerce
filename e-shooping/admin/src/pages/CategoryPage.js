/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { APIURL } from '../helper/adminConstants';

const CategoryPage = () => {
    const [setCategory] = useState([]);
    useEffect(async () => {
        const productCategoryResult = await axios.get(APIURL.CATEGORY_PATH);
        setCategory(productCategoryResult.data.data);
    }, []);
    return <>
        <Row>
            <Col sm={6} md={6} lg={4} xl={6}>
                <h3 className="pt-3 pb-2">Category Page</h3>
                <p>Category list goes here </p>
            </Col>
        </Row>
    </>
}
export default CategoryPage
