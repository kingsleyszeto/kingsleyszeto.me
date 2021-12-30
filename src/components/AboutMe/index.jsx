/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import './style.scss';

import StationSign from '../StationSign';
import Train from '../Train';
import runTrains from '../helper';

function AboutMe() {
  const lineOneTrains = ['tr1', 'tr2', 'tr3', 'tr4'];
  const lineFiveTrains = ['tr5', 'tr6', 'tr7', 'tr8'];

  const pathOne = useRef(null);
  const pathFive = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    runTrains(lineOneTrains, animationRef, pathOne, 'route-one', 15000, 7500);
    runTrains(lineFiveTrains, animationRef, pathFive, 'route-five', 14000, 7000);
  }, []);

  return (
    <div id="about-me">
      <div className="route-container">
        <svg className="route">
          <path id="route-one" stroke="#0039A6" fill="none" d="M -400 -400 L 100 100 Q 150 150 150 200 L 150 3500 " />
          <path id="route-five" stroke="#00933C" fill="none" d="M 955 -150 L 905 -100 Q 855 -50 855 0 L 855 3550 " />
        </svg>
      </div>
      <Train ids={lineOneTrains} color="#0039A6" />
      <Train ids={lineFiveTrains} color="#00933C" />
      <span id="hey">Hey, I'm</span>
      <br />
      <span id="name">Kingsley Szeto</span>
      <br />
      <p>
        If for some reason you've followed this site
        up till now there's been a couple
        of big changes to my life!
      </p>
      <h3><strong>About Me</strong></h3>
      <StationSign
        name="UC Irvine"
        nameSize={53}
        colors={[
          'EE352E',
          'FCCC0A',
          'EE352E',
          'EE352E',
          '0039A6',
          '808183',
        ]}
        letters="2022CS"
        url="https://www.ics.uci.edu/"
      />
      <br />
      <span>
        I'm a senior computer science major about to graduate
        from
        {' '}
        <a href="https://www.ics.uci.edu/">UC Irvine</a>
        {' '}
        in March 2022 & incoming software engineer.
        If you're reading this before May 2022,
        then I am in Irvine, CA. Otherwise I am in NYC.
        I'm super passionate about food, urbanism, and
        a combo of the two - travel!
      </span>
    </div>
  );
}
export default AboutMe;
