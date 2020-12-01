import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { IProductResponse } from '../DetailProduct/detail-product.component';
import './product.css';

function Product(props: any) {

    const product: IProductResponse = props.product;

    return (
        <Container className="my-3 py-3 item-product">
            <Row>
                <Col xs="8">
                    <h5><strong>Name:</strong>  {product.name}</h5>
                    <h5><strong>Description:</strong>  {product.description}</h5>
                </Col>
                <Col xs="4">
                    <h5><strong>Price:</strong>  {product.price}</h5>
                    <h5><strong>Stock:</strong>  {product.disStock}</h5>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;
