/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import React from 'react';
import Col from 'react-bootstrap/Col';
import AboutMe from '../AboutMe';
import Experience from '../Experience';

/* eslint-disable react/prop-types */
function Content({ city }) {
  return (
    <Col className="content">
      <AboutMe city={city} />
      <Experience city={city} />
    </Col>
  );
}
export default Content;
