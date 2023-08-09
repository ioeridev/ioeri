import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const ClockWise = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symbox, classes.clockWiseRoot], className);
  const childC = classes.clockWise;
  return (
    <span data-loader-type="orbit-rotate" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

ClockWise.classes = classes;
ClockWise.displayName = 'ioeri/loader/ClockWise';
