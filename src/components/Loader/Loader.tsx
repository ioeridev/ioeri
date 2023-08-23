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
  ModernBuffer,
} from './loaders';
import { LoaderProps } from './Loader.types';
import classes from './Loader.module.css';

export const Loader = (props: LoaderProps) => {
  const { type = 'circle', children, active, rd, ...rest } = props;
  const TypeLoader = {
    atomic: Atomic,
    beat: Beat,
    circle: Circle,
    orbit: Orbit,
    pacman: Pacman,
    pulse: Pulse,
    rises: Rises,
    'classic-buffer': ClassicBuffer,
    'modern-buffer': ModernBuffer,
    'clock-wise': ClockWise,
    'cube-box': CubeBox,
    'line-bar': LineBar,
    'loading-text': LoadingText,
    'orbit-rotate': OrbitRotate,
    'sync-bars': SyncBars,
    'sync-dots': SyncDots,
  }[type];

  const arm_rd = typeof rd === 'number' ? `${rd}px` : rd;

  return (
    <div className={`Loader-root ${classes.parent}`}>
      {children}
      {active && (
        <div
          className={`Loader-wrap ${classes.child}`}
          style={{
            width: children ? 'calc(100% + 3px)' : undefined,
            height: children ? 'calc(100% + 3px)' : undefined,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            cursor: children ? 'not-allowed' : undefined,
            overflow: children ? 'hidden' : undefined,
          }}
        >
          {children && (
            <div
              className={`Loader-wrapp-for-children ${classes.wrapForChildren}`}
              style={{ borderRadius: arm_rd || 'var(--ioeri-rd-sm)' }}
            />
          )}
          <TypeLoader {...rest} />
        </div>
      )}
    </div>
  );
};

Loader.classes = classes;
Loader.displayName = 'ioeri/Loader';
