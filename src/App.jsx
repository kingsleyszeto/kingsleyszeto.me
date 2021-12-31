import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';
import React, { useRef, useEffect } from 'react';
import Content from './components/Content';
import RightRail from './components/RightRail';
import { spawnContent } from './components/helper';

function App() {
  const contentAnimationRef = useRef(null);

  useEffect(() => {
    spawnContent(contentAnimationRef, 'site');
  });
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
