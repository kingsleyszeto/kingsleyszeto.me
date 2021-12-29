/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import React from 'react';
import Col from 'react-bootstrap/Col';
import AboutMe from '../AboutMe';
import Experience from '../Experience';

function Content() {
  return (
    <Col className="content">
      <AboutMe />
      <Experience />
    </Col>
  );
}
export default Content;
