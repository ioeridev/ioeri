import React, { HTMLAttributes } from 'react';
import {
  ClickedProps,
  CursorProps,
  LonghandColoringProps,
  LonghandTextingProps,
  RadiusProps,
  RecordClassNames,
  RecordStyles,
  SizeProps,
  TransitionProps,
  ViewPortProps,
  cnx,
  setRadius,
  setVal,
} from '../../core';
import { Dots } from './openclosebutton/Dots';
import { PlusX } from './openclosebutton/PlusX';
import { BarX } from './openclosebutton/BarX';
import classes from './OpenCloseButton.module.css';

export type OpenCloseButtonType = 'dots' | 'plus-x' | 'bar-x';

export type OpenCloseButtonOrder = 'root' | 'wrapper' | 'leftLabel' | 'inner' | 'rightLabel';

type OpenCloseButtonStyleProps = RecordStyles<OpenCloseButtonOrder>;
type OpenCloseButtonClassProps = RecordClassNames<OpenCloseButtonOrder>;

interface arm_OpenCloseButtonProps {
  transform?: boolean;
  leftLabel?: React.ReactNode;
  rightLabel?: React.ReactNode;
  type?: OpenCloseButtonType;
}

type handle_OpenCloseButtonProps = SizeProps & LonghandColoringProps & ViewPortProps;

export type OpenCloseButtonProps = arm_OpenCloseButtonProps &
  OpenCloseButtonStyleProps &
  OpenCloseButtonClassProps &
  handle_OpenCloseButtonProps &
  ClickedProps &
  RadiusProps &
  CursorProps &
  TransitionProps &
  Pick<LonghandTextingProps, 'ff' | 'fz' | 'fw' | 'lh'> &
  Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'children'>;

