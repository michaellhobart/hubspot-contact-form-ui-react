import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, Spinner } from 'reactstrap';

import axios from 'axios'

const FormSection = (props) => {

  const [ emailsList, setEmailsList ] = useState([])
  const [formState, setFormState ] = useState({
    email:"",
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

  const [ emailError, setEmailError ] = useState({class:"", message:""})
  const [ submitEnabled, setSubmitEnabled ] = useState({enabled:false, color:"secondary"})
  const [ loading, setLoading ] = useState(true)
  const [ success, setSuccess ] = useState(false)

  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setFormState({...formState, [id]:value})
  }

  const handleFormSubmit = () => {
    setLoading(true)
    console.log(formState)
    axios.post('https://t9r31l27md.execute-api.us-east-1.amazonaws.com/dev/contacts/', formState)
    .then( res => {
      console.log(res);
      setLoading(false)
      setSuccess(true)
    })
  }

  const checkEmailExists = () => {
    return emailsList.includes(formState.email)
  }



  const validateEmail = () => {
     var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     console.log(emailRegEx.test(formState.email.toLowerCase()))
    if(formState.email === ""){
      setEmailError({class:"is-invalid", message:"This is a required field"})
      setSubmitEnabled({enabled:false, color:"secondary"})
    } else if (checkEmailExists()){
      setEmailError({class:"is-invalid", message:"This email already exists in our system"})
      setSubmitEnabled({enabled:false, color:"secondary"})
    } else if (!emailRegEx.test(formState.email.toLowerCase())){
      setEmailError({class:"is-invalid", message:"This is not a valid email"})
      setSubmitEnabled({enabled:false, color:"secondary"})
    } else {
      setEmailError({class:"is-valid", message:""})
      setSubmitEnabled({enabled:true, color:"primary"})
    }
  }


  const getEmails = () => {
    console.log("GETTING EMAILS");
    const data = {
      emails: 'https://t9r31l27md.execute-api.us-east-1.amazonaws.com/dev/contacts/emails'
    }

    Promise.all(
      Object.entries( data )
      .map( data => {
        console.log(data[1])
        return axios
        .get(data[1])
        .catch( e => {
          throw new Error(`Failed GET Req for ${data[0]}`, e);
        })
      })
    )
    .then( results => {
      // setBarberList(results[0].data)
      setEmailsList(results[0].data)
      setLoading(false)
    })
    .catch( err => console.log(err))
  }


  const resetForm = () => {
    setSuccess(false)
    setLoading(true)
    setFormState({
    email:"",
    firstname:"",
    lastname:"",
    company:"",
    address:"",
    city:"",
    state:"",
    zip:"",
    website:"",
    phone:""
  })
    setEmailError({class:"", message:""})
    getEmails()
  }


  useEffect( () => {
    getEmails()
  }, [])


  if (loading){
    return (
      <Container style={{marginTop:"200px"}}>
        <Row >
          <Col style={{textAlign:"center"}}>
            <Spinner color="primary" style={{ width: '5rem', height: '5rem'}} />
          </Col>
        </Row>
      </Container>
    )
  }

  if (success){
    return (
      <Container style={{marginBottom:"5rem"}}>
        <Row style={{textAlign:"center"}}>
          <Col>
          <div style={{marginBottom:"3rem"}}>
            <h3>Your Contact has been added!</h3>
            <p>Would you like to add another?</p>
          </div>
          <Button color="primary" size="lg" onClick={resetForm} >Add Another Contact</Button>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Form>
    <div style={{marginBottom:"3rem"}}>
    <FormGroup>
      <Label for="email">Email *</Label>
      <Input type="text" name="email" id="email" placeholder="hub.spot@hubspot.com" className={emailError.class} required
      value={formState.email}
      onChange={handleInputChange}
      onBlur={validateEmail}
      />
      <FormFeedback>{emailError.message}</FormFeedback>
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
      <Button color={submitEnabled.color} size="lg" onClick={handleFormSubmit} disabled={!submitEnabled} style={{cursor:"default"}}>Add Contact</Button>
    </Form>
  );
}

export default FormSection;
