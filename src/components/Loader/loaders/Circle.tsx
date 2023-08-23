import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const Circle = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.circle], className);
  return <span data-loader-type="circle" className={rootC} style={rootS} />;
};

Circle.classes = classes;
Circle.displayName = 'ioeri/loader/Circle';
