import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const Atomic = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symbox], className);
  const childC = classes.atomic;
  return (
    <span data-loader-type="atomic" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

Atomic.classes = classes;
Atomic.displayName = 'ioeri/loader/Atomic';
