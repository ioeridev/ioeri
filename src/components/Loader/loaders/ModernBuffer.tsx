import React from 'react';
import { getLoaderStyleVarsProps, getLoaderStyleVars } from '../Loader.types';
import { cnx } from '../../../core';
import classes from '../Loader.module.css';

export const ModernBuffer = ({ className, style, ...props }: getLoaderStyleVarsProps) => {
  const rootS = { ...getLoaderStyleVars('root', props), ...style };
  const rootC = cnx([classes.root, classes.symbox], className);
  const childC = classes.modernBufferChild;
  return (
    <span data-loader-type="modern-buffer" className={rootC} style={rootS}>
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
      <span className={childC} />
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

ModernBuffer.classes = classes;
ModernBuffer.displayName = 'ioeri/loader/ModernBuffer';
