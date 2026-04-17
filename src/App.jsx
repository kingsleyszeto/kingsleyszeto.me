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
          className="icon-toggle"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to night mode'}
          onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        >
          <span aria-hidden="true">
            {theme === 'dark' ? (
              <svg className="theme-icon" viewBox="0 0 24 24" role="presentation">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.5 1.5M6.8 17.2l-1.5 1.5M18.7 18.7l-1.5-1.5M6.8 6.8L5.3 5.3" />
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" role="presentation">
                <path d="M20.5 14.8A8.9 8.9 0 1 1 9.2 3.5a7.1 7.1 0 1 0 11.3 11.3z" />
              </svg>
            )}
          </span>
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
