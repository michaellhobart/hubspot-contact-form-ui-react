import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const InfoSection = (props) => {
  return (
    <Container style={{marginBottom:"5rem"}}>
      <Row style={{textAlign:"right"}}>
        <Col>
        <div>
          <h1>Add New Contact</h1>
          <h4>Add a new contact to your Hubspot CRM.</h4>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoSection;
