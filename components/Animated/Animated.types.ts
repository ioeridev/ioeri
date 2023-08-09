import React from 'react';
import { _STRING } from '../../core';
import { RecordClassNames, RecordStyles, arm_FloatPosition } from '../../core/types';
import { DESTRUCTURING_CoreProps } from '../Core';

export type TransformProps = {
  /**
   *### opacity is number
   *```js
   * value : 0.1 - 1
   * default_value : 1 (for before animation)
   *```
   */
  opacity?: number;
  /**
   *### hold is number
   *```js
   * value : 0.1 - 1
   * default_value : 0.1
   *```
   */
  hold?: number;
  /**
   *```js
   * default_value :
   * "opacity 0.5s ease, all 1s ease"
   *```
   */
  transition?: string;
  /**
   *### transform is short set transform style
   *```js
   * default_value :
    --transform-before: scale(0);
    --transform-after: scale(1);
    --transform-origin: bottom;
    --transform-delay: 0.3s;
   *```
   */
  transform?: {
    before?: _STRING | 'scale(0)' | 'translateY(6rem)' | 'translateX(-6rem)' | 'translateX(-2rem)';
    after?: _STRING | 'scale(1)' | 'translateX(0)' | 'translateY(0)';
    origin?: _STRING | '0 0' | 'top' | 'right' | 'bottom' | 'left';
    delay?: string | number;
  };
  /**
   *### withoutOpacity is boolean
   *```js
   * default_value :
   * before_animation = 0
   * after_animation = 1
   *```
   */
  withoutOpacity?: boolean;
  children?: React.ReactNode;
} & React.AllHTMLAttributes<HTMLElement>;

export type SkewCardHoverOrder = 'root' | 'shine' | 'inner';
type SkewCardHoverStyleProps = RecordStyles<SkewCardHoverOrder>;
type SkewCardHoverClassProps = RecordClassNames<SkewCardHoverOrder>;
export type SkewCardHoverProps = {
  children?: React.ReactNode;
  /**
   *```js
   * // sample:
   * offsetShine={1500}
   *```
   */
  offsetShine?: number;
  /**
   *```js
   * // sample:
   *  getStyleShine={{
   *    color: 'rgb(199, 40, 239)',
   *    size: '200px',
   *    blur: 80,
   *    offset:{
   *      x:1550,
   *      y:1050
   *    }
   *  }}
   *```
   *
   */
  getStyleShine?: {
    color?: React.CSSProperties['backgroundColor'];
    blur?: string | number;
    size?: string | number;
    offset?: {
      x?: number;
      y?: number;
    };
  };
  noShine?: boolean;
  /**
   *```js
   * // sample:
   * skew={12}
   * default_value : 12
   *```
   */
  skew?: number;
} & React.AllHTMLAttributes<HTMLElement> &
  SkewCardHoverStyleProps &
  SkewCardHoverClassProps;

export type PopOverOrder = 'root' | 'trigger' | 'popover';
export type PopOverVariant = 'unstyled' | 'tooltip';
export type PopOverTrigger = 'click' | 'hover';
type PopOverStyleProps = RecordStyles<PopOverOrder>;
type PopOverClassProps = RecordClassNames<PopOverOrder>;
export type PopOverProps = {
  /**
   *```js
   * trigger: 'click' | 'hover'
   * default_value: 'unstyled'
   *```
   */
  trigger?: PopOverTrigger;
  /**
   *```js
   * variant: 'unstyled' | 'tooltip'
   * default_value: 'unstyled'
   *```
   */
  variant?: PopOverVariant;
  children?: React.ReactNode;
  popover: React.ReactNode;
  withArrow?: boolean;
  arrowColor?: React.CSSProperties['borderColor'];
  /**
   * **`placement`** : menentukan posisi
   *```typescript
   * placement?: "top" | "right" | "bottom" | "left" | "top-end" | "top-start" | "right-end" | "right-start" | "bottom-end" | "bottom-start" | "left-end" | "left-start"
   * default_value: "bottom"
   * ```
   */
  placement?: arm_FloatPosition;
  placementOffset?: string | number;
  /**
   *```js
   * // sample:
   *  getStylePlacement={{
   *    placement: 'top',
   *    top: '200px',
   *    right: 80,
   *    arrow:{
   *      c: 'rgba(0, 0, 0, 0)',
   *      size: 50,
   *      l: 2
   *    }
   *  }}
   *```
   *
   */
  getStylePlacement?: {
    placement?: arm_FloatPosition;
    /**
     *```js
     * variant: 'unstyled' | 'tooltip'
     * default_value: 'unstyled'
     *```
     */
    variant?: PopOverVariant;
    bg?: React.CSSProperties['color'];
    offset?: string | number;
    fz?: string | number;
    height?: string | number;
    width?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
    arrow?: {
      c?: React.CSSProperties['borderColor'];
      size?: string | number;
      t?: number;
      r?: number;
      b?: number;
      l?: number;
    };
  };
  onClose?: () => void;
} & React.AllHTMLAttributes<HTMLElement> &
  PopOverStyleProps &
  PopOverClassProps;

