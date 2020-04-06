import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import InfoSection from './InfoSection'
import FormSection from './FormSection'

const MainContent = (props) => {
  return (
    <Container style={{marginTop:"100px", marginBottom:"100px"}}>
      <Row>
        <Col xs="12" lg="5" style={{display: "flex", alignItems: "center"}}>
          <InfoSection />
        </Col>
        <Col xs="12" lg={{size:6, offset:1}}>
          <FormSection />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
