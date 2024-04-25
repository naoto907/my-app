import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditForm from "@/component/EditForm";


const EditModal = () => {
    
    const [modal, setModal] = useState(false);//modalは最初閉じている
    const toggle = () => setModal(!modal);//setModalはtoggleによって値が変わる
    return (
        <div>
            <Button color="primary" onClick={toggle}>編集</Button>{/**Buttonを押すとtoggle関数が呼び出され開閉する */}
            <Modal isOpen={modal} toggle={toggle} >{/*isOpenでmodalの開閉を管理。開閉のスイッチに関してはtoggle関数を使う */}
                <ModalHeader toggle={toggle}>編集</ModalHeader>{/*X(閉じる)ボタンを押すとtoggle関数が呼び出され開閉する */}
                <ModalBody>
                    <EditForm/>{/*モーダルの中身はEditFormに記載されいるので呼び出す */}
                </ModalBody>
            </Modal>
        </div>
    )
};

export default EditModal;