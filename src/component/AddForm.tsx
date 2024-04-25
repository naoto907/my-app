import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Form, FormGroup, Label, Input, Button} from "reactstrap";
const AddForm= () => {
  const [formData, setFormData] = useState ({
    fullname:'',
    email:'',
    phone:'',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://localhost:3000/post', {
        method: 'POST',
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
  <Form onSubmit={add}>
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

export default AddForm;