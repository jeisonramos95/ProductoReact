import axios from 'axios';
import React, { useState } from 'react';
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { IUser } from '../../models/user.model';
import { API_USERS_URL } from '../../utils/constants';


function ModalRegister(props: any) {

    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const requestCreate = async () => {

        const response = await axios.post(API_USERS_URL + 'createUser', {
            nickname,
            name,
            lastName,
            email,
            password
        });
        if (response.data.status === 200){
            props.toggle();
        }
       
    }
    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
            <ModalBody>
                <form>

                    <div className="form-group">
                        <label htmlFor="nicknameInput">NickName</label>
                        <input onChange={(event) => setNickname(event.target.value)} value={nickname}
                            type="email" className="form-control" id="nicknameInput" placeholder="Enter nickname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name</label>
                        <input onChange={(event) => setName(event.target.value)} value={name}
                            type="email" className="form-control" id="nameInput" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastnameInput">LastName</label>
                        <input onChange={(event) => setLastname(event.target.value)} value={lastName}
                            type="email" className="form-control" id="lastnameInput" placeholder="Enter lastname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input onChange={(event) => setEmail(event.target.value)} value={email}
                            type="email" className="form-control" id="emailInput" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Stock</label>
                        <input onChange={(event) => setPassword(event.target.value)} value={password}
                            type="password" className="form-control" id="passwordInput" placeholder="Enter password" />
                    </div>
                </form>
            </ModalBody> <ModalFooter>
                <Button color="primary" onClick={() =>
                    requestCreate()}
                >Create</Button>{' '}
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>

        </Modal>
    );
}

export default ModalRegister;