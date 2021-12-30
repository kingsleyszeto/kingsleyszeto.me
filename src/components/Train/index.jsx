/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function Train(props) {
  const { ids, color } = props;
  return (
    <div className="train-container">
      {
        ids.map((trainID) => (
          <svg className="train" id={trainID} xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} fill={color} d="M 0 0 H 50 V 30 H 0 L 0 0" />
          </svg>
        ))
}
    </div>
  );
}

export default Train;
