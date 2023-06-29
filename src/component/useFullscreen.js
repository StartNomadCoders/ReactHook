import { useEffect, useRef, useState } from 'react';
import { elementType } from 'prop-types';

const useFullscreen = () => {
  const elementRef = useRef('');
  const triggerFull = () => {
    if (elementRef.current) {
      elementRef.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { elementRef, triggerFull, exitFull };
};

function UseFullscreen() {
  const { elementRef, triggerFull, exitFull } = useFullscreen();
  return (
    <div style={{ height: '100vh' }}>
      <div ref={elementRef}>
        <h1>UseFullscreen :: </h1>
        <img
          ref={elementRef}
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          alt="grape"
          width="250"
        />
        <button onClick={triggerFull}>Make Fullscreen</button>
        <button onClick={exitFull}>Make ExitFull</button>
      </div>
    </div>
  );
}

export default UseFullscreen;
