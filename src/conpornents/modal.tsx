import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddForm from "@/conpornents/AddForm";


const AddModal = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle}>追加</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>追加</ModalHeader>
                <ModalBody>
                    <AddForm />
                </ModalBody>
            </Modal>
        </div>
    )
};

export default AddModal;