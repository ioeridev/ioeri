import React from 'react';
import classes from '../OpenCloseButton.module.css';

export const PlusX = (props: { transform?: boolean }) => {
  const { transform } = props;
  return (
    <span className={classes.plusX}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={classes.plusX1}
        style={{
          transform: transform ? 'rotate(-135deg)' : 'none',
        }}
      >
        <path
          d="M39.83,20.83h-11.24c-.79,0-1.42-.64-1.42-1.43V8.17c0-1.75-1.42-3.17-3.17-3.17h0c-1.75,0-3.17,1.42-3.17,3.17v11.24c0,.79-.64,1.43-1.43,1.43H8.17c-1.75,0-3.17,1.42-3.17,3.17h0c0,1.75,1.42,3.17,3.17,3.17h11.24c.79,0,1.43,.64,1.43,1.42v11.24c0,1.75,1.42,3.17,3.17,3.17h0c1.75,0,3.17-1.42,3.17-3.17v-11.24c0-.79,.64-1.42,1.42-1.42h11.24c1.75,0,3.17-1.42,3.17-3.17h0c0-1.75-1.42-3.17-3.17-3.17Z"
          fill="currentColor"
          className={classes.plusXPath}
        />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={classes.plusX2}>
        <path
          d="M27.17,8.35v7.9c0,1.75-1.42,3.17-3.17,3.17h0c-1.75,0-3.17-1.42-3.17-3.17V8.17c0-.87,.36-1.66,.93-2.24,.54-.54,1.28-.88,2.09-.92,1.82-.09,3.32,1.52,3.32,3.34Z"
          fill="currentColor"
          className={classes.plusXPath}
          style={{
            transitionDelay: '0.5s',
            transform: transform ? 'translateY(-50%)' : 'none',
            opacity: transform ? 1 : 0,
          }}
        />
        <path
          d="M8.35,20.83h7.9c1.75,0,3.17,1.42,3.17,3.17h0c0,1.75-1.42,3.17-3.17,3.17H8.17c-.87,0-1.66-.36-2.24-.93-.54-.54-.88-1.28-.92-2.09-.09-1.82,1.52-3.32,3.34-3.32Z"
          fill="currentColor"
          className={classes.plusXPath}
          style={{
            transitionDelay: '0.5s',
            transform: transform ? 'translateX(-50%)' : 'none',
            opacity: transform ? 1 : 0,
          }}
        />
        <path
          d="M24,28.59h0c1.75,0,3.17,1.42,3.17,3.17v8.08c0,.87-.36,1.66-.93,2.24-.54,.54-1.28,.88-2.09,.92-1.82,.09-3.32-1.52-3.32-3.34v-7.9c0-1.75,1.42-3.17,3.17-3.17Z"
          fill="currentColor"
          className={classes.plusXPath}
          style={{
            transitionDelay: '0.5s',
            transform: transform ? 'translateY(50%)' : 'none',
            opacity: transform ? 1 : 0,
          }}
        />
        <path
          d="M43,23.85c.09,1.82-1.52,3.32-3.34,3.32h-7.9c-1.75,0-3.17-1.42-3.17-3.17h0c0-1.75,1.42-3.17,3.17-3.17h8.08c.87,0,1.66,.36,2.24,.93,.54,.54,.88,1.28,.92,2.09Z"
          fill="currentColor"
          className={classes.plusXPath}
          style={{
            transitionDelay: '0.5s',
            transform: transform ? 'translateX(50%)' : 'none',
            opacity: transform ? 1 : 0,
          }}
        />
      </svg>
    </span>
  );
};

PlusX.classes = classes;
PlusX.displayName = 'ioeri/openclosebutton/PlusX';
