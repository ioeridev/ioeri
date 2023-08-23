import React from 'react';
import Link, { LinkProps } from 'next/link';
import { cnx, setRadius, setVal } from '../../core';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';
import { Loader, EXTENDS_LoaderProps } from '../Loader';
import { EXTENDS_IndicatorProps, Indicator } from '../Indicator';
import {
  CursorProps,
  InitialFit,
  InitialOrientation,
  InitialSize,
  LonghandColoringProps,
  LonghandTextingProps,
  PositioningProps,
  RadiusProps,
  RecordClassNames,
  RecordStyles,
  ViewPortProps,
  arm_Size,
  getRecordStyleProps,
  _NODE,
} from '../../core/types';
import { AnchorProps, DivProps } from '../Core';
import classes from './NextButton.module.css';

export type NextButtonOrder =
  | 'root'
  | 'wrapper'
  | 'leftSection'
  | 'inner'
  | 'rightSection'
  | 'loader'
  | 'indicator';

export type ButtonStylesNames = 'root' | 'inner' | 'loader' | 'section' | 'label';

export type NextButtonVariant =
  | 'base'
  | 'default'
  | 'filled'
  | 'gradient'
  | 'light'
  | 'outline'
  | 'subtle'
  | 'transparent'
  | 'white';

export type NexButtonGradientOrder = 'from' | 'via' | 'to' | 'deg';

export type NextButtonGradientProps = getRecordStyleProps<NexButtonGradientOrder, 'gradient'>;

type NextButtonStyleProps = RecordStyles<NextButtonOrder>;
type NextButtonClassProps = RecordClassNames<NextButtonOrder>;

type arm_DESTRUCTURING_getNextButtonStyleVarsProps = ViewPortProps &
  LonghandColoringProps &
  LonghandTextingProps &
  RadiusProps &
  CursorProps &
  PositioningProps &
  NextButtonGradientProps;

/**
 *### DESTRUCTURING_getNextButtonStyleVarsProps
 untuk props yang hanya dibutuhkan dalam styleVars
 */
export type DESTRUCTURING_getNextButtonStyleVarsProps = {
  /**
   *### parent component's variant style
   * ```js
   * type NextButtonVariant = "base" | "default" | "filled" | "gradient" | "light" | "outline" | "subtle" | "transparent" | "white"
   * ```
   * ***default value : "base"***
   */
  variant?: NextButtonVariant;
  /**
     *### parent component's size style
     * ```js
     * size?:
      --NextButton-xs: 30px;
      --NextButton-sm: 36px;
      --NextButton-md: 42px;
      --NextButton-lg: 50px;
      --NextButton-xl: 60px;
      --NextButton-xxl: 72px;
      --NextButton-xxxl: 90px;

      --NextButton-fit-xs: 22px;
      --NextButton-fit-sm: 26px;
      --NextButton-fit-md: 30px;
      --NextButton-fit-lg: 34px;
      --NextButton-fit-xl: 40px;
      --NextButton-fit-xxl: 46px;
      --NextButton-fit-xxxl: 54px;

      --NextButton-p-xs: 14px;
      --NextButton-p-sm: 18px;
      --NextButton-p-md: 22px;
      --NextButton-p-lg: 26px;
      --NextButton-p-xl: 32px;
      --NextButton-p-xxl: 38px;
      --NextButton-p-xxxl: 48px;

      --NextButton-p-fit-xs: 7px;
      --NextButton-p-fit-sm: 8px;
      --NextButton-p-fit-md: 10px;
      --NextButton-p-fit-lg: 12px;
      --NextButton-p-fit-xl: 14px;
      --NextButton-p-fit-xxl: 20px;
      --NextButton-p-fit-xxxl: 28px;
     * |
     * (string & {});
     * ```
     * ***default value : "sm"***
     */
  size?: arm_Size | `${InitialFit}-${InitialSize}`;
} & arm_DESTRUCTURING_getNextButtonStyleVarsProps;

/**
 *### getNextButtonStyleVarsProps
 * digunakan dalam beberapa komponen-komponen yang dipisah
 */
export type getNextButtonStyleVarsProps = DESTRUCTURING_getNextButtonStyleVarsProps &
  NextButtonStyleProps &
  NextButtonClassProps;

/**
 *### NextButtonProps
 * dikirimkan ke masing-masing AnchorProps, ButtonProps, DivProps, & Wrapper Komponen
 */
