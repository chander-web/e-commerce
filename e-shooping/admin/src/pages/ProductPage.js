import React from 'react'
import { Row, Col } from 'react-bootstrap';
const ProductPage = () => {
    return <>
        <Row>
            <Col sm={6} md={6} lg={4} xl={6}>
                <h3 className="pt-3 pb-2">Product Page</h3>
                <p>Product list goes here ...</p>
            </Col>
        </Row>
    </>
}
export default ProductPage