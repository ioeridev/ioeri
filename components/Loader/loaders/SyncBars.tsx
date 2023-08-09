import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const SyncBars = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symmetricRoot], className);
  const childC = classes.syncBars;
  return (
    <span data-loader-type="scale-bars" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

SyncBars.classes = classes;
SyncBars.displayName = 'ioeri/loader/SyncBars';
