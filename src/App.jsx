import './App.scss';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Content from './components/Content';

function App() {
  return (
    <Container fluid>
      <Row id="site">
        <Col />
        <Content />
        <Col />
      </Row>
    </Container>
  );
}

export default App;
