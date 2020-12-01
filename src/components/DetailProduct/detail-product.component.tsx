import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { deleteProduct } from '../../redux/actions/products.actions';
import ModalProduct from '../ModalProduct/modal-product.component';

export interface IProductResponse {
    _id: string;
    name: string;
    price: number;
    description: string;
    disStock: number;
    idCategory: string;
}

function DetailProduct(props: any) {

    const product: IProductResponse = props.product;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const requestDelete = (idProduct: string) => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '');
        props.dispatch(deleteProduct(idProduct, userInfo._id));
    }

    return (
        <div>
            <div className="container pt-5 mb-3 border-top">
                <h5><strong>Name:</strong>  {product.name}</h5>
                <h5><strong>Description:</strong>  {product.description}</h5>
                <h5><strong>Price:</strong>  {product.price}</h5>
                <h5><strong>Stock:</strong>  {product.disStock}</h5>
                <button onClick={toggle}>Edit</button>
                <button onClick={() => requestDelete(product._id)} >Delete</button>
            </div>
            <ModalProduct dispatch={props.dispatch} product={product} modal={modal} toggle={toggle} />
        </div>
    );
}

export default DetailProduct;