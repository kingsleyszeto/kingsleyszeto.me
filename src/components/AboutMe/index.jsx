/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import './style.scss';

import { anime } from 'react-anime';
import StationSign from '../StationSign';
import Train from '../Train';

function AboutMe() {
  const path = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    path.current = anime.path('path#route-one');
    animationRef.current = anime({
      targets: '.train#tr1',
      translateX: path.current('x'),
      translateY: path.current('y'),
      rotate: path.current('angle'),
      duration: 10000,
      direction: 'alternate',
      autoplay: true,
      loop: true,
      easing: 'linear',
    });
  }, []);

  return (
    <div id="about-me">
      <div className="route-container">
        <svg className="route">
          <path id="route-one" stroke="#0039A6" fill="none" d="M -100 -100 L 100 100 Q 150 150 150 200 L 150 2500 " />
        </svg>
      </div>
      <Train id="tr1" color="#0039A6" />
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
