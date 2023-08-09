import React from 'react';
import {
  Atomic,
  Beat,
  Circle,
  ClassicBuffer,
  ClockWise,
  CubeBox,
  LineBar,
  LoadingText,
  Orbit,
  OrbitRotate,
  Pacman,
  Pulse,
  Rises,
  SyncBars,
  SyncDots,
} from './loaders';
import { LoaderProps } from './Loader.types';
import classes from './Loader.module.css';

export const Loader = (props: LoaderProps) => {
  const { type = 'circle', children, active, ...rest } = props;
  const TypeLoader = {
    atomic: Atomic,
    beat: Beat,
    circle: Circle,
    orbit: Orbit,
    pacman: Pacman,
    pulse: Pulse,
    rises: Rises,
    'classic-buffer': ClassicBuffer,
    'clock-wise': ClockWise,
    'cube-box': CubeBox,
    'line-bar': LineBar,
    'loading-text': LoadingText,
    'orbit-rotate': OrbitRotate,
    'sync-bars': SyncBars,
    'sync-dots': SyncDots,
  }[type];

  return (
    <div className={`Loader-root ${classes.parent}`}>
      {children}
      {active && (
        <div className={`Loader-wrap ${classes.child}`}>
          <TypeLoader {...rest} />
        </div>
      )}
    </div>
  );
};

Loader.classes = classes;
Loader.displayName = 'ioeri/Loader';