export interface NextButtonProps extends getNextButtonStyleVarsProps {
  /**
   * **`disabled`** memberikan nilai properti `disabled` pada komponen dan mempengaruhi gaya CSS.
   *
   * property disabled memungkinkan komponen tetap ditampilkan namun tidak dapat dipilih.
   */
  disabled?: boolean;
  /**
   * **`clicked`** menghilangkan nilai gaya elemen saat ditekan menggunakan pengubah aktif.
   *
   * property `clicked` mengubah komponen menjadi kaku (diam) saat ditekan.
   */
  clicked?: boolean;
  /**
   * **`leftSection`** mengembalikan nilai `ReactNode` sehingga dapat diisi dengan komponen apapun.
   *
   * tata letak komponen **`leftSection`** akan disesuaikan jaraknya dengan komponen lainnya.
   *
   * **trees**: `root` | `wrapper` | `leftSection` | `inner` | `rightSection`
   *
   * **initial value**: `leftSection`
   *
   * **syntax**: `ReactNode`
   */
  leftSection?: _NODE;
  /**
   * **`rightSection`** mengembalikan nilai `ReactNode` sehingga dapat diisi dengan komponen apapun.
   *
   * tata letak komponen **`rightSection`** akan disesuaikan jaraknya dengan komponen lainnya.
   *
   * **trees**: `root` | `wrapper` | `leftSection` | `inner` | `rightSection`
   *
   * **initial value**: `rightSection`
   *
   * **syntax**: `ReactNode`
   */
  rightSection?: _NODE;
  /**
   *### compact
   * ```js
   * boolean
   * ```
   *- jika ingin membuat komponen berukuran simetris
   *- menghilangkan leftSection dan rightSection
   *- seperti: jika hanya ingin menampilkan icon
   * @syntax boolean : undefined
   */
  compact?: boolean;
  /**
   *### orientation
   * set the component style orientation
   *
   * **notes**:
   *
   * **horizontal orientation**
   ** first section is the left section
   ** last section is the right section
   *
   * **vertical orientation**
   ** first section is the top section
   ** last section is the bottom section
   * ***
   * initial value = 'horizontal'
   */
  orientation?: InitialOrientation;
}

type hand_AnchorProps = AnchorProps & LinkProps;

type hand_ButtonProps = UnstyledButtonProps;

/**
 *### NextButtonAllProps
 * dikirimkan ke komponen utama NextButton
 */
export type NextButtonAllProps =
  | (hand_AnchorProps &
      NextButtonProps & {
        /** diharuskan memilih salah satu **`core`** sebagai komponen induk.
         *- core **`anchor`** sebagai komponen induk.
         *- menggunakan komponen **`Link`** dari `next/link` menghasilkan komponent `a` `HTMLAnchorElement`
         *- meneruskan semua properti `LinkProps` & `AnchorHTMLAttributes<HTMLAnchorElement>`
         *- **order**: `root` | `wrapper` | `leftSection` | `inner` | `rightSection`
         * ```js
         * core: 'anchor' | 'button' | 'div'
         * ```
         * ```js
         * selected: <Link> | <anchor>
         * ```
         *### **initial value**: **`root`**
         * @see [IOERI](https://github.com/ioeridev/ioeri)
         */
        core: 'anchor';
      })
  | (hand_ButtonProps &
      NextButtonProps & {
        /** diharuskan memilih salah satu **`core`** sebagai komponen induk.
         *- core **`button`** sebagai komponen induk.
         *- menggunakan komponen **`button`** `HTMLButtonElement`
         *- meneruskan semua properti `React.ButtonHTMLAttributes<HTMLButtonElement>`
         *- **order**: `root` | `wrapper` | `leftSection` | `inner` | `rightSection`
         * ```js
         * core: 'anchor' | 'button' | 'div'
         * ```
         * ```js
         * selected: <botton>
         * ```
         *### **initial value**: **`root`**
         * @see [IOERI](https://github.com/ioeridev/ioeri)
         */
        core: 'button';
      })
  | (DivProps &
      NextButtonProps & {
        /** diharuskan memilih salah satu **`core`** sebagai komponen induk.
         *- core **`div`** sebagai komponen induk.
         *- menggunakan komponen **`div`** `HTMLDivElement`
         *- meneruskan semua properti `React.AllHTMLAttributes<HTMLElement>`
         *- **order**: `root` | `wrapper` | `leftSection` | `inner` | `rightSection`
         * ```js
         * core: 'anchor' | 'button' | 'div'
         * ```
         * ```js
         * selected: <div>
         * ```
         *### **initial value**: **`root`**
         * @see [IOERI](https://github.com/ioeridev/ioeri)
         */
        core: 'div';
      });

type arm_NextButtonAllProps = EXTENDS_LoaderProps & EXTENDS_IndicatorProps;

