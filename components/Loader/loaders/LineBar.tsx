import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const LineBar = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.lineBarRoot], className);
  const childC = classes.lineBar;
  return (
    <span data-loader-type="line-bar" className={rootC} style={rootS}>
      <span className={childC} />
    </span>
  );
};

LineBar.classes = classes;
LineBar.displayName = 'ioeri/loader/LineBar';
