import React from 'react';
import classes from '../OpenCloseButton.module.css';

export const BarX = (props: { transform?: boolean }) => {
  const { transform } = props;
  return (
    <span className={classes.barX}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={classes.barXSVG}>
        <rect
          x="5"
          y="21"
          width="38"
          height="6"
          rx="2"
          ry="2"
          fill="currentColor"
          className={classes.barXPath}
          style={{
            transform: transform ? 'none' : 'translateY(-30%)',
            opacity: transform ? 0 : 1,
          }}
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={classes.barXSVG}
        style={{
          transform: transform ? 'rotate(45deg)' : 'none',
        }}
      >
        <rect x="5" y="21" width="38" height="6" rx="2" ry="2" fill="currentColor" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={classes.barXSVG}
        style={{
          transform: transform ? 'rotate(-45deg)' : 'none',
        }}
      >
        <rect x="5" y="21" width="38" height="6" rx="2" ry="2" fill="currentColor" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={classes.barXSVG}>
        <rect
          x="5"
          y="21"
          width="38"
          height="6"
          rx="2"
          ry="2"
          fill="currentColor"
          className={classes.barXPath}
          style={{
            transform: transform ? 'none' : 'translateY(30%)',
            opacity: transform ? 0 : 1,
          }}
        />
      </svg>
    </span>
  );
};

BarX.classes = classes;
BarX.displayName = 'ioeri/openclosebutton/BarX';
