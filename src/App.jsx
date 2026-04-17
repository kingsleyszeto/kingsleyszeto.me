import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';
import React, { useRef, useEffect, useState } from 'react';
import Content from './components/Content';
import RightRail from './components/RightRail';
import { spawnContent } from './components/helper';

function App() {
  const contentAnimationRef = useRef(null);
  const [city, setCity] = useState('sf');
  const [sceneVersion, setSceneVersion] = useState(0);
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const handleCitySwitch = (next) => {
    if (next === city) return;
    setCity(next);
    setSceneVersion((v) => v + 1);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    spawnContent(contentAnimationRef, 'site');
  }, [city]);

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Container fluid>
      <div className="city-toggle">
        <button type="button" className={city === 'ny' ? 'active' : ''} onClick={() => handleCitySwitch('ny')}>NY</button>
        <button type="button" className={city === 'sf' ? 'active' : ''} onClick={() => handleCitySwitch('sf')}>SF</button>
      </div>
      <div className="theme-toggle">
        <button
          type="button"
          aria-label="Toggle night mode"
          onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? 'Light mode' : 'Night mode'}
        </button>
      </div>
      <Row id="site" className={`city-${city}`} key={`scene-${city}-${sceneVersion}`}>
        <Col className="rail" />
        <Content city={city} />
        <RightRail />
      </Row>
    </Container>
  );
}

export default App;
