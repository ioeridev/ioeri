import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const Orbit = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.orbit], className);
  return <span data-loader-type="orbit" className={rootC} style={rootS} />;
};

Orbit.classes = classes;
Orbit.displayName = 'ioeri/loader/Orbit';
