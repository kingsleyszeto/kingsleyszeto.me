/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import './style.scss';

import StationSign from '../StationSign';
import Train from '../Train';
import {
  NUM_TRAINS, DURATION, runTrains, cancelTrains, spawnLines, spawnClass,
} from '../helper';

// SF: 4 lines sharing the same path shape, each offset perpendicular to the path direction.
// Base path goes 45° diagonal then curves to vertical.
// Perpendicular offset per line: (+7, -7) along diagonal, (+10, 0) along vertical.
// Q control point is interpolated between the two offsets.
const SF_PATHS = [
  { id: 'route-one', stroke: '#0099D8', d: 'M -150 -150 L 100 100 Q 150 150 150 200 L 150 3500' },
  { id: 'route-two', stroke: '#F9E300', d: 'M -143 -157 L 107 93 Q 159 147 160 200 L 160 3500' },
  { id: 'route-three', stroke: '#D7373F', d: 'M -136 -164 L 114 86 Q 168 144 170 200 L 170 3500' },
  { id: 'route-four', stroke: '#009A44', d: 'M -129 -171 L 121 79 Q 177 141 180 200 L 180 3500' },
];

function AboutMe({ city }) {
  const isSF = city === 'sf';
  const pathOne = useRef(null);
  const pathTwo = useRef(null);
  const pathThree = useRef(null);
  const pathFour = useRef(null);
  const pathFive = useRef(null);
  // Reversed-direction companion paths (geometrically drawn end→start)
  const pathOneR = useRef(null);
  const pathTwoR = useRef(null);
  const pathThreeR = useRef(null);
  const pathFourR = useRef(null);
  const pathFiveR = useRef(null);
  const animationRef = useRef(null);
  const pathAnimationRef = useRef(null);
  const stationStopAnimationRef = useRef(null);

  useEffect(() => {
    spawnLines(pathAnimationRef);
    runTrains('one', animationRef, pathOne, 'route-one', pathOneR, 'route-one-r');
    if (isSF) {
      runTrains('two', animationRef, pathTwo, 'route-two', pathTwoR, 'route-two-r', DURATION.one);
      // eslint-disable-next-line max-len
      runTrains('three', animationRef, pathThree, 'route-three', pathThreeR, 'route-three-r', DURATION.one);
      runTrains('four', animationRef, pathFour, 'route-four', pathFourR, 'route-four-r', DURATION.one);
    } else {
      runTrains('five', animationRef, pathFive, 'route-five', pathFiveR, 'route-five-r');
    }
    return () => cancelTrains(animationRef);
  }, []);

  useEffect(() => {
    spawnClass(stationStopAnimationRef, 'subway-sign-container');
  }, [city]);

  return (
    <div id="about-me">
      <div className="route-container">
        <svg className="route">
          {isSF
            ? (
              <>
                {SF_PATHS.map((p) => (
                  <path key={p.id} id={p.id} stroke={p.stroke} fill="none" d={p.d} />
                ))}
                {/* Reverse companions for SF AboutMe paths — invisible */}
                <path id="route-one-r" stroke="none" fill="none" d="M 150 3500 L 150 200 Q 150 150 100 100 L -150 -150" />
                <path id="route-two-r" stroke="none" fill="none" d="M 160 3500 L 160 200 Q 159 147 107 93 L -143 -157" />
                <path id="route-three-r" stroke="none" fill="none" d="M 170 3500 L 170 200 Q 168 144 114 86 L -136 -164" />
                <path id="route-four-r" stroke="none" fill="none" d="M 180 3500 L 180 200 Q 177 141 121 79 L -129 -171" />
              </>
            )
            : (
              <>
                <path id="route-one" stroke="#0039A6" fill="none" d="M -150 -150 L 100 100 Q 150 150 150 200 L 150 3500" />
                <path id="route-five" stroke="#00933C" fill="none" d="M 955 -150 L 905 -100 Q 855 -50 855 0 L 855 3550" />
                {/* Reverse companions for NY AboutMe paths — invisible */}
                <path id="route-one-r" stroke="none" fill="none" d="M 150 3500 L 150 200 Q 150 150 100 100 L -150 -150" />
                <path id="route-five-r" stroke="none" fill="none" d="M 855 3550 L 855 0 Q 855 -50 905 -100 L 955 -150" />
              </>
            )}
        </svg>
      </div>
      <Train line="one" amount={NUM_TRAINS.one} color={isSF ? '#0099D8' : '#0039A6'} />
      {isSF && <Train line="two" amount={NUM_TRAINS.two} color="#F9E300" />}
      {isSF && <Train line="three" amount={NUM_TRAINS.three} color="#D7373F" />}
      {isSF && <Train line="four" amount={NUM_TRAINS.four} color="#009A44" />}
      {!isSF && <Train line="five" amount={NUM_TRAINS.five} color="#00933C" />}
      <span id="hey">Hey, I'm</span>
      <br />
      <span id="name">Kingsley Szeto</span>
      <br />
      <p>
        Website kind of under construction, but thanks for checking in!
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
        I'm a software engineer living in San Francisco.
        I moved out of New York in 2025 and settled into SF.
        I graduated from UC Irvine with a B.S. in Computer Science in 2022.
      </span>
    </div>
  );
}
export default AboutMe;
