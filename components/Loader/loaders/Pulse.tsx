import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const Pulse = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symbox], className);
  const childC = classes.pulse;
  return (
    <span data-loader-type="pulse" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

Pulse.classes = classes;
Pulse.displayName = 'ioeri/loader/Pulse';