export const OpenCloseButton = (props: OpenCloseButtonProps) => {
  const {
    transition,
    type = 'dots',
    c,
    bg,
    bd,
    hoverc,
    hoverbg,
    hoverbd,
    size = 'sm',
    cursor,
    rd,
    t,
    r,
    b,
    l,
    h,
    w,
    mih,
    mah,
    miw,
    maw,
    p,
    pt,
    pr,
    pb,
    pl,
    py,
    px,
    m,
    mt,
    mr,
    mb,
    ml,
    my,
    mx,
    fz,
    ff,
    fw,
    lh,
    transform,
    clicked,
    leftLabel,
    rightLabel,
    style,
    styles,
    className,
    classNames,
    ...rest
  } = props;

  const getOpenCloseStyleVars = (order: 'openclose'): { [key: string]: string } => {
    const styleVars: { [key: string]: string } = {};
    const arm_fz =
      fz === 'h1' ||
      fz === 'h2' ||
      fz === 'h3' ||
      fz === 'h4' ||
      fz === 'h5' ||
      fz === 'h6' ||
      fz === 'xs' ||
      fz === 'sm' ||
      fz === 'md' ||
      fz === 'lg' ||
      fz === 'xl' ||
      fz === 'xxl' ||
      fz === 'xxxl';
    const hand_fz = arm_fz ? `var(--ioeri-fz-${fz})` : fz;
    const hand_fw = arm_fz ? `var(--ioeri-fw-${fz})` : fw;
    const hand_lh = arm_fz ? `var(--ioeri-lh-${fz})` : lh;

    switch (order) {
      case 'openclose':
        styleVars['--oc-c'] = String(c ?? 'var(--oc-color-default)');
        styleVars['--oc-bg'] = String(bg ?? 'var(--oc-bg-default)');
        styleVars['--oc-bd'] = String(bd || 'var(--_oc-bd)');

        hoverc && (styleVars['--oc-hover-c'] = String(hoverc));
        hoverbg && (styleVars['--oc-hover-bg'] = String(hoverbg));
        hoverbd && (styleVars['--oc-hover-bd'] = String(hoverbd));

        styleVars['--oc-transition'] = String(transition ?? 'var(--oc-transition-default)');

        styleVars['--oc-csr'] = String(cursor || 'pointer');

        styleVars['--oc-rd'] = setRadius(rd, `var(--oc-rd-${size})`);

        styleVars['--oc-h'] = String(h || `var(--oc-${size})`);
        styleVars['--oc-w'] = String(w || `var(--oc-${size})`);

        styleVars['--oc-p'] = setVal(p);
        styleVars.paddingTop = setVal(pt);
        styleVars.paddingRight = setVal(pr);
        styleVars.paddingBottom = setVal(pb);
        styleVars.paddingLeft = setVal(pl);
        styleVars.paddingBlock = setVal(py);
        styleVars.paddingInline = setVal(px);

        styleVars['--oc-m'] = setVal(m);
        styleVars.marginTop = setVal(mt);
        styleVars.marginRight = setVal(mr);
        styleVars.marginBottom = setVal(mb);
        styleVars.marginLeft = setVal(ml);
        styleVars.marginBlock = setVal(my);
        styleVars.marginInline = setVal(mx);

        t && (styleVars['--oc-t'] = setVal(t));
        r && (styleVars['--oc-r'] = setVal(r));
        b && (styleVars['--oc-b'] = setVal(b));
        l && (styleVars['--oc-l'] = setVal(l));

        mih && (styleVars['--oc-min-h'] = setVal(mih));
        miw && (styleVars['--oc-min-w'] = setVal(miw));
        mah && (styleVars['--oc-max-h'] = setVal(mah));
        maw && (styleVars['--oc-max-w'] = setVal(maw));

        ff && (styleVars['--oc-ff'] = String(ff));

        if (fz === 'h1') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
          styleVars['--oc-lh'] = setVal(hand_lh);
        } else if (fz === 'h2') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
          styleVars['--oc-lh'] = setVal(hand_lh);
        } else if (fz === 'h3') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
          styleVars['--oc-lh'] = setVal(hand_lh);
        } else if (fz === 'h4') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
          styleVars['--oc-lh'] = setVal(hand_lh);
        } else if (fz === 'h5') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
          styleVars['--oc-lh'] = setVal(hand_lh);
        } else if (fz === 'h6') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
          styleVars['--oc-lh'] = setVal(hand_lh);
        } else if (fz === 'xs') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
        } else if (fz === 'sm') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
        } else if (fz === 'md') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
        } else if (fz === 'lg') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
        } else if (fz === 'xl') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
        } else if (fz === 'xxl') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
        } else if (fz === 'xxxl') {
          styleVars['--oc-fz'] = setVal(hand_fz);
          styleVars['--oc-fw'] = String(hand_fw);
        } else if (!arm_fz) {
          lh && (styleVars['--oc-lh'] = String(lh));
          fw && (styleVars['--oc-fw'] = String(fw));
          fz && (styleVars['--oc-fz'] = String(fz));
        }

        clicked && (styleVars['--oc-clicked'] = String('var(--_oc-clicked)'));

        return styleVars;

      default:
        return {};
    }
  };

  const rootclass = cnx(
    ['openclose-root', classes.openclose, classes.root],
    classNames?.root,
    className
  );
  const rootstyle = {
    ...getOpenCloseStyleVars('openclose'),
    ...styles?.root,
    ...style,
  };

  const wrapperclass = cnx(['openclose-wrapper', classes.wrapper], classNames?.wrapper);

  const leftLabelclass = cnx(['openclose-leftLabel', classes.label], classNames?.leftLabel);

  const innerclass = cnx(['openclose-inner', classes.inner], classNames?.inner);

  const rightLabelclass = cnx(['openclose-rightLabel', classes.label], classNames?.rightLabel);

  const Prop: { [key: string]: string } = {};
  Prop['data-type-openclose'] = `${type}`;
  clicked && (Prop['data-clicked'] = 'true');
  leftLabel && (Prop['data-left-label'] = 'true');
  rightLabel && (Prop['data-right-label'] = 'true');

  const OPENCLOSETYPE = {
    dots: <Dots transform={transform} />,
    'plus-x': <PlusX transform={transform} />,
    'bar-x': <BarX transform={transform} />,
  }[type];

  return (
    <button
      type="button"
      data-button="true"
      className={rootclass}
      style={rootstyle}
      {...rest}
      {...Prop}
    >
      <div className={wrapperclass} style={styles?.wrapper}>
        {leftLabel && (
          <span className={leftLabelclass} style={styles?.leftLabel}>
            {leftLabel}
          </span>
        )}
        <span className={innerclass} style={styles?.inner}>
          {OPENCLOSETYPE}
        </span>
        {rightLabel && (
          <span className={rightLabelclass} style={styles?.rightLabel}>
            {rightLabel}
          </span>
        )}
      </div>
    </button>
  );
};

OpenCloseButton.classes = classes;
OpenCloseButton.displayName = 'ioeri/OpenCloseButton';
