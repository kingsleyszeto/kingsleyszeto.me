/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function StationStop(props) {
  const { id } = props;
  return (
    <div className="station-container">
      <div className="station" id={id}>
        <div className="inner-stat" />
      </div>
    </div>
  );
}

export default StationStop;
