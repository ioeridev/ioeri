import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const SyncDots = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symmetricRoot], className);
  const childC = classes.syncDots;
  return (
    <span data-loader-type="sync-dots" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

SyncDots.classes = classes;
SyncDots.displayName = 'ioeri/loader/SyncDots';