export type RunningTextOneProps = {
  /**
   *```js
   * // sample
   * placeholders={['one', 'two', 'three', 'four', 'five']}
   *```
   */
  placeholders: string[];
  delayAfterAnimation?: number;
  minDelay?: number;
  maxDelay?: number;
} & Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children' | 'placeholder'
>;

export type RunningTextTwoProps = {
  /**
   *```js
   * // sample
   * placeholders={['One Two Three Four Five',]}
   * // *ReactNode
   *```
   */
  placeholders?: React.ReactNode;
  speed?: number;
} & Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children' | 'placeholder'
>;

export type DESTRUCTURING_AnimatedProps = {
  pointer?: boolean;
  bdFlt?: React.CSSProperties['backdropFilter'];
} & DESTRUCTURING_CoreProps;

export type AnimatedProps = DESTRUCTURING_AnimatedProps;

export type AnimatedAllProps =
  | (TransformProps &
      AnimatedProps & {
        /**
         *- `type` untuk menentukan animasi apa yang akan digunakan
         *```js
         *type: "transform" | "skew-card-hover" | "pop-and-over" | "running-text-1" | "running-text-2"
         * initial_value : "transform"
         * root component: <div>
         *```
         */
        type?: 'transform';
      })
  | (SkewCardHoverProps &
      AnimatedProps & {
        /**
         *- `type` untuk menentukan animasi apa yang akan digunakan
         *```js
         *type: "transform" | "skew-card-hover" | "pop-and-over" | "running-text-1" | "running-text-2"
         * initial_value : "skew-card-hover"
         * root component: <div>
         *```
         */
        type?: 'skew-card-hover';
      })
  | (PopOverProps &
      AnimatedProps & {
        /**
         *- `type` untuk menentukan animasi apa yang akan digunakan
         *```js
         *type: "transform" | "skew-card-hover" | "pop-and-over" | "running-text-1" | "running-text-2"
         * initial_value : "pop-and-over"
         * root component: <div>
         *```
         */
        type?: 'pop-over';
      })
  | (RunningTextOneProps &
      AnimatedProps & {
        /**
         *- `type` untuk menentukan animasi apa yang akan digunakan
         *```js
         *type: "transform" | "skew-card-hover" | "pop-and-over" | "running-text-1" | "running-text-2"
         * initial_value : "running-text-1"
         * component_trees: // tidak menerima children
         * <div> // root styles
         *  <div>
         *    {placeholders}
         *  </div>
         * </div>
         *```
         */
        type?: 'running-text-1';
      })
  | (RunningTextTwoProps &
      AnimatedProps & {
        /**
         *- `type` untuk menentukan animasi apa yang akan digunakan
         *```js
         *type: "transform" | "skew-card-hover" | "pop-and-over" | "running-text-1" | "running-text-2"
         * initial_value : "running-text-2"
         * component_trees: // tidak menerima children
         * <div> // root styles
         *  <div>
         *    <div>
         *      {placeholders}
         *    </div>
         *   </div>
         * </div>
         * \*note: ketika anda memilih `running-text-2` anda harus mengatur berbabagi ukuran seperti lebar dan ukuran dari placeholders agar animasi `running-text-2` berfungsi dengan baik.
         *```
         */
        type?: 'running-text-2';
      });
