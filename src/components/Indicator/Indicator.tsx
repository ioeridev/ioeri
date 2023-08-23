import React, { CSSProperties } from 'react';
import { cnx, setSize } from '../../core';
import {
  CLASSNAME,
  ChildrenProps,
  STYLE,
  SizeProps,
  ViewPortProps,
  arm_Color,
  arm_FloatPosition,
  arm_Size,
} from '../../core/types';
import classes from './Indicator.module.css';

export type IndicatorType = 'bar' | 'dot';

type arm_DESTRUCTURING_getIndicatorStyleVarsProps = {
  /**
   * `type` memiliki beberapa tipe (variant)
   *```typescript
   * type?: "bar" | "dot"
   *```
   *- `default value`: **dot**
   */
  type?: IndicatorType;
  /**
   * **`position`** : untuk menentukan posisi indicator
   *```typescript
   * position?: "top" | "right" | "bottom" | "left" | "top-end" | "top-start" | "right-end" | "right-start" | "bottom-end" | "bottom-start" | "left-end" | "left-start"
   * ```
   *- `default value`: **left**
   */
  position?: arm_FloatPosition;
  /**
   * `offset` untuk mengatur jarak `offset indikator` | `jarak ::before`
   *- `syntax` : string | number
   *- `default value`: **0**
   */
  offset?: string | number;
  /**
   * **borderWidth** : mengatur ketebalan border
   *
   * `default syntax` : box-shadow : `borderColor` 0 0 0 `borderWidth`px
   */
  borderWidth?: string;
  /**
   * **borderWidth** : mengatur ketebalan border
   *
   * `default syntax` : box-shadow : `borderColor` 0 0 0 `borderWidth`px
   */
  borderColor?: arm_Color;
} & SizeProps &
  Pick<ViewPortProps, 'h' | 'w' | 'minH' | 'maxH' | 'minW' | 'maxW'>;

export type DESTRUCTURING_getIndicatorStyleVarsProps = {
  /**
   * `color` untuk mengatur `warna indikator` | `warna bg ::before`
   *- `syntax` : string
   *
   * `default value`:
   *- `bar`: **ocean blue**
   *- `dot`: **ocean blue**
   */
  c?: CSSProperties['backgroundColor'];
  /**
   * `bordered` untuk mengatur `border indikator` | `border`
   *- `syntax` : boolean
   *
   * `default syntax` : `box-shadow`
   */
  bordered?: boolean;
} & arm_DESTRUCTURING_getIndicatorStyleVarsProps;

export interface IndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    DESTRUCTURING_getIndicatorStyleVarsProps,
    ChildrenProps,
    CLASSNAME,
    STYLE {
  /**
   *### repositioning
   * memberi keleluasaan untuk ulang komponen root indicator
   */
  repositioning?: boolean;
  /**
   *  memberi animasi pada indikator | notifikasi aktif | warning dengan animasi mengembang | untuk perhatian khusus.
   * @see Syntax **`boolean`**
   */
  active?: boolean;
}

/**
 *### EXTENDS_IndicatorProps
 * penggunaan untuk komponen parent yang menyertakan Indicator sebagai salah satu child dalam sebuah fungsi modular.
 *
 * menyertakan :
 * ```typescript
 *  getStyleIndicator?: {}
 * ```
 */
export interface EXTENDS_IndicatorProps {
  /**
   *### indicator
   * untuk menampilkan indicator sebagai parameter notifikasi
   * memberikan nilai properti `data-indicator` pada komponen dan menampilkan indicator | notifikasi.
   * @see Syntax **`boolean`**
   */
  indicator?: boolean;
  /**
   *### indicatorActive
   * memberikan nilai aktif dengan animasi untuk indicator.
   *
   * mengambil perhatian khusus bahwa ada notifikasi penting.
   * @see Syntax **`boolean`**
   */
  indicatorActive?: boolean;
  /**
   * indicatorType
   *
   * memilih type indicator yang kami sediakan
   */
  indicatorType?: IndicatorType;
  /**
   *### indicatorPos
   * mengatur posisi indicator
   */
  indicatorPos?: arm_FloatPosition;
  /**
   * `indicatorOffset` untuk mengatur jarak `offset indikator` | `jarak ::before`
   *- `syntax` : string | number
   *- `default value`: **0**
   */
  indicatorOffset?: string | number;
  /**
   *### indicatorSize
   * mengatur ukuran indicator
   */
  indicatorSize?: arm_Size | number | undefined;
  /**
   *### indicatorColor
   * mengatur warna indicator
   */
  indicatorColor?: CSSProperties['backgroundColor'];
  /**
   *### indicatorBordered
   * menentukan indikator mempunyai tampilan border
   * @see Syntax **`boolean`**
   * @see Default_Syntax **`box-shadow`**
   */
  indicatorBordered?: boolean;

