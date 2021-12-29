/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function Train(props) {
  const { id, color } = props;
  return (
    <div className="train-container">
      <div className="train" id={id} style={{ backgroundColor: color }} />
    </div>
  );
}

export default Train;
