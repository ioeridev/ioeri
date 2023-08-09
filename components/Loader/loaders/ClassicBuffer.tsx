import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const ClassicBuffer = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symbox], className);
  const childC = classes.classicBuffer;
  return (
    <span data-loader-type="classic-buffer" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
    </span>
  );
};

ClassicBuffer.classes = classes;
ClassicBuffer.displayName = 'ioeri/loader/ClassicBuffer';
