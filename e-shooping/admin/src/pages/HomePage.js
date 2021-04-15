import React from 'react'
import { Row, Col } from 'react-bootstrap';
const HomePage = () => {
    return <>
        <Row>
            <Col sm={6} md={6} lg={4} xl={6}>
                <h3 className="pt-3 pb-2">Home Page</h3>
                <p>Welcome to Proshop, we are selling best products in cheapest Price ever!</p>
            </Col>
        </Row>
    </>;
}
export default HomePage
