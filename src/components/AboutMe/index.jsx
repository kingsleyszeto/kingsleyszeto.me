/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import './style.scss';

import StationSign from '../StationSign';
import Train from '../Train';
import {
  NUM_TRAINS, runTrains, spawnLines, spawnClass,
} from '../helper';

function AboutMe() {
  const pathOne = useRef(null);
  const pathFive = useRef(null);
  const animationRef = useRef(null);
  const pathAnimationRef = useRef(null);
  const stationStopAnimationRef = useRef(null);

  useEffect(() => {
    spawnLines(pathAnimationRef);
    spawnClass(stationStopAnimationRef, 'subway-sign-container');
    runTrains('one', animationRef, pathOne, 'route-one');
    runTrains('five', animationRef, pathFive, 'route-five');
  }, []);

  return (
    <div id="about-me">
      <div className="route-container">
        <svg className="route">
          <path id="route-one" stroke="#0039A6" fill="none" d="M -150 -150 L 100 100 Q 150 150 150 200 L 150 3500 " />
          <path id="route-five" stroke="#00933C" fill="none" d="M 955 -150 L 905 -100 Q 855 -50 855 0 L 855 3550 " />
        </svg>
      </div>
      <Train line="one" amount={NUM_TRAINS.one} color="#0039A6" />
      <Train line="five" amount={NUM_TRAINS.five} color="#00933C" />
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
