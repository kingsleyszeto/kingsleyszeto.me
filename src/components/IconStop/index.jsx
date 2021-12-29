/* eslint-disable react/prop-types */
import React from 'react';
import StationStop from '../StationStop';
import './style.scss';

function IconStop(props) {
  const { url, svgPath } = props;
  return (
    <div className="social-link">
      <a target="_blank" href={url} rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
          <path d={svgPath} />
        </svg>
      </a>
      <StationStop type="t2" />
    </div>
  );
}

export default IconStop;
