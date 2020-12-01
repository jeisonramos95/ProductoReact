import React, { useState } from 'react';
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ICategory } from '../CardCategory/card-category.component';
import { editCategory, createCategory } from '../../redux/actions/products.actions';

function ModalCategory(props: any) {

    const category: ICategory = props.category;
    const create: boolean = props.create ? true : false;

    const [name, setName] = useState(category.name)
    const [description, setdescription] = useState(category.description)
    

    const idUser = JSON.parse(sessionStorage.getItem('userInfo') || '')._id;

    const updateCategory = (value: string | number, code: string) => {
        switch (code) {
            case 'name':
                category.name = value as string;
                setName(category.name);
                break;
            
            case 'description':
                category.description = value as string;
                setdescription(category.description);
                break;
            
            default:
                break;
        }
    }

    const requestEdit = async (category: ICategory) => {
        await props.dispatch(editCategory(category));
        props.toggle();
    }

    const requestCreate = async (category: ICategory) => {
        await props.dispatch(createCategory(category, idUser));
        props.toggle();
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name</label>
                        <input onChange={(event) => updateCategory(event.target.value, 'name')} value={name}
                            type="email" className="form-control" id="nameInput" placeholder="Enter name" />
                    </div>
                   
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <input onChange={(event) => updateCategory(event.target.value, 'description')} value={description}
                            type="email" className="form-control" id="descriptionInput" placeholder="Enter description" />
                    </div>
                    
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary"  onClick={() => 
                    !create ? 
                        requestEdit(category):
                        requestCreate(category)}
                >{!create ? 'Edit' : 'Create'}</Button>{' '}
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalCategory;