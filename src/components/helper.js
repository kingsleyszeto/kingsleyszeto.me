/* eslint-disable prefer-const */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { anime } from 'react-anime';

export const NUM_TRAINS = {
  one: 6,
  two: 6,
  three: 6,
  four: 6,
  five: 6,
};

export const DURATION = {
  one: 10500,
  two: 8000,
  three: 8775,
  four: 10000,
  five: 10450,
};

// Sample from Exponential(rate) — inter-arrival time for a Poisson process
function sampleExpInterval(rate) {
  return -Math.log(Math.random()) / rate;
}

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

// Poisson-based train runner: 3 trains spawn in each direction independently.
// Inter-arrival times are drawn from Exp(rate) where rate = 3/dur, so on average
// 3 trains are in transit simultaneously per direction.
//
// reversePathRef / reversePathID must point to an invisible SVG path that is the
// geometric reverse of the forward path. Using a separate path element (rather than
// anime's direction:'reverse') is the only reliable way to reverse anime.path()
// traversal, because the library's path-interpolation always samples 0→1 internally.
// eslint-disable-next-line max-len
export function runTrains(line, animationRef, pathRef, pathID, reversePathRef, reversePathID, durationOverride = null) {
  const dur = durationOverride !== null ? durationOverride : DURATION[line];
  // Poisson rate: target ~3 trains in transit at once per direction
  const rate = 3 / dur;

  pathRef.current = anime.path(`path#${pathID}`);
  reversePathRef.current = anime.path(`path#${reversePathID}`);

  // Shared cancellation state across multiple runTrains calls on the same animationRef
  if (!animationRef.current || !Array.isArray(animationRef.current.timeouts)) {
    animationRef.current = { cancelled: false, timeouts: [] };
  }
  const ctx = animationRef.current;

  const NUM_FORWARD = 3;
  const NUM_REVERSE = 3;

  // pRef is either pathRef (forward) or reversePathRef (reverse).
  // Both always use direction:'normal' so anime.path() samples 0→1 correctly.
  const scheduleRun = (trainIndex, pRef, initialDelay) => {
    const selector = `.train#line-${line} .train-car#${line}${trainIndex}`;

    const runOnce = (delay) => {
      if (ctx.cancelled) return;

      const tid = setTimeout(() => {
        if (ctx.cancelled) return;

        const el = document.querySelector(selector);
        if (!el) return;

        el.style.opacity = 1;

        anime({
          duration: dur,
          autoplay: true,
          loop: false,
          direction: 'normal',
          targets: selector,
          easing: 'linear',
          translateX: pRef.current('x'),
          translateY: pRef.current('y'),
          rotate: pRef.current('angle'),
          complete: () => {
            if (ctx.cancelled) return;
            const elNow = document.querySelector(selector);
            if (elNow) elNow.style.opacity = 0;
            // Schedule next spawn using Poisson inter-arrival time
            runOnce(sampleExpInterval(rate));
          },
        });
      }, delay);

      ctx.timeouts.push(tid);
    };

    runOnce(initialDelay);
  };

  // Stagger initial arrivals using Poisson inter-arrival times so trains are
  // spread out from the start rather than all appearing simultaneously.
  let forwardDelay = 0;
  for (let i = 0; i < NUM_FORWARD; i++) {
    scheduleRun(i, pathRef, forwardDelay);
    forwardDelay += sampleExpInterval(rate);
  }

  let reverseDelay = 0;
  for (let i = 0; i < NUM_REVERSE; i++) {
    scheduleRun(NUM_FORWARD + i, reversePathRef, reverseDelay);
    reverseDelay += sampleExpInterval(rate);
  }
}

// Cancel all pending train timeouts (call in useEffect cleanup)
export function cancelTrains(animationRef) {
  if (animationRef.current && Array.isArray(animationRef.current.timeouts)) {
    animationRef.current.cancelled = true;
    animationRef.current.timeouts.forEach(clearTimeout);
    animationRef.current.timeouts = [];
  }
}
