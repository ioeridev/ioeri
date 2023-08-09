import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const Beat = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.beatRoot], className);
  const childC = classes.beat;
  return (
    <span data-loader-type="beat" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

Beat.classes = classes;
Beat.displayName = 'ioeri/loader/Beat';