  getStyleIndicator?: {
    color?: CSSProperties['backgroundColor'];
    height?: CSSProperties['height'];
    width?: CSSProperties['width'];
  } & Omit<arm_DESTRUCTURING_getIndicatorStyleVarsProps, 'h' | 'w'>;
}

export const Indicator = (props: IndicatorProps) => {
  const {
    h,
    w,
    c,
    size,
    repositioning,
    className,
    style,
    children,
    offset,
    bordered,
    borderColor,
    borderWidth,
    minH,
    maxH,
    minW,
    maxW,
    active,
    type = 'dot',
    position = 'right-start',
    ...rest
  } = props;

  const getIndicatorStyleVars = (order: 'indicator'): { [key: string]: string } => {
    const styleVars: { [key: string]: string } = {};

    const armIndicatorHeight =
      typeof size === 'number' ? `${size}px` : setSize(size || 'default', 'indicator-h');
    const armIndicatorWidth =
      typeof size === 'number' ? `${size}px` : setSize(size || 'default', 'indicator-w');
    const indicatorHeight = h ?? armIndicatorHeight;
    const indicatorWidth = w ?? armIndicatorWidth;
    const indicatorSpacing = typeof offset === 'number' ? `${offset}px` : offset;
    const armIndicatorOffset = offset ?? indicatorSpacing;

    switch (order) {
      case 'indicator':
        styleVars[`--indicator-${position}-h`] = String(indicatorHeight);
        styleVars[`--indicator-${position}-w`] = String(indicatorWidth);
        styleVars[`--indicator-${position}-t`] = String(
          armIndicatorOffset || 'var(--indicator-offset)'
        );
        styleVars[`--indicator-${position}-r`] = String(
          armIndicatorOffset || 'var(--indicator-offset)'
        );
        styleVars[`--indicator-${position}-b`] = String(
          armIndicatorOffset || 'var(--indicator-offset)'
        );
        styleVars[`--indicator-${position}-l`] = String(
          armIndicatorOffset || 'var(--indicator-offset)'
        );
        styleVars['--indicator-c'] = String(c ?? 'var(--indicator-color-default)');
        bordered && (styleVars['--indicator-bd-w'] = String(borderWidth || '1px'));
        bordered && (styleVars['--indicator-bd-c'] = String(borderColor || '#1a1b1e'));

        styleVars['--_indicator-min-h'] = String(minH ?? 'var(--indicator-min-h)');
        styleVars['--_indicator-min-w'] = String(minW ?? 'var(--indicator-min-w)');
        styleVars['--_indicator-max-h'] = String(maxH ?? 'var(--indicator-max-h)');
        styleVars['--_indicator-max-w'] = String(maxW ?? 'var(--indicator-max-w)');

        return styleVars;

      default:
        return {};
    }
  };

  const rootC = cnx(
    ['Indicator-root', classes.indicator, !repositioning && classes.root],
    className
  );
  const indicatorS = { ...getIndicatorStyleVars('indicator'), ...style };

  const Props: { [key: string]: string } = {};
  Props['data-indicator'] = `${type}`;
  Props['indicator-position'] = `${position}`;
  active && (Props['indicator-active'] = 'true');

  return (
    <>
      <div className={rootC} style={indicatorS} {...rest} {...Props}>
        {children}
      </div>
    </>
  );
};

Indicator.classes = classes;
Indicator.displayName = 'ioeri/Indicator';
