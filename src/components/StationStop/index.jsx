/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function StationStop(props) {
  const { id, type } = props;
  let spacedType = ' base';
  if (type) {
    spacedType = ` ${type}`;
  }

  return (
    <div className={`station-container${spacedType}`}>
      <div className={`station${spacedType}`} id={id}>
        <div className={`inner-stat${spacedType}`} />
      </div>
    </div>
  );
}

export default StationStop;
