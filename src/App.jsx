import './App.scss';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Content from './components/Content';
import RightRail from './components/RightRail';

function App() {
  return (
    <Container fluid>
      <Row id="site">
        <Col className="rail" />
        <Content />
        <RightRail />
      </Row>
    </Container>
  );
}

export default App;
