import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const LoadingText = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.loadingText], className);
  const childC = classes.loadingDots;
  return (
    <span data-loader-type="loading-text" className={rootC} style={rootS}>
      <span className={rootC}>Loading</span>
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

LoadingText.classes = classes;
LoadingText.displayName = 'ioeri/loader/LoadingText';
