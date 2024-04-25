import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Form, FormGroup, Label, Input, Button} from "reactstrap";
const data = [{fullname:"Mike"},{email:"aa@aa"}];
const EditModal= () => {
  const [formData, setFormData] = useState ({
    id:'',
    fullname:'',
    email:'',
    phone:'',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {//eはイベントオブジェクト自体
    setFormData({
      ...formData,//スプレット演算子(元の状態を保持したまま更新データを上書きできる)
      [e.target.name]: e.target.value,//[]はnameは選択肢の中で選ぶという意味
    });
    console.log(e.target);
  };

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();//ブラウザのリロードをキャンセルしている

    fetch(`http://localhost:3000/put`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  };


    return (
  <Form onSubmit={handleEdit}>
    
    <FormGroup>
      <Label for="exampleName">ID</Label>
      <Input
        id="exampleId"
        name="id"
        type="text"
        value={formData.id}
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleName">氏名</Label>
      <Input
        id="exampleName"
        name="fullname"
        type="text"
        value={formData.fullname}
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input
        id="exampleEmail"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleNunber">電話番号</Label>
      <Input
        id="exampleNunber"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />
    </FormGroup>

    <Button type="submit">確定</Button>
  </Form>
    )
};

export default EditModal;