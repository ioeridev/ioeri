import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const OrbitRotate = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symbox, classes.orbitRotateRoot], className);
  const childC = classes.orbitRotate;
  return (
    <span data-loader-type="orbit-rotate" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

OrbitRotate.classes = classes;
OrbitRotate.displayName = 'ioeri/loader/OrbitRotate';
