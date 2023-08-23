import React, { CSSProperties } from 'react';

import { setColor, setSize } from '../../core';
import { CLASSNAME, ColorProps, STYLE, SizeProps, arm_Size, ChildrenProps } from '../../core/types';

export type LoaderType =
  | 'pacman'
  | 'orbit'
  | 'circle'
  | 'loading-text'
  | 'sync-bars'
  | 'sync-dots'
  | 'rises'
  | 'atomic'
  | 'pulse'
  | 'classic-buffer'
  | 'modern-buffer'
  | 'orbit-rotate'
  | 'clock-wise'
  | 'cube-box'
  | 'beat'
  | 'line-bar';

export interface LoaderTypeProps {
  /**
   *### Loader Type :
   ```typescript
   type: "circle" | "modern-buffer" | "pacman" | "orbit" | "loading-text" | "sync-bars" | "sync-dots" | "rises" | "atomic" | "pulse" | "classic-buffer" | "orbit-rotate" | "clock-wise" | "cube-box" | "beat" | "line-bar"
   ```
  */
  type?: LoaderType;
  rd?: number | string;
}

export type DESTRUCTURING_getLoaderStyleVarsProps = SizeProps & ColorProps;
export interface getLoaderStyleVarsProps
  extends DESTRUCTURING_getLoaderStyleVarsProps,
    CLASSNAME,
    STYLE {}

type DESTRUCTURING_LoaderProps = { active?: boolean } & DESTRUCTURING_getLoaderStyleVarsProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>;
export type LoaderProps = LoaderTypeProps & DESTRUCTURING_LoaderProps & ChildrenProps;

export const getLoaderStyleVars = (
  order: 'root',
  { size, c }: DESTRUCTURING_getLoaderStyleVarsProps
): { [key: string]: string } => {
  const styleVars: { [key: string]: string } = {};

  switch (order) {
    case 'root':
      styleVars['--Loader-size'] = setSize(size || 'default', 'Loader-size');
      styleVars['--Loader-color'] = setColor(c || 'var(--Loader-color-default)', '');
      return styleVars;

    default:
      return {};
  }
};

/**
 *### EXTENDS_LoaderProps
 * penggunaan untuk komponen parent yang menyertakan Loader sebagai salah satu child dalam sebuah fungsi modular.
 */
export interface EXTENDS_LoaderProps {
  /**
   * **`loading`** memberikan nilai properti `data-loading` pada komponen root dan menampilkan animasi loading.
   *
   */
  loading?: boolean;
  /**
   *### Loader Type :
   ```typescript
   "circle" | "line-bar" | "pacman" | "orbit" | "loading-text" | "sync-bars" | "sync-dots" | "rises" | "atomic" | "pulse" | "classic-buffer" | "orbit-rotate" | "clock-wise" | "cube-box" | "beat"
   ```
  */
  loaderType?: LoaderType;
  /**
   * **getStyleLoader**
   *
   * mengatur type, ukuran, dan warna untuk loader
   */
  getStyleLoader?: {
    type?: LoaderType;
    size?: arm_Size | number;
    color?: CSSProperties['color'];
  };
}
