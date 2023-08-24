import React, { useEffect, MouseEvent, useRef, useState } from 'react';
import { cnx, setVal } from '../../core';
import {
  AnimatedAllProps,
  AnimatedProps,
  PopOverProps,
  RunningTextOneProps,
  RunningTextTwoProps,
  SkewCardHoverProps,
  TransformProps,
} from './Animated.types';
import classes from './Animated.module.css';

export const Animated = (props: AnimatedAllProps) => {
  const {
    type,
    unstyled,
    className,
    style,
    c,
    bg,
    bd,
    hoverc,
    hoverbg,
    hoverbd,
    cursor,
    rd,
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
    h,
    w,
    minH,
    minW,
    maxH,
    maxW,
    ff,
    fz,
    fw,
    lh,
    lts,
    tt,
    ta,
    td,
    clicked,
    pos,
    centered,
    flex,
    display,
    direct,
    items,
    justify,
    content,
    gap,
    wrap,
    overflow,
    z,
    pointer,
    bdFlt,
    ...rest
  } = props;

  const getStyleVars = (order: 'core'): { [key: string]: string } => {
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
      case 'core':
        if (!unstyled) {
          pos && (styleVars['--animated-pos'] = String(pos));

          display && (styleVars['--animated-dsp'] = String(display));
          wrap && (styleVars['--animated-wrap'] = String(wrap));
          justify && (styleVars['--animated-justify'] = String(justify));
          items && (styleVars['--animated-items'] = String(items));
          content && (styleVars['--animated-content'] = String(content));
          direct && (styleVars['--animated-direct'] = String(direct));

          cursor && (styleVars['--animated-csr'] = String(cursor));
          pointer && (styleVars['--animated-csr'] = String(cursor || 'pointer'));

          c && (styleVars['--animated-c'] = String(c));
          bg && (styleVars['--animated-bg'] = String(bg));
          bd && (styleVars['--animated-bd'] = String(bd));
          overflow && (styleVars['--animated-overfl'] = String(overflow));

          bdFlt && (styleVars['--animated-bd-filter'] = String(bdFlt));

          hoverc && (styleVars['--animated-hover-c'] = String(hoverc));
          hoverbg && (styleVars['--animated-hover-bg'] = String(hoverbg));
          hoverbd && (styleVars['--animated-hover-bd'] = String(hoverbd));

          z && (styleVars['--animated-z'] = String(z));
          styleVars['--animated-gap'] = setVal(gap);

          styleVars['--animated-rd'] = setVal(rd);

          styleVars['--animated-h'] = setVal(h);
          styleVars['--animated-w'] = setVal(w);
          styleVars['--animated-p'] = setVal(p);
          styleVars['--animated-m'] = setVal(m);

          styleVars['--animated-pt'] = setVal(pt);
          styleVars['--animated-pr'] = setVal(pr);
          styleVars['--animated-pb'] = setVal(pb);
          styleVars['--animated-pl'] = setVal(pl);
          styleVars['--animated-py'] = setVal(py);
          styleVars['--animated-px'] = setVal(px);

          styleVars['--animated-mt'] = setVal(mt);
          styleVars['--animated-mr'] = setVal(mr);
          styleVars['--animated-mb'] = setVal(mb);
          styleVars['--animated-ml'] = setVal(ml);
          styleVars['--animated-my'] = setVal(my);
          styleVars['--animated-mx'] = setVal(mx);

          styleVars['--animated-min-h'] = setVal(minH);
          styleVars['--animated-min-w'] = setVal(minW);
          styleVars['--animated-max-h'] = setVal(maxH);
          styleVars['--animated-max-w'] = setVal(maxW);

          ff && (styleVars['--animated-ff'] = String(ff));
          tt && (styleVars['--animated-tt'] = String(tt));
          ta && (styleVars['--animated-ta'] = String(ta));
          td && (styleVars['--animated-td'] = String(td));
          lts && (styleVars['--animated-lts'] = String(lts));

          clicked && (styleVars['--animated-clicked'] = String('var(--_animated-clicked)'));

          if (type === 'transform') {
            styleVars['--animated-pos'] = String(pos || 'relative');
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-h'] = setVal(h || 'auto');
            styleVars['--animated-w'] = setVal(w || 'auto');
          }

          if (fz === 'h1') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
            styleVars['--animated-lh'] = setVal(hand_lh);
          } else if (fz === 'h2') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
            styleVars['--animated-lh'] = setVal(hand_lh);
          } else if (fz === 'h3') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
            styleVars['--animated-lh'] = setVal(hand_lh);
          } else if (fz === 'h4') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
            styleVars['--animated-lh'] = setVal(hand_lh);
          } else if (fz === 'h5') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
            styleVars['--animated-lh'] = setVal(hand_lh);
          } else if (fz === 'h6') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
            styleVars['--animated-lh'] = setVal(hand_lh);
          } else if (fz === 'xs') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
          } else if (fz === 'sm') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
          } else if (fz === 'md') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
          } else if (fz === 'lg') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
          } else if (fz === 'xl') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
          } else if (fz === 'xxl') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
          } else if (fz === 'xxxl') {
            styleVars['--animated-fz'] = setVal(hand_fz);
            styleVars['--animated-fw'] = String(hand_fw);
          } else if (!arm_fz) {
            fz && (styleVars['--animated-fz'] = setVal(fz));
            fw && (styleVars['--animated-fw'] = String(fw));
            lh && (styleVars['--animated-lh'] = String(lh));
          }

          if (centered || flex === 'centered') {
            styleVars['--animated-wrap'] = String(wrap || 'wrap');
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-content'] = String(content || 'center');
            styleVars['--animated-justify'] = String(justify || 'center');
            styleVars['--animated-items'] = String(items || 'center');
          } else if (flex === 'left-center') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'flex-start');
            styleVars['--animated-items'] = String(items || 'center');
            styleVars['--animated-content'] = String(content || 'center');
          } else if (flex === 'right-center') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'flex-end');
            styleVars['--animated-items'] = String(items || 'center');
            styleVars['--animated-content'] = String(content || 'center');
          } else if (flex === 'top-center') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'center');
            styleVars['--animated-items'] = String(items || 'flex-start');
            styleVars['--animated-content'] = String(content || 'flex-start');
          } else if (flex === 'bottom-center') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'center');
            styleVars['--animated-items'] = String(items || 'flex-end');
            styleVars['--animated-content'] = String(content || 'flex-end');
          } else if (flex === 'left-start') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'flex-start');
            styleVars['--animated-items'] = String(items || 'flex-start');
            styleVars['--animated-content'] = String(content || 'flex-start');
          } else if (flex === 'left-end') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'flex-start');
            styleVars['--animated-items'] = String(items || 'flex-end');
            styleVars['--animated-content'] = String(content || 'flex-end');
          } else if (flex === 'right-start') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'flex-end');
            styleVars['--animated-items'] = String(items || 'flex-start');
            styleVars['--animated-content'] = String(content || 'flex-start');
          } else if (flex === 'right-end') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'flex-end');
            styleVars['--animated-items'] = String(items || 'flex-end');
            styleVars['--animated-content'] = String(content || 'flex-end');
          } else if (flex === 'between-center') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-between');
            styleVars['--animated-items'] = String(items || 'center');
            styleVars['--animated-content'] = String(content || 'space-between');
          } else if (flex === 'between-start') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-between');
            styleVars['--animated-items'] = String(items || 'flex-start');
            styleVars['--animated-content'] = String(content || 'space-between');
          } else if (flex === 'between-end') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-between');
            styleVars['--animated-items'] = String(items || 'flex-end');
            styleVars['--animated-content'] = String(content || 'space-between');
          } else if (flex === 'around-center') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-around');
            styleVars['--animated-items'] = String(items || 'center');
            styleVars['--animated-content'] = String(content || 'space-around');
          } else if (flex === 'around-start') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-around');
            styleVars['--animated-items'] = String(items || 'flex-start');
            styleVars['--animated-content'] = String(content || 'space-around');
          } else if (flex === 'around-end') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-around');
            styleVars['--animated-items'] = String(items || 'flex-end');
            styleVars['--animated-content'] = String(content || 'space-around');
          } else if (flex === 'evenly-center') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-evenly');
            styleVars['--animated-items'] = String(items || 'center');
            styleVars['--animated-content'] = String(content || 'stretch');
          } else if (flex === 'evenly-start') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-evenly');
            styleVars['--animated-items'] = String(items || 'flex-start');
            styleVars['--animated-content'] = String(content || 'stretch');
          } else if (flex === 'evenly-end') {
            styleVars['--animated-dsp'] = String(display || 'flex');
            styleVars['--animated-justify'] = String(justify || 'space-evenly');
            styleVars['--animated-items'] = String(items || 'flex-end');
            styleVars['--animated-content'] = String(content || 'stretch');
          }
        }

        return styleVars;

      default:
        return {};
    }
  };

  if (type === 'transform') {
    const {
      hold = 0.1,
      opacity,
      transform,
      transition,
      withoutOpacity,
      children,
      ...transformProps
    } = rest as TransformProps & AnimatedProps;

    const transformRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const windowHeight = window.innerHeight; // Mendapatkan tinggi layar device
      const threshold = windowHeight * hold;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(classes.transformAF);
            } else {
              entry.target.classList.remove(classes.transformAF);
            }
          });
        },
        { rootMargin: `0px 0px -${threshold}px 0px` }
      ); // Menggunakan rootMargin untuk mengatur threshold

      if (transformRef.current) {
        observer.observe(transformRef.current);
      }

      return () => {
        if (transformRef.current) {
          observer.unobserve(transformRef.current);
        }
      };
    }, []);

    const getStyletransformVars = (order: 'transform'): { [key: string]: string } => {
      const styleVars: { [key: string]: string } = {};
      const setTransformDelay =
        typeof transform?.delay === 'number' ? `${transform?.delay}s` : transform?.delay;
      switch (order) {
        case 'transform':
          if (!withoutOpacity) {
            styleVars['--transform-opacity-bf'] = String(opacity || '0');
            styleVars['--transform-opacity-af'] = String('1 !important');
          }
          styleVars['--transform-transition'] = String(
            transition || 'opacity 0.5s ease, all 1s ease'
          );
          styleVars['--transform-before'] = String(transform?.before || 'scale(0)');
          styleVars['--transform-after'] = String(transform?.after || 'scale(1)');
          styleVars['--transform-origin'] = String(transform?.origin || 'bottom');
          styleVars['--transform-delay'] = String(setTransformDelay || '0.3s');

          return styleVars;

        default:
          return {};
      }
    };

    const transformCl = cnx(
      ['ioeri_Animated_Transform', classes.animated, classes.transformBF],
      className
    );
    const transformSt = {
      ...getStyleVars('core'),
      ...getStyletransformVars('transform'),
      ...style,
    };

    return (
      <div ref={transformRef} className={transformCl} style={transformSt} {...transformProps}>
        {children}
      </div>
    );
  }
  if (type === 'skew-card-hover') {
    const {
      children,
      classNames,
      styles,
      noShine,
      getStyleShine,
      offsetShine = 0,
      skew = 12,
      ...offsetShineProps
    } = rest as SkewCardHoverProps & AnimatedProps;

    const [transform, setTransform] = useState<{ rotateX: number; rotateY: number }>({
      rotateX: 0,
      rotateY: 0,
    });
    const [shineTransform, setShineTransform] = useState<{
      translateX: number;
      translateY: number;
    }>({
      translateX: 0,
      translateY: 0,
    });
    const cardShineRef = useRef<HTMLDivElement>(null);

    // Calculate shine translation values based on cursor position and card-shine size
    const offsetShineWValue =
      getStyleShine?.offset?.x || offsetShine + 50 || cardShineRef.current?.offsetWidth || 0;
    const offsetShineHValue =
      getStyleShine?.offset?.y || offsetShine || cardShineRef.current?.offsetHeight || 0;
    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
      const cardBounding = e.currentTarget.getBoundingClientRect();
      const posX = e.clientX - cardBounding.left;
      const posY = e.clientY - cardBounding.top;
      const cardWidth = cardBounding.width;
      const cardHeight = cardBounding.height;

      // Calculate rotation values based on cursor position
      const rotateX = ((posY - cardHeight / 2) / cardHeight) * skew;
      const rotateY = ((posX - cardWidth / 2) / cardWidth) * skew;

      const translateX = posX - offsetShineWValue / (skew / 2);
      const translateY = posY - offsetShineHValue / (skew / 2);

      // Update state
      setTransform({ rotateX, rotateY });
      setShineTransform({ translateX, translateY });
    };

    const handleMouseLeave = () => {
      // Reset transforms when mouse leaves the card
      setTransform({ rotateX: 0, rotateY: 0 });
      setShineTransform({ translateX: 0, translateY: 0 });
    };

    useEffect(() => {
      // Recalculate shine transform on window resize
      const handleWindowResize = () => {
        const translateX = shineTransform.translateX - (offsetShineWValue - 650) / 2;
        const translateY = shineTransform.translateY - (offsetShineHValue - 650) / 2;
        setShineTransform({ translateX, translateY });
      };

      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, [shineTransform, offsetShineWValue, offsetShineHValue]);

    const SCHRootClass = cnx(
      ['ioeri_Animated_skew-card-hover_root', classes.skewcardhover],
      classNames?.root
    );
    const SCHInnerClass = cnx(
      ['ioeri_Animated_skew-card-hover_inner', classes.animated],
      className,
      classNames?.inner
    );
    const SCHShineClass = cnx(['ioeri_Animated_skew-card-hover_shine'], classNames?.shine);

    const arm_ShineFilter = getStyleShine?.blur || 80;
    const hand_ShineFilter =
      typeof arm_ShineFilter === 'number'
        ? `blur(${arm_ShineFilter}px)`
        : `blur(${arm_ShineFilter})`;
    const hand_ShinSize =
      typeof getStyleShine?.size === 'number' ? `${getStyleShine?.size}px` : getStyleShine?.size;
    const hand_Radius = typeof rd === 'number' ? `${rd}px` : rd;

    const hand_ofsetShine = `translate(${shineTransform.translateX}px, ${shineTransform.translateY}px)`;

    return (
      <>
        <div
          className={SCHRootClass}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            height: 'auto',
            width: 'auto',
            background: bg,
            zIndex: 1,
            display: 'block !important',
            overflow: 'hidden !important',
            position: 'relative',
            perspective: '700px !important',
            transform: `perspective(700px) rotateX(${
              transform.rotateX
            }deg) rotateY(${-transform.rotateY}deg)`,
            backgroundRepeat: 'no-repeat',
            transition: 'transform 0.75s ease 0s',
            transformStyle: 'preserve-3d',
            borderRadius: hand_Radius || '16px',
            ...styles?.root,
          }}
        >
          <div
            className={SCHInnerClass}
            style={{
              zIndex: 1,
              position: 'relative',
              borderRadius: hand_Radius || '16px',
              background: 'none !important',
              ...getStyleVars('core'),
              ...style,
              ...styles?.inner,
            }}
            {...offsetShineProps}
          >
            {children}

            {noShine ? null : (
              <div
                className={classes.wrapperShine}
                style={{ borderRadius: hand_Radius || '16px', zIndex: -1 }}
              >
                <div
                  suppressHydrationWarning
                  ref={cardShineRef}
                  className={SCHShineClass}
                  style={{
                    transform: hand_ofsetShine,
                    width: hand_ShinSize || '200px',
                    height: hand_ShinSize || '200px',
                    filter: hand_ShineFilter,
                    backgroundColor: getStyleShine?.color || '#fab005c2',
                    borderRadius: '9999px',
                    opacity: transform.rotateX ? 1 : 0,
                    willChange: 'transform',
                    position: 'absolute',
                    pointerEvents: 'none',
                    overflow: 'hidden',
                    ...styles?.shine,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  if (type === 'pop-over') {
    const {
      children,
      popover,
      onClose,
      variant = 'unstyled',
      trigger = 'hover',
      placement = 'bottom',
      placementOffset,
      getStylePlacement,
      withArrow,
      arrowColor,
      classNames,
      styles,
      ...popoverProps
    } = rest as PopOverProps & AnimatedProps;

    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
      if (trigger === 'click') {
        setShow(!show);
      }
    };

    const handleMouseEnter = () => {
      if (trigger === 'hover') {
        setShow(true);
      }
    };

    const handleMouseLeave = () => {
      if (trigger === 'hover') {
        setShow(false);
      }
    };

    useEffect(() => {
      const handleMouseDown = (event: MouseEvent<Document, globalThis.MouseEvent> | Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setShow(false);
          onClose?.();
        }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setShow(false);
          onClose?.();
        }
        if (event.key === 'Enter' || event.key === ' ') {
          handleClick();
        }
      };

      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [onClose]);

    const getStylePopOverVars = (order: 'popover'): { [key: string]: string } => {
      const styleVars: { [key: string]: string } = {};

      const handleheight = getStylePlacement?.height;
      const handleheightVal = typeof handleheight === 'number' ? `${handleheight}px` : handleheight;

      const handlewidth = getStylePlacement?.width;
      const handlewidthVal = typeof handlewidth === 'number' ? `${handlewidth}px` : handlewidth;

      const handletop = getStylePlacement?.top;
      const handletopVal = typeof handletop === 'number' ? `${handletop}px` : handletop;

      const handleright = getStylePlacement?.right;
      const handlerightVal = typeof handleright === 'number' ? `${handleright}px` : handleright;

      const handlebottom = getStylePlacement?.bottom;
      const handlebottomVal = typeof handlebottom === 'number' ? `${handlebottom}px` : handlebottom;

      const handleleft = getStylePlacement?.left;
      const handleleftVal = typeof handleleft === 'number' ? `${handleleft}px` : handleleft;

      const popoffset = getStylePlacement?.offset || placementOffset;
      const popoffsetVal = typeof popoffset === 'number' ? `${popoffset}px` : popoffset;

      const sizeArrow = getStylePlacement?.arrow?.size;
      const sizeArrowVal = typeof sizeArrow === 'number' ? `${sizeArrow}px` : sizeArrow;

      const PopOverFz = getStylePlacement?.fz;
      const PoPOverFzVal = typeof sizeArrow === 'number' ? `${PopOverFz}px` : PopOverFz;

      const handleArrowT = getStylePlacement?.arrow?.t;
      const handleArrowR = getStylePlacement?.arrow?.r;
      const handleArrowB = getStylePlacement?.arrow?.b;
      const handleArrowL = getStylePlacement?.arrow?.l;

      const handleArrowColor = getStylePlacement?.arrow?.c || arrowColor;
      const handleBGPopOver = getStylePlacement?.bg;

      switch (order) {
        case 'popover':
          PopOverFz && (styleVars['--po-fz'] = String(PoPOverFzVal));
          handleheight && (styleVars.height = String(handleheightVal));
          handlewidth && (styleVars.width = String(handlewidthVal));

          handletop && (styleVars['--po-handle-t'] = String(handletopVal));
          handleright && (styleVars['--po-handle-r'] = String(handlerightVal));
          handlebottom && (styleVars['--po-handle-b'] = String(handlebottomVal));
          handleleft && (styleVars['--po-handle-l'] = String(handleleftVal));
          handleArrowColor && (styleVars['--bg-popoverArrow'] = String(handleArrowColor));
          handleBGPopOver && (styleVars['--po-bg'] = String(handleBGPopOver));

          popoffset && (styleVars['--po-plc-offs'] = String(popoffsetVal));
          sizeArrow && (styleVars['--po-sz-arrow'] = String(sizeArrowVal));

          handleArrowT && (styleVars['--arrow-of-t'] = String(handleArrowT));
          handleArrowR && (styleVars['--arrow-of-r'] = String(handleArrowR));
          handleArrowB && (styleVars['--arrow-of-b'] = String(handleArrowB));
          handleArrowL && (styleVars['--arrow-of-l'] = String(handleArrowL));

          trigger === 'hover' && (styleVars['--po-plc-cntn'] = String(''));

          return styleVars;

        default:
          return {};
      }
    };

    const PORootClass = cnx(
      ['ioeri_Animated_pop-over_root', classes.popoverroot],
      classNames?.root
    );

    const POTriggerClass = cnx(
      [
        'ioeri_Animated_pop-over_trigger',
        classes.popovertrigger,
        classes.popoverhead,
        classes.animated,
      ],
      className,
      classNames?.trigger
    );
    const POstyle = {
      ...getStyleVars('core'),
      ...getStylePopOverVars('popover'),
      ...style,
      ...styles?.trigger,
    };

    const POpopoverClass = cnx(
      [
        'ioeri_Animated_pop-over_pop-over',
        classes.popoverdropdown,
        show && classes.popoverbody,
        withArrow && classes.popoverArrow,
      ],
      classNames?.popover
    );

    // Variabel untuk menyimpan properti tambahan
    const additionalProps: { [key: string]: string } = {};
    show && (additionalProps['data-popover-open'] = 'true');
    additionalProps['data-trigger'] = `${trigger}`;
    additionalProps['data-placement'] = `${getStylePlacement?.placement || placement}`;
    additionalProps['data-variant'] = `${getStylePlacement?.variant || variant}`;

    return (
      <div ref={ref} className={PORootClass} style={styles?.root} {...additionalProps}>
        <div
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label={`trigger-${trigger}`}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          role="button"
          tabIndex={0}
          className={POTriggerClass}
          style={POstyle}
          {...popoverProps}
        >
          {children}
        </div>
        {show && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label={`pop-over_${trigger}`}
            className={POpopoverClass}
            style={{
              ...getStylePopOverVars('popover'),
              ...styles?.popover,
            }}
          >
            {popover}
          </div>
        )}
      </div>
    );
  }
  if (type === 'running-text-1') {
    const {
      placeholders,
      delayAfterAnimation = 1000,
      minDelay = 200,
      maxDelay = 200,
      ...runningtextone
    } = rest as RunningTextOneProps & AnimatedProps;
    const elementRef = useRef<HTMLDivElement>(null);

    const RT1rC = cnx(['ioeri_Animated_running-text-1', classes.animated], className);
    const RT1Rs = { ...getStyleVars('core'), ...style };

    useEffect(() => {
      const getRandomDelayBetween = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1) + min);

      const setTextContent = (element: HTMLElement, text: string) => {
        const el = element as HTMLElement & { textContent?: string };
        el.textContent = text;
      };

      const animatedRunningTextOne = (
        currentText: string[],
        remainingText: string[],
        element: HTMLElement,
        onAnimationEnd: (placeholder: string, element: HTMLElement) => void
      ) => {
        if (!remainingText.length) {
          typeof onAnimationEnd === 'function' && onAnimationEnd(currentText.join(''), element);
          return;
        }

        currentText.push(remainingText.shift() ?? '');

        setTimeout(
          () => {
            setTextContent(element, currentText.join(''));
            animatedRunningTextOne(currentText, remainingText, element, onAnimationEnd);
          },
          getRandomDelayBetween(minDelay, maxDelay)
        );
      };

      const animatePlaceholder = (
        element: HTMLElement,
        placeholder: string,
        onAnimationEnd: (placeholder: string, element: HTMLElement) => void
      ) => {
        animatedRunningTextOne([], placeholder.split(''), element, onAnimationEnd);
      };

      const onAnimationEnd = (placeholder: string, element: HTMLElement) => {
        setTimeout(() => {
          let newPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];

          do {
            newPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
          } while (placeholder === newPlaceholder);

          animatePlaceholder(element, newPlaceholder, onAnimationEnd);
        }, delayAfterAnimation);
      };

      if (elementRef.current) {
        animatePlaceholder(elementRef.current, placeholders[0], onAnimationEnd);
      }
    }, []);

    return (
      <div className={RT1rC} style={RT1Rs} {...runningtextone}>
        <div ref={elementRef} />
      </div>
    );
  }
  if (type === 'running-text-2') {
    const {
      placeholders,
      speed = 25,
      ...runningtexttwo
    } = rest as RunningTextTwoProps & AnimatedProps;

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const currentPosition = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);

    useEffect(() => {
      const container = containerRef.current;
      const inner = contentRef.current;

      if (!container || !inner) return;

      const containerWidth = container.offsetWidth;
      const contentWidth = inner.offsetWidth;

      if (containerWidth >= contentWidth) return;

      const animate = (timestamp: number) => {
        if (!lastTimeRef.current) {
          lastTimeRef.current = timestamp;
        }

        const elapsed = timestamp - lastTimeRef.current;

        if (elapsed >= speed) {
          lastTimeRef.current = timestamp - (elapsed % speed);
          currentPosition.current -= Math.floor(elapsed / speed);

          if (currentPosition.current <= -contentWidth) {
            currentPosition.current = containerWidth;
          }

          inner.style.transform = `translateX(${currentPosition.current}px)`;
        }

        animationFrameId.current = requestAnimationFrame(animate);
      };

      animationFrameId.current = requestAnimationFrame(animate);

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }, [speed]);

    const RT2rC = cnx(['ioeri_Animated_running-text-2', classes.animated], className);
    const RT2Rs = { ...getStyleVars('core'), ...style };

    return (
      <div className={RT2rC} style={RT2Rs} {...runningtexttwo}>
        <div ref={containerRef} style={{ width: '100%', overflow: 'hidden' }}>
          <div ref={contentRef} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {placeholders}
          </div>
        </div>
      </div>
    );
  }

  if (!type) {
    throw new Error("Prop 'type' is required for Animated type. You Must Define Animated type!");
  }

  return type;
};

Animated.classes = classes;
Animated.displayName = 'ioeri/Animated';