/**### Tree Polymorphich Component
 * You have choose 1 of 3 core provided as the parent component.
 *
 * ```js
 * core: 'anchor' | 'button' | 'div'
 *
 * order: 'root' | 'wrapper' | 'leftSection' | 'inner' | 'rightSection'
 *
 * initial_value : null
  // sample
    <NextButton
      href="/next"
      core="button" // "anchor" <Link> | "button" | "div"
      leftSection={<TbSunLow />} // ReactNode
      rightSection={<TbMoon />} // ReactNode
      clicked // boolean - set transform when ::active
      disabled // boolean
      indicator // boolean
      indicatorActive //boolean - set indicator animate (@keyframe)
      indicatorBordered //boolean - set border indicator
      variant="gradient" // type variant background-color
      loading // boolean
      compact // sizing 1x1, remove leftSection & rightSection
      rd="xl" // border-radius
      w="100%" // width
      size="md" // default size
      cursor="wait" // set cursor
      indicatorType="bar" // choose indicator type
      indicatorPos="right-end"
      indicatorSize={18}
      orientation="vertical"
      justify="space-between"
      getStyleIndicator={{ offset: '8px' }}
      getStyleLoader={{ color: 'red', size: 'md' }}
      gradient={{ from: 'red', to: 'orange', deg: '70', via: 'yellow' }}
      styles={{
        root: { backgroundColor: '#c1c2c5' },
        wrapper: { padding: '4px' },
        inner: { fontSize: '32px' },
        loader: { background: 'yellowgreen' },
      }}
      classNames={{
        root: 'class for root component',
        wrapper: 'class for wrapper component',
        leftSection: 'class for left-section component',
        loader: 'class for loader component',
      }}
    >
      NextButton
    </NextButton>
 * ```
 * supports consistent styling even when components are changed.
 ****
 *### props `NextButtonProps` (importable)
 *
 * *anchor props : LinkProps & PropertyAnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>
 *
 * *button props : href? : string & ButtonHTMLAttributes<HTMLButtonElement>
 *
 * *div props : AllHTMLAttributes<HTMLElement>
 *
 *
 * @see [ioeri](https://github.com/ioeridev/ioeri)
 */
