import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from 'axios'

const FormSection = (props) => {
  const [formState, setFormState ] = useState({
    email:"john58@sims.com",
    firstname:"Tim",
    lastname:"McGonagle",
    company:"Shaws",
    address:"25 Beanzie St",
    city:"Hanson",
    state:"MA",
    zip:"02341",
    website:"www.cartright.com",
    phone:"781-888-3562"
  })

  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setFormState({...formState, [id]:value})
  }

  const handleSubmit = () => {
    console.log(formState)
    axios.post('https://t9r31l27md.execute-api.us-east-1.amazonaws.com/dev/contacts/', formState)
    .then( res => {
      console.log(res);
    })

  }


  return (
    <Form>
    <div style={{marginBottom:"3rem"}}>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="text" name="email" id="email" placeholder="hub.spot@hubspot.com" value={formState.email} onChange={handleInputChange}/>
    </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input type="text" name="firstname" id="firstname" placeholder="Hubbard" value={formState.firstname} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input type="text" name="lastname" id="lastname" placeholder="Spotly" value={formState.lastname} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
      </Row>
      </div>
      <div style={{marginBottom:"3rem"}}>
      <FormGroup>
        <Label for="company">Company</Label>
        <Input type="text" name="company" id="company" placeholder="HubSpot" value={formState.company} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" placeholder="25 First St" value={formState.address} onChange={handleInputChange}/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city" placeholder="Cambridge" value={formState.city} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" id="state" placeholder="MA" value={formState.state} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="zip">Zip</Label>
            <Input type="text" name="zip" id="zip" placeholder="02141" value={formState.zip} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
      </Row>
      </div>
      <div style={{marginBottom:"3rem"}}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="website">Website</Label>
            <Input type="text" name="website" id="website" placeholder="www.hubspot.com" value={formState.website} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="text" name="phone" id="phone" placeholder="555-123-4567" value={formState.phone} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
      </Row>
      </div>
      <Button color="primary" size="lg" onClick={handleSubmit} >Add Contact</Button>
    </Form>
  );
}

export default FormSection;
