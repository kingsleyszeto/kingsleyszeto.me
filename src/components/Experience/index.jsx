/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import './style.scss';

import { anime } from 'react-anime';
import StationSign from '../StationSign';
import Train from '../Train';

function JobDesc(props) {
  const { title, children, id } = props;
  return (
    <div className="job-desc" id={id}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function Experience() {
  const pathTwo = useRef(null);
  const pathThree = useRef(null);
  const pathFour = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    pathTwo.current = anime.path('path#route-two');
    animationRef.current = anime({
      targets: '.train#tr2',
      translateX: pathTwo.current('x'),
      translateY: pathTwo.current('y'),
      rotate: pathTwo.current('angle'),
      duration: 9000,
      direction: 'alternate',
      autoplay: true,
      loop: true,
      easing: 'linear',
    });
    pathThree.current = anime.path('path#route-three');
    animationRef.current = anime({
      targets: '.train#tr3',
      translateX: pathThree.current('x'),
      translateY: pathThree.current('y'),
      rotate: pathThree.current('angle'),
      duration: 13000,
      direction: 'alternate',
      autoplay: true,
      loop: true,
      easing: 'linear',
    });
    pathFour.current = anime.path('path#route-four');
    animationRef.current = anime({
      targets: '.train#tr4',
      translateX: pathFour.current('x'),
      translateY: pathFour.current('y'),
      rotate: pathFour.current('angle'),
      duration: 10000,
      direction: 'alternate',
      autoplay: true,
      loop: true,
      easing: 'linear',
    });
  }, []);

  return (
    <div id="experience">
      <h2>
        <strong>Experience & Involvements</strong>
      </h2>
      <div className="route-container">
        <svg className="route">
          <path id="route-two" stroke="#B933AD" fill="none" d="M -450 315 L 110 315 Q 160 315 160 265 L 160 0 Q 160 -50 210 -50 L 1500 -50 " />
        </svg>
      </div>
      <Train id="tr2" stroke="#B933AD" />
      <StationSign
        name="Coinbase"
        nameSize={52}
        colors={[
          'FF6319',
          'FCCC0A',
          'A7A9AC',
          'A7A9AC',
          'EE352E',
          'B933AD',
          'EE352E',
          'EE352E',
        ]}
        letters="FALL2021"
        url="https://www.coinbase.com"
      />
      <JobDesc id="cb" title="Software Engineering Intern">
        <p>
          Made magic internet money more magical and accessible, with the Coinbase Card.
        </p>
      </JobDesc>
      <StationSign
        name="Policygenius"
        nameSize={40}
        colors={[
          '808183',
          'EE352E',
          'FF6319',
          'FF6319',
          '00933C',
          '00933C',
          '0039A6',
          'FCCC0A',
        ]}
        letters="SUMM2021"
        url="https://www.policygenius.com"
      />
      <JobDesc id="pg" title="Software Engineering Intern">
        <p>
          Made insurance accessible to millions of Americans.
          Matched by HackNY and done in conjunction with the
          HackNY fellowship.
        </p>
      </JobDesc>
      <StationSign
        name="OpenAQ"
        nameSize={55}
        colors={[
          '0039A6',
          '0039A6',
          'A7A9AC',
          'A7A9AC',
          'EE352E',
          'EE352E',
          'EE352E',
          'B933AD',
        ]}
        letters="SUMM2021"
        url="https://openaq.org/#/"
      />
      <JobDesc id="oaq" title="Developer">
        <p>
          Made open-source air quality data accessible to schools in
          Maryland, easily scaled to more school. Done in conjunction
          with other cool HackNY fellows.
        </p>
      </JobDesc>
      <div className="route-container">
        <svg className="route">
          <path id="route-three" stroke="#EE352E" fill="none" d="M -500 38 L 800 38 Q 850 38 850 -12 L 850 -1400" />
        </svg>
      </div>
      <Train id="tr3" stroke="#EE352E" />
      <StationSign
        name="HackNY"
        nameSize={55}
        colors={[
          'EE352E',
          'EE352E',
          'EE352E',
          '0039A6',
          '6CBE45',
          'A7A9AC',
          'FCCC0A',
          'FF6319',
        ]}
        letters="2021&LYF"
        url="https://hackny.org"
      />
      <JobDesc id="hny" title="AlumNY, Admissions Committee & Previous Fellow">
        <p>
          Learned about tech, social good, and entreneurship with
          an internship at a tech startup, social good project, and
          speaker-series from experts in the field.
        </p>
      </JobDesc>
      <StationSign
        name="Hack At UCI"
        nameSize={43}
        colors={[
          'EE352E',
          'EE352E',
          'FCCC0A',
          'FCCC0A',
          'FCCC0A',
          '00933C',
          '00933C',
        ]}
        letters="2020NOW"
        url="https://hack.ics.uci.edu"
      />
      <JobDesc id="huci" title="Corporate Outreach Director">
        <p>
          Director for the cool people behind HackUCI and ZotHacks
          - UCI&apos;s premiere hackathons. Also worked with WICS to
          setup VenusHacks - UCI&apos;s first women-centric hackathon.
        </p>
      </JobDesc>
      <StationSign
        name="MissionBit"
        nameSize={47}
        colors={[
          'FF6319',
          '0039A6',
          'FCCC0A',
          '010203',
          '0039A6',
          '808183',
          '6CBE45',
        ]}
        letters="MAR AUG"
        url="https://www.missionbit.org"
      />
      <JobDesc id="mb" title="Volunteer">
        <p>
          Aided an instructor-volunteer to teach web development to
          underserved San Fransico high-schoolers. Also mentored a
          college senior 1:1 to develop a college and career plan.
        </p>
      </JobDesc>
      <StationSign
        name="UCI Earth Systems"
        nameSize={27}
        colors={[
          '0039A6',
          '0039A6',
          '0039A6',
          'A7A9AC',
          'B933AD',
          'EE352E',
          'FF6319',
          'FF6319',
        ]}
        letters="20192020"
        url="https://www.ess.uci.edu"
      />
      <JobDesc id="uciess" title="Undergraduate Research Assistant">
        <p>
          Researched hurrican phenomenons using Python data tools guided
          by Professor Mike Pritchard and PhD Candidate Megan Fowler.
        </p>
      </JobDesc>
      <div className="route-container">
        <svg className="route">
          <path id="route-four" stroke="#FCCC0A" fill="none" d="M -300 -1637 L 90 -1637 Q 140 -1637 140 -1587 L 140 -740 Q 140 -640 240 -540 L 1240 460 " />
        </svg>
      </div>
      <Train id="tr4" color="#FCCC0A" />
    </div>
  );
}

export default Experience;
