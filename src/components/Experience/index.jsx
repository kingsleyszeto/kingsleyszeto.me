/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import './style.scss';

import StationSign from '../StationSign';
import Train from '../Train';
import { NUM_TRAINS, runTrains, cancelTrains } from '../helper';

function JobDesc(props) {
  const { title, children, id } = props;
  return (
    <div className="job-desc" id={id}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

const SF_TRAM_COLOR = '#F48FB1';

function Experience({ city }) {
  const isSF = city === 'sf';
  const pathTwo = useRef(null);
  const pathThree = useRef(null);
  const pathFour = useRef(null);
  const pathFive = useRef(null);
  // Reversed-direction companion paths (geometrically drawn end→start)
  const pathTwoR = useRef(null);
  const pathThreeR = useRef(null);
  const pathFourR = useRef(null);
  const pathFiveR = useRef(null);
  const animationRef = useRef(null);

  // Color sets
  const colors = isSF
    ? { two: '#F9E300', three: '#D7373F', four: '#009A44' }
    : { two: '#F9E300', three: '#D7373F', four: '#009A44' };

  useEffect(() => {
    if (isSF) {
      runTrains('five', animationRef, pathFive, 'route-five', pathFiveR, 'route-five-r');
    } else {
      runTrains('two', animationRef, pathTwo, 'route-two', pathTwoR, 'route-two-r');
      runTrains('three', animationRef, pathThree, 'route-three', pathThreeR, 'route-three-r');
      runTrains('four', animationRef, pathFour, 'route-four', pathFourR, 'route-four-r');
    }
    return () => cancelTrains(animationRef);
  }, []);

  return (
    <div id="experience">
      <h2>
        <strong>Experience & Involvements</strong>
      </h2>
      {!isSF && (
        <div className="route-container">
          <svg className="route">
            <path id="route-two" stroke={colors.two} fill="none" d="M -850 315 L 110 315 Q 160 315 160 265 L 160 0 Q 160 -50 210 -50 L 1800 -50" />
            {/* Reverse of route-two — invisible, for reverse-direction trains */}
            <path id="route-two-r" stroke="none" fill="none" d="M 1800 -50 L 210 -50 Q 160 -50 160 0 L 160 265 Q 160 315 110 315 L -850 315" />
          </svg>
        </div>
      )}
      {!isSF && <Train line="two" amount={NUM_TRAINS.two} color={colors.two} />}
      <StationSign
        name="Rippling - Payroll"
        nameSize={30}
        colors={[
          '6CBE45',
          '6CBE45',
          '0039A6',
          '0039A6',
          'FCCC0A',
          'FCCC0A',
          'EE352E',
          'EE352E',
        ]}
        letters="2025NOW!"
        url="https://www.rippling.com"
      />
      <JobDesc id="rippling-payroll" title="Software Engineer">
        <p>
          Building payroll systems at Rippling.
        </p>
      </JobDesc>
      <StationSign
        name="Coinbase - Risk"
        nameSize={32}
        colors={[
          'EE352E',
          '0039A6',
          'EE352E',
          'EE352E',
          'FCCC0A',
          'FCCC0A',
          'B933AD',
          'B933AD',
        ]}
        letters="20222024"
        url="https://www.coinbase.com"
      />
      <JobDesc id="cb-risk-fte" title="Software Engineer">
        <p>
          Making magic internet money less magical for bad actors
          and fraudsters.
        </p>
      </JobDesc>
      {isSF && (
        <div className="route-container">
          <svg className="route">
            <path id="route-five" stroke={SF_TRAM_COLOR} fill="none" d="M -1000 38 L 820 38 Q 855 38 855 8 L 855 -2000" />
            {/* Reverse of route-five — invisible, for reverse-direction trains */}
            <path id="route-five-r" stroke="none" fill="none" d="M 855 -2000 L 855 18 Q 855 48 820 48 L -1000 48" />
          </svg>
        </div>
      )}
      {isSF && <Train line="five" amount={NUM_TRAINS.five} color={SF_TRAM_COLOR} />}
      <StationSign
        name="Coinbase - Card"
        nameSize={32}
        colors={[
          'EE352E',
          'EE352E',
          'EE352E',
          'FF6319',
          'EE352E',
          '0039A6',
          'FCCC0A',
          'FCCC0A',
        ]}
        letters="20212022"
        url="https://www.coinbase.com"
      />
      <JobDesc id="cb-card-fte" title="Software Engineer">
        <p>
          Helped make magic internet money more rewarding. Assisted in the official
          public launch of the Coinbase Card.
        </p>
      </JobDesc>
      <StationSign
        name="Coinbase"
        nameSize={52}
        colors={[
          'FF6319',
          '0039A6',
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
      {!isSF && (
        <div className="route-container">
          <svg className="route">
            <path id="route-three" stroke={colors.three} fill="none" d="M -1005 38 L 795 38 Q 845 38 845 -12 L 845 -2000" />
            {/* Reverse of route-three — invisible, for reverse-direction trains */}
            <path id="route-three-r" stroke="none" fill="none" d="M 845 -2000 L 845 -12 Q 845 38 795 38 L -1005 38" />
          </svg>
        </div>
      )}
      {!isSF && <Train line="three" amount={NUM_TRAINS.three} color={colors.three} />}
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
          organize VenusHacks - UCI&apos;s first women-centric hackathon.
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
          high-school senior 1:1 to develop a college and career plan.
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
      {!isSF && (
        <div className="route-container">
          <svg className="route">
            <path id="route-four" stroke={colors.four} fill="none" d="M -1000 -1637 L 90 -1637 Q 140 -1637 140 -1587 L 140 -740 Q 140 -640 240 -540 L 1240 460" />
            {/* Reverse of route-four — invisible, for reverse-direction trains */}
            <path
              id="route-four-r"
              stroke="none"
              fill="none"
              d="M 1240 460 L 240 -540 Q 140 -640 140 -740 L 140 -1587 Q 140 -1637 90 -1637 L -1000 -1637"
            />
          </svg>
        </div>
      )}
      {!isSF && <Train line="four" amount={NUM_TRAINS.four} color={colors.four} />}
    </div>
  );
}

export default Experience;
