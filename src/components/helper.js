/* eslint-disable prefer-const */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { anime } from 'react-anime';

export const NUM_TRAINS = {
  one: 6,
  two: 4,
  three: 4,
  four: 6,
  five: 6,
};

export const NUM_CARS = 2;

export const DURATION = {
  one: 10500,
  two: 8000,
  three: 8775,
  four: 10000,
  five: 10450,
};

const SPACING = 125 / 1;

export function spawnContent(animationRef) {
  let start = 0;
  const content = document.querySelectorAll('span, p, h3, h4, strong');
  animationRef.current = anime.timeline({
    duration: 1750,
    autoplay: true,
    delay: 250,
  });
  content.forEach((contentItem) => {
    animationRef.current.add({
      targets: contentItem,
      opacity: 1,
    }, start);
    start += 50;
  });
}

export function spawnLines(animationRef) {
  animationRef.current = anime({
    targets: 'svg.route path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 4000,
  });
}

export function spawnClass(animationRef, type) {
  const stations = document.querySelectorAll(`.${type}`);
  let start = 0;
  animationRef.current = anime.timeline({
    duration: 5000,
    autoplay: true,
    delay: 750,
  });
  stations.forEach((station) => {
    animationRef.current.add({
      targets: station,
      opacity: 1,
    }, start);
    start += 250;
  });
}

export function runTrains(line, animationRef, pathRef, pathID) {
  const numTrainsOnLine = Math.floor(NUM_TRAINS[line] / NUM_CARS);
  animationRef.current = [];
  pathRef.current = anime.path(`path#${pathID}`);
  const target = (i) => `.train#line-${line} .train-car#${line + (i)}`;
  for (let i = 0; i < NUM_TRAINS[line]; i++) {
    let offsetAmount = (DURATION[line] / numTrainsOnLine) * Math.floor(i / NUM_CARS) * 2
    + (Math.floor(i) % NUM_CARS) * SPACING;

    setTimeout(() => {
      const animation = anime({
        duration: DURATION[line],
        autoplay: true,
        loop: true,
        direction: 'alternate',
        targets: target(i),
        easing: 'linear',
        translateX: pathRef.current('x'),
        translateY: pathRef.current('y'),
        rotate: pathRef.current('angle'),
      });
      animationRef.current.push(animation);
      document.querySelector(target(i)).style.opacity = 1;
    }, offsetAmount);
  }
}
