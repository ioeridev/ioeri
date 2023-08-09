import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const CubeBox = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.cubeBoxRoot], className);
  const wrapperC = classes.cubeBoxWrapper;
  const childC = classes.cubeBox;
  return (
    <span data-loader-type="orbit-rotate" className={rootC} style={rootS}>
      <span className={wrapperC}>
        <span className={childC} />
        <span className={childC} />
      </span>
    </span>
  );
};

CubeBox.classes = classes;
CubeBox.displayName = 'ioeri/loader/CubeBox';