export const NextButton = (props: NextButtonAllProps & arm_NextButtonAllProps) => {
  const {
    // root
    h,
    w,
    p,
    py,
    px,
    pt,
    pr,
    pb,
    pl,
    m,
    my,
    mx,
    mt,
    mr,
    mb,
    ml,
    z,
    t,
    r,
    b,
    l,
    c,
    bg,
    bd,
    rd,
    display,
    items,
    pos,
    direct,
    fz,
    fw,
    ff,
    lts,
    ta,
    lh,
    cursor,
    // wrapper
    justify,
    // indicator
    indicator,
    indicatorActive,
    indicatorType = 'bar',
    indicatorPos = 'left',
    indicatorOffset,
    indicatorSize,
    indicatorColor = '#ffb03a',
    indicatorBordered,
    getStyleIndicator,
    getStyleLoader,
    // boolean ** others
    core,
    leftSection,
    rightSection,
    children,
    className,
    classNames,
    style,
    styles,
    size = 'sm',
    variant = 'base',
    orientation = 'horizontal',
    compact,
    clicked,
    gradient,
    loading,
    loaderType = 'atomic',
    ...rest
  } = props;

  /**
   * Mengonversi nilai props menjadi CSS Custom Properties secara lebih generik.
   *
   * Tidak perlu secara manual menetapkan setiap properti yang ingin dikonversi,
   * melainkan hanya mengubah atau menambahkan properti baru di dalam fungsi ini ketika diperlukan.
   */
  const getNextButtonStyleVars = (order: NextButtonOrder): { [key: string]: string } => {
    const styleVars: { [key: string]: string } = {};

    const filterSize = size.replace('fit-', '');
    const gradientDeg = gradient?.deg ? `${gradient?.deg} deg` : '45deg';
    const gradientFrom = gradient?.from ? gradient?.from : 'transparent';
    const gradientVia = gradient?.via ? `${gradient?.via} ,` : '';
    const gradientTo = gradient?.to ? gradient?.to : 'transparent';
    const armGradient = variant === 'gradient'
        ? `linear-gradient(${gradientDeg}, ${gradientFrom}, ${gradientVia} ${gradientTo})`
        : bg || `var(--NextButton-bg-${variant})`;
    const armBackgound = gradient ? armGradient : bg || `var(--NextButton-bg-${variant})`;
    const armHover = gradient ? armGradient : `var(--NextButton-hover-${variant})`;

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
      case 'root':
        styleVars['--NextButton-bg'] = String(armBackgound);
        styleVars['--NextButton-hover'] = String(armHover);
        styleVars['--NextButton-h'] = String(h || `var(--NextButton-height-${size})`);
        styleVars['--NextButton-w'] = String(w || `var(--NextButton-width-${size})`);
        styleVars['--NextButton-px'] = String(px || `var(--NextButton-padding-x-${size})`);
        styleVars['--NextButton-py'] = String(py || `var(--NextButton-padding-y-${size})`);
        styleVars['--NextButton-rd'] = setRadius(rd, `var(--NextButton-rd-${filterSize})`);
        styleVars['--NextButton-ff'] = String(ff || 'var(--_NextButton-ff)');
        styleVars['--NextButton-color'] = String(c || `var(--NextButton-c-${variant})`);

        // TODO: by variant
        variant === 'outline' && (styleVars['box-shadow'] = '0 0 0 1px #fdd040');

        // TODO: by user
        justify && (styleVars['--NextButton-justify'] = String(justify));

        bd && (styleVars['--NextButton-bd'] = String(bd));

        p && (styleVars['--NextButton-p'] = String(p));
        pt && (styleVars['--NextButton-pt'] = String(pt));
        pr && (styleVars['--NextButton-pr'] = String(pr));
        pb && (styleVars['--NextButton-pb'] = String(pb));
        pl && (styleVars['--NextButton-pl'] = String(pl));

        m && (styleVars['--NextButton-m'] = String(m));
        my && (styleVars['--NextButton-my'] = String(my));
        mx && (styleVars['--NextButton-mx'] = String(mx));
        mt && (styleVars['--NextButton-mt'] = String(mt));
        mr && (styleVars['--NextButton-mr'] = String(mr));
        mb && (styleVars['--NextButton-mb'] = String(mb));
        ml && (styleVars['--NextButton-ml'] = String(ml));

        z && (styleVars['--NextButton-z'] = String(z));

        t && (styleVars['--NextButton-t'] = String(t));
        r && (styleVars['--NextButton-r'] = String(r));
        b && (styleVars['--NextButton-b'] = String(b));
        l && (styleVars['--NextButton-l'] = String(l));

        display && (styleVars['--_NextButton-display'] = String(display));
        items && (styleVars['--NextButton-items'] = String(items));
        pos && (styleVars['--_NextButton-position'] = String(pos));
        direct && (styleVars['--NextButton-direction'] = String(direct));

        lts && (styleVars['--NextButton-lts'] = String(lts));
        ta && (styleVars['--NextButton-ta'] = String(ta));
        cursor && (styleVars['--_NextButton-cursor'] = String(cursor));

        if (fz === 'h1') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
          styleVars['--NextButton-lh'] = setVal(hand_lh);
        } else if (fz === 'h2') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
          styleVars['--NextButton-lh'] = setVal(hand_lh);
        } else if (fz === 'h3') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
          styleVars['--NextButton-lh'] = setVal(hand_lh);
        } else if (fz === 'h4') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
          styleVars['--NextButton-lh'] = setVal(hand_lh);
        } else if (fz === 'h5') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
          styleVars['--NextButton-lh'] = setVal(hand_lh);
        } else if (fz === 'h6') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
          styleVars['--NextButton-lh'] = setVal(hand_lh);
        } else if (fz === 'xs') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
        } else if (fz === 'sm') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
        } else if (fz === 'md') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
        } else if (fz === 'lg') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
        } else if (fz === 'xl') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
        } else if (fz === 'xxl') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
        } else if (fz === 'xxxl') {
          styleVars['--NextButton-fz'] = setVal(hand_fz);
          styleVars['--NextButton-fw'] = String(hand_fw);
        } else if (!arm_fz) {
          styleVars['--NextButton-fz'] = String(fz || `var(--NextButton-fz-${filterSize})`);
          fw && (styleVars['--NextButton-fw'] = String(fw));
          lh && (styleVars['--NextButton-lh'] = String(lh));
        }

        return styleVars;

      default:
        return {};
    }
  };

  const rootClass = cnx(
    ['NextButton_root', `variant-${variant}`, `size-${size}`, classes.root],
    classNames?.root,
    className
  );
  const rootStyle = {
    ...getNextButtonStyleVars('root'),
    ...styles?.root,
    ...style,
  };

  const wrapperClass = cnx(['NextButton_wrapper', classes.wrapper], classNames?.wrapper);

  const leftSectionClass = cnx(
    ['NextButton_left_section', classes.section],
    classNames?.leftSection
  );
  const innerClass = cnx(['NextButton_inner', classes.inner], classNames?.inner);
  const rightSectionClass = cnx(
    ['NextButton_right_section', classes.section],
    classNames?.rightSection
  );
  const indicatorClass = cnx(['NextButton_Indicator', classes.wrapp], classNames?.indicator);

  // Variabel untuk menyimpan properti tambahan
  const additionalProps: { [key: string]: string } = {};
  loading && (additionalProps['data-loading'] = 'true');
  clicked && (additionalProps['data-clicked'] = 'true');
  indicator && (additionalProps['data-indicator'] = 'true');
  props.disabled && (additionalProps['data-disabled'] = 'true');
  !compact && (additionalProps['data-orientation'] = `${orientation}`);
  additionalProps['data-size'] = `${size}`;
  additionalProps.variant = variant;
  if (compact) {
    additionalProps['data-compact'] = 'true';
  } else {
    if (!compact && leftSection) {
      additionalProps['data-left-section'] = 'true';
    }
    if (!compact && rightSection) {
      additionalProps['data-right-section'] = 'true';
    }
  }

  // Wrapper and Child Component
  const nextButtonComponent = (
    <>
      {loading && (
        <div className={`NextButton_Loader ${classes.wrapp}`}>
          <Loader
            active={loading}
            type={(loading && getStyleLoader?.type) || loaderType}
            size={
              (loading && getStyleLoader?.size) ||
              'calc(var(--NextButton-h, calc(var(--Loader-size-md) + 8px )) - 8px)'
            }
            c={loading && getStyleLoader?.color}
            style={styles?.loader}
            className={classNames?.loader}
          />
        </div>
      )}
      <div className={wrapperClass} style={styles?.wrapper}>
        {!compact && leftSection && (
          <span data-position="left" className={leftSectionClass} style={styles?.leftSection}>
            {!compact && leftSection}
          </span>
        )}
        <span className={innerClass} style={styles?.inner}>
          {children}
        </span>
        {!compact && rightSection && (
          <span data-position="right" className={rightSectionClass} style={styles?.rightSection}>
            {!compact && rightSection}
          </span>
        )}
      </div>
      {indicator && (
        <Indicator
          repositioning
          active={indicatorActive}
          position={getStyleIndicator?.position || indicatorPos}
          className={indicatorClass}
          type={getStyleIndicator?.type || indicatorType}
          bordered={indicatorBordered}
          borderColor={getStyleIndicator?.borderColor}
          borderWidth={getStyleIndicator?.borderWidth}
          c={getStyleIndicator?.color || indicatorColor}
          h={getStyleIndicator?.height}
          maxH={getStyleIndicator?.maxH}
          maxW={getStyleIndicator?.maxW}
          minH={getStyleIndicator?.minH}
          minW={getStyleIndicator?.minW}
          offset={getStyleIndicator?.offset || indicatorOffset}
          size={getStyleIndicator?.size || indicatorSize}
          style={styles?.indicator}
          w={getStyleIndicator?.width}
        />
      )}
    </>
  );

  // core type as root
  if (core === 'anchor') {
    const {
      onClick,
      href,
      target,
      as,
      rel = 'noopener noreferrer',
      ...anchorProps
    } = rest as hand_AnchorProps & NextButtonProps;
    return (
      <Link
        href={href}
        rel={rel}
        as={as}
        onClick={onClick}
        target={target}
        className={rootClass}
        style={rootStyle}
        {...additionalProps}
        {...anchorProps}
      >
        {nextButtonComponent}
      </Link>
    );
  }

  if (core === 'button') {
    const { onClick, href, useRouter, type, ...buttonProps } = rest as hand_ButtonProps &
      NextButtonProps;

    return (
      <UnstyledButton
        type={type === 'submit' ? 'submit' : 'button'}
        href={href}
        useRouter={useRouter}
        onClick={onClick}
        className={rootClass}
        style={rootStyle}
        {...additionalProps}
        {...buttonProps}
      >
        {nextButtonComponent}
      </UnstyledButton>
    );
  }

  if (core === 'div') {
    const { ...divProps } = rest as DivProps & NextButtonProps;
    return (
      <div className={rootClass} style={rootStyle} {...additionalProps} {...divProps}>
        {nextButtonComponent}
      </div>
    );
  }

  if (!core) {
    throw new Error(
      "Prop 'core' is required for NextButton core. You Must Define NextButton core!"
    );
  }

  return core;
};

NextButton.classes = classes;
NextButton.displayName = 'ioeri/NextButton';
