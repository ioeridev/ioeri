import React from 'react';

export const Dots = (props: { transform?: boolean }) => {
  const { transform } = props;
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle
        cx="5"
        cy="7.5"
        r="2"
        style={{
          transform: transform ? 'translateX(53%) translateY(-7.8%) scale(1.25)' : 'none',
        }}
      />
      <circle
        cx="12"
        cy="7.5"
        r="2"
        style={{
          transform: transform ? 'translateY(30%) translateX(-41.75%) scale(1.25)' : 'none',
        }}
      />
      <circle
        cx="19"
        cy="7.5"
        r="2"
        style={{
          transform: transform ? 'translateY(30%) translateX(-19.75%) scale(1.25)' : 'none',
        }}
      />
      <circle
        cx="5"
        cy="16.6"
        r="2"
        style={{
          transform: transform ? 'translateY(-36.25%) translateX(24%) scale(1.25)' : 'none',
        }}
      />
      <circle
        cx="12"
        cy="16.6"
        r="2"
        style={{
          transform: transform ? 'translateY(-17.5%) translateX(16.75%) scale(1.25)' : 'none',
        }}
      />
      <circle
        cx="19"
        cy="16.6"
        r="2"
        style={{
          transform: transform ? 'translateY(-55.25%) translateX(-78%) scale(1.25)' : 'none',
        }}
      />
    </svg>
  );
};

Dots.displayName = 'ioeri/openclosebutton/Dots';
