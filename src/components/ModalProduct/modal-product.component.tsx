import React, { useState } from 'react';
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { IProductResponse } from '../DetailProduct/detail-product.component';
import { editProduct, createProduct } from '../../redux/actions/products.actions';

function ModalProduct(props: any) {

    const product: IProductResponse = props.product;
    const create: boolean = props.create ? true : false;

    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [description, setdescription] = useState(product.description)
    const [stock, setStock] = useState(product.disStock)

    const idUser = JSON.parse(sessionStorage.getItem('userInfo') || '')._id;

    const updateProduct = (value: string | number, code: string) => {
        switch (code) {
            case 'name':
                product.name = value as string;
                setName(product.name);
                break;
            case 'price':
                product.price = value as number;
                setPrice(product.price);
                break;
            case 'description':
                product.description = value as string;
                setdescription(product.description);
                break;
            case 'stock':
                product.disStock = value as number;
                setStock(product.disStock);
                break;
            default:
                break;
        }
    }

    const requestEdit = async (product: IProductResponse) => {
        await props.dispatch(editProduct(product, idUser));
        props.toggle();
    }

    const requestCreate = async (product: IProductResponse) => {
        await props.dispatch(createProduct(product, idUser));
        props.toggle();
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'name')} value={name}
                            type="email" className="form-control" id="nameInput" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceInput">Price</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'price')} value={price}
                            type="number" className="form-control" id="passwordIpriceInputnput" placeholder="Enter price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'description')} value={description}
                            type="email" className="form-control" id="descriptionInput" placeholder="Enter description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stockInput">Stock</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'stock')} value={stock}
                            type="number" className="form-control" id="stockInput" placeholder="Enter stock" />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary"  onClick={() => 
                    !create ? 
                        requestEdit(product):
                        requestCreate(product)}
                >{!create ? 'Edit' : 'Create'}</Button>{' '}
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalProduct;