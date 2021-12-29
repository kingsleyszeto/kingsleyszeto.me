/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

import StationStop from '../StationStop';

function TrainLineCircle(color, letter, index) {
  if (color === 'FCCC0A' || color === '000000') {
    return (
      <div className="station-mark" style={{ backgroundColor: `#${color}` }} key={color + index.toString()}>
        <strong style={{ color: '#000000' }}>
          {letter}
        </strong>
      </div>
    );
  }
  return (
    <div className="station-mark" style={{ backgroundColor: `#${color}` }} key={color + index.toString()}>
      <strong>
        {letter}
      </strong>
    </div>
  );
}
// no more than 8 letters in right col
function StationSign(props) {
  const {
    name,
    nameSize,
    colors,
    letters,
  } = props;
  return (
    <div className="subway-sign-container">
      <StationStop />
      <div className="subway-sign">
        <div className="subway-sign col1">
          <strong style={{ fontSize: `${nameSize}px` }}>{name}</strong>
        </div>
        <div className="subway-sign col2">
          {colors.map((color, index) => (
            TrainLineCircle(color, letters[index], index)
          ))}
        </div>
      </div>
    </div>
  );
}

export default StationSign;
