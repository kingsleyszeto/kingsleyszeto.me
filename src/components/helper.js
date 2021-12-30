/* eslint-disable no-param-reassign */
import { anime } from 'react-anime';

function runTrains(trains, animationRef, pathRef, pathID, duration, spacing) {
  let delay = 0;
  trains.forEach((train) => {
    pathRef.current = anime.path(`path#${pathID}`);
    animationRef.current = anime({
      targets: `.train#${train}`,
      duration,
      delay,
      translateX: pathRef.current('x'),
      translateY: pathRef.current('y'),
      rotate: pathRef.current('angle'),
      direction: 'alternate',
      autoplay: true,
      loop: true,
      easing: 'linear',
    });
    delay += spacing + Math.random() * 2000 - 1000;
  });
}

export default runTrains;
