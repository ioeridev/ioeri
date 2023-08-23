import React from 'react';
import { cnx, setVal } from '../../core';
import {
  CoreAllProps,
  CoreProps,
  AnchorProps,
  DivProps,
  FormProps,
  HeadingProps,
  MenuProps,
  OrderedListProps,
  UnOrderedListProps,
  ListItemProps,
  ParagraphProps,
  SpanProps,
  QuoteProps,
  TextareaProps,
  LabelProps,
  InputProps,
  ImgProps,
  SectionProps,
  ArticleProps,
  EmbedProps,
  HeaderProps,
  FooterProps,
  MainProps,
  IframeProps,
  KbdProps,
  LegendProps,
  FieldsetProps,
  NavProps,
  ProgressProps,
  SmallProps,
  SummaryProps,
  DetailsProps,
  SVGProps,
  AudioProps,
  VideoProps,
  StrongProps,
  MenuItemProps,
  BdoProps,
  BlockQuoteProps,
  CaptionProps,
  CenterProps,
  ColProps,
  ColGroupProps,
  BodyProps,
} from './Core.types';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';

import classes from './Core.module.css';

export const Core = (props: CoreAllProps) => {
  const {
    core,
    children,
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
          pos && (styleVars['--core-pos'] = String(pos));

          display && (styleVars['--core-dsp'] = String(display));
          wrap && (styleVars['--core-wrap'] = String(wrap));
          justify && (styleVars['--core-justify'] = String(justify));
          items && (styleVars['--core-items'] = String(items));
          content && (styleVars['--core-content'] = String(content));
          direct && (styleVars['--core-direct'] = String(direct));

          cursor && (styleVars['--core-csr'] = String(cursor));

          c && (styleVars['--core-c'] = String(c));
          bg && (styleVars['--core-bg'] = String(bg));
          bd && (styleVars['--core-bd'] = String(bd));
          overflow && (styleVars['--core-overfl'] = String(overflow));

          hoverc && (styleVars['--core-hover-c'] = String(hoverc));
          hoverbg && (styleVars['--core-hover-bg'] = String(hoverbg));
          hoverbd && (styleVars['--core-hover-bd'] = String(hoverbd));

          z && (styleVars['--core-z'] = String(z));
          styleVars['--core-gap'] = setVal(gap);

          styleVars['--core-rd'] = setVal(rd);

          styleVars['--core-h'] = setVal(h);
          styleVars['--core-w'] = setVal(w);
          styleVars['--core-p'] = setVal(p);
          styleVars['--core-m'] = setVal(m);

          styleVars['--core-pt'] = setVal(pt);
          styleVars['--core-pr'] = setVal(pr);
          styleVars['--core-pb'] = setVal(pb);
          styleVars['--core-pl'] = setVal(pl);
          styleVars['--core-py'] = setVal(py);
          styleVars['--core-px'] = setVal(px);

          styleVars['--core-mt'] = setVal(mt);
          styleVars['--core-mr'] = setVal(mr);
          styleVars['--core-mb'] = setVal(mb);
          styleVars['--core-ml'] = setVal(ml);
          styleVars['--core-my'] = setVal(my);
          styleVars['--core-mx'] = setVal(mx);

          styleVars['--core-min-h'] = setVal(minH);
          styleVars['--core-min-w'] = setVal(minW);
          styleVars['--core-max-h'] = setVal(maxH);
          styleVars['--core-max-w'] = setVal(maxW);

          ff && (styleVars['--core-ff'] = String(ff));
          tt && (styleVars['--core-tt'] = String(tt));
          ta && (styleVars['--core-ta'] = String(ta));
          td && (styleVars['--core-td'] = String(td));
          lts && (styleVars['--core-lts'] = String(lts));

          clicked && (styleVars['--core-clicked'] = String('var(--_core-clicked)'));

          if (!arm_fz) {
            if (core === 'h1') {
              styleVars['--core-fz-default'] = setVal(fz || 'var(--ioeri-fz-h1)');
              styleVars['--core-fw-default'] = String(fw || 'var(--ioeri-fw-h1)');
              styleVars['--core-lh-default'] = String(lh || 'var(--ioeri-lh-h1)');
            } else if (core === 'h2') {
              styleVars['--core-fz-default'] = setVal(fz || 'var(--ioeri-fz-h2)');
              styleVars['--core-fw-default'] = String(fw || 'var(--ioeri-fw-h2)');
              styleVars['--core-lh-default'] = String(lh || 'var(--ioeri-lh-h2)');
            } else if (core === 'h3') {
              styleVars['--core-fz-default'] = setVal(fz || 'var(--ioeri-fz-h3)');
              styleVars['--core-fw-default'] = String(fw || 'var(--ioeri-fw-h3)');
              styleVars['--core-lh-default'] = String(lh || 'var(--ioeri-lh-h3)');
            } else if (core === 'h4') {
              styleVars['--core-fz-default'] = setVal(fz || 'var(--ioeri-fz-h4)');
              styleVars['--core-fw-default'] = String(fw || 'var(--ioeri-fw-h4)');
              styleVars['--core-lh-default'] = String(lh || 'var(--ioeri-lh-h4)');
            } else if (core === 'h5') {
              styleVars['--core-fz-default'] = setVal(fz || 'var(--ioeri-fz-h5)');
              styleVars['--core-fw-default'] = String(fw || 'var(--ioeri-fw-h5)');
              styleVars['--core-lh-default'] = String(lh || 'var(--ioeri-lh-h5)');
            } else if (core === 'h6') {
              styleVars['--core-fz-default'] = setVal(fz || 'var(--ioeri-fz-h6)');
              styleVars['--core-fw-default'] = String(fw || 'var(--ioeri-fw-h6)');
              styleVars['--core-lh-default'] = String(lh || 'var(--ioeri-lh-h6)');
            }
          }

          if (fz === 'h1') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
            styleVars['--core-lh'] = setVal(hand_lh);
          } else if (fz === 'h2') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
            styleVars['--core-lh'] = setVal(hand_lh);
          } else if (fz === 'h3') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
            styleVars['--core-lh'] = setVal(hand_lh);
          } else if (fz === 'h4') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
            styleVars['--core-lh'] = setVal(hand_lh);
          } else if (fz === 'h5') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
            styleVars['--core-lh'] = setVal(hand_lh);
          } else if (fz === 'h6') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
            styleVars['--core-lh'] = setVal(hand_lh);
          } else if (fz === 'xs') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
          } else if (fz === 'sm') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
          } else if (fz === 'md') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
          } else if (fz === 'lg') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
          } else if (fz === 'xl') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
          } else if (fz === 'xxl') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
          } else if (fz === 'xxxl') {
            styleVars['--core-fz'] = setVal(hand_fz);
            styleVars['--core-fw'] = String(hand_fw);
          } else if (!arm_fz) {
            fz && (styleVars['--core-fz'] = setVal(fz));
            fw && (styleVars['--core-fw'] = String(fw));
            lh && (styleVars['--core-lh'] = String(lh));
          }

          if (centered || flex === 'centered') {
            styleVars['--core-wrap'] = String(wrap || 'wrap');
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-content'] = String(content || 'center');
            styleVars['--core-justify'] = String(justify || 'center');
            styleVars['--core-items'] = String(items || 'center');
          } else if (flex === 'left-center') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'flex-start');
            styleVars['--core-items'] = String(items || 'center');
            styleVars['--core-content'] = String(content || 'center');
          } else if (flex === 'right-center') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'flex-end');
            styleVars['--core-items'] = String(items || 'center');
            styleVars['--core-content'] = String(content || 'center');
          } else if (flex === 'top-center') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'center');
            styleVars['--core-items'] = String(items || 'flex-start');
            styleVars['--core-content'] = String(content || 'flex-start');
          } else if (flex === 'bottom-center') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'center');
            styleVars['--core-items'] = String(items || 'flex-end');
            styleVars['--core-content'] = String(content || 'flex-end');
          } else if (flex === 'left-start') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'flex-start');
            styleVars['--core-items'] = String(items || 'flex-start');
            styleVars['--core-content'] = String(content || 'flex-start');
          } else if (flex === 'left-end') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'flex-start');
            styleVars['--core-items'] = String(items || 'flex-end');
            styleVars['--core-content'] = String(content || 'flex-end');
          } else if (flex === 'right-start') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'flex-end');
            styleVars['--core-items'] = String(items || 'flex-start');
            styleVars['--core-content'] = String(content || 'flex-start');
          } else if (flex === 'right-end') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'flex-end');
            styleVars['--core-items'] = String(items || 'flex-end');
            styleVars['--core-content'] = String(content || 'flex-end');
          } else if (flex === 'between-center') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-between');
            styleVars['--core-items'] = String(items || 'center');
            styleVars['--core-content'] = String(content || 'space-between');
          } else if (flex === 'between-start') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-between');
            styleVars['--core-items'] = String(items || 'flex-start');
            styleVars['--core-content'] = String(content || 'space-between');
          } else if (flex === 'between-end') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-between');
            styleVars['--core-items'] = String(items || 'flex-end');
            styleVars['--core-content'] = String(content || 'space-between');
          } else if (flex === 'around-center') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-around');
            styleVars['--core-items'] = String(items || 'center');
            styleVars['--core-content'] = String(content || 'space-around');
          } else if (flex === 'around-start') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-around');
            styleVars['--core-items'] = String(items || 'flex-start');
            styleVars['--core-content'] = String(content || 'space-around');
          } else if (flex === 'around-end') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-around');
            styleVars['--core-items'] = String(items || 'flex-end');
            styleVars['--core-content'] = String(content || 'space-around');
          } else if (flex === 'evenly-center') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-evenly');
            styleVars['--core-items'] = String(items || 'center');
            styleVars['--core-content'] = String(content || 'stretch');
          } else if (flex === 'evenly-start') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-evenly');
            styleVars['--core-items'] = String(items || 'flex-start');
            styleVars['--core-content'] = String(content || 'stretch');
          } else if (flex === 'evenly-end') {
            styleVars['--core-dsp'] = String(display || 'flex');
            styleVars['--core-justify'] = String(justify || 'space-evenly');
            styleVars['--core-items'] = String(items || 'flex-end');
            styleVars['--core-content'] = String(content || 'stretch');
          }
        }

        return styleVars;

      default:
        return {};
    }
  };

  const rootclass = cnx([!unstyled && classes.core], className);
  const rootstyle = { ...getStyleVars('core'), ...style };

  // core type as component root
  if (core === 'body') {
    const { ...bodyProps } = rest as BodyProps & CoreProps;
    return (
      <body className={rootclass} style={rootstyle} {...bodyProps}>
        {children}
      </body>
    );
  }
  if (core === 'section') {
    const { ...sectionProps } = rest as SectionProps & CoreProps;
    return (
      <section className={rootclass} style={rootstyle} {...sectionProps}>
        {children}
      </section>
    );
  }
  if (core === 'main') {
    const { ...mainProps } = rest as MainProps & CoreProps;
    return (
      <main className={rootclass} style={rootstyle} {...mainProps}>
        {children}
      </main>
    );
  }
  if (core === 'header') {
    const { ...headerProps } = rest as HeaderProps & CoreProps;
    return (
      <header className={rootclass} style={rootstyle} {...headerProps}>
        {children}
      </header>
    );
  }
  if (core === 'footer') {
    const { ...footerProps } = rest as FooterProps & CoreProps;
    return (
      <footer className={rootclass} style={rootstyle} {...footerProps}>
        {children}
      </footer>
    );
  }
  if (core === 'article') {
    const { ...articleProps } = rest as ArticleProps & CoreProps;
    return (
      <article className={rootclass} style={rootstyle} {...articleProps}>
        {children}
      </article>
    );
  }
  if (core === 'embed') {
    const { ...embedProps } = rest as EmbedProps & CoreProps;
    return <embed className={rootclass} style={rootstyle} {...embedProps} />;
  }
  if (core === 'a') {
    const { href, target, ...aProps } = rest as AnchorProps & CoreProps;
    return (
      <a href={href} target={target} className={rootclass} style={rootstyle} {...aProps}>
        {children}
      </a>
    );
  }
  if (core === 'button') {
    const { onClick, href, useRouter, type, ...buttonProps } = rest as UnstyledButtonProps &
      CoreProps;

    return (
      <UnstyledButton
        type={type === 'submit' ? 'submit' : 'button'}
        href={href}
        useRouter={useRouter}
        onClick={onClick}
        className={rootclass}
        style={rootstyle}
        {...buttonProps}
      >
        {children}
      </UnstyledButton>
    );
  }
  if (core === 'form') {
    const { ...formProps } = rest as FormProps & CoreProps;
    return (
      <form className={rootclass} style={rootstyle} {...formProps}>
        {children}
      </form>
    );
  }
  if (core === 'nav') {
    const { ...navProps } = rest as NavProps & CoreProps;
    return (
      <nav className={rootclass} style={rootstyle} {...navProps}>
        {children}
      </nav>
    );
  }
  if (core === 'progress') {
    const { ...progressProps } = rest as ProgressProps & CoreProps;
    return (
      <progress className={rootclass} style={rootstyle} {...progressProps}>
        {children}
      </progress>
    );
  }
  if (core === 'span') {
    const { ...spanProps } = rest as SpanProps & CoreProps;
    return (
      <span className={rootclass} style={rootstyle} {...spanProps}>
        {children}
      </span>
    );
  }
  if (core === 'caption') {
    const { ...captionProps } = rest as CaptionProps & CoreProps;
    return (
      <caption className={rootclass} style={rootstyle} {...captionProps}>
        {children}
      </caption>
    );
  }
  if (core === 'center') {
    const { ...centerProps } = rest as CenterProps & CoreProps;
    return (
      <center className={rootclass} style={rootstyle} {...centerProps}>
        {children}
      </center>
    );
  }
  if (core === 'col') {
    const { ...colProps } = rest as ColProps & CoreProps;
    return <col className={rootclass} style={rootstyle} {...colProps} />;
  }
  if (core === 'colgroup') {
    const { ...colgroupProps } = rest as ColGroupProps & CoreProps;
    return (
      <colgroup className={rootclass} style={rootstyle} {...colgroupProps}>
        {children}
      </colgroup>
    );
  }
  if (core === 'bdo') {
    const { ...bdoProps } = rest as BdoProps & CoreProps;
    return (
      <bdo className={rootclass} style={rootstyle} {...bdoProps}>
        {children}
      </bdo>
    );
  }
  if (core === 'small') {
    const { ...smallProps } = rest as SmallProps & CoreProps;
    return (
      <small className={rootclass} style={rootstyle} {...smallProps}>
        {children}
      </small>
    );
  }
  if (core === 'details') {
    const { open, ...detailsProps } = rest as DetailsProps & CoreProps;
    return (
      <details open={open} className={rootclass} style={rootstyle} {...detailsProps}>
        {children}
      </details>
    );
  }
  if (core === 'summary') {
    const { ...summaryProps } = rest as SummaryProps & CoreProps;
    return (
      <summary className={rootclass} style={rootstyle} {...summaryProps}>
        {children}
      </summary>
    );
  }
  if (core === 'menu') {
    const { ...menuProps } = rest as MenuProps & CoreProps;
    return (
      <menu className={rootclass} style={rootstyle} {...menuProps}>
        {children}
      </menu>
    );
  }
  if (core === 'menu-item') {
    const { ...menuitemProps } = rest as MenuItemProps & CoreProps;
    return <menuitem className={rootclass} style={rootstyle} {...menuitemProps} />;
  }
  if (core === 'ol') {
    const { ...olProps } = rest as OrderedListProps & CoreProps;
    return (
      <ol className={rootclass} style={rootstyle} {...olProps}>
        {children}
      </ol>
    );
  }
  if (core === 'ul') {
    const { ...ulProps } = rest as UnOrderedListProps & CoreProps;
    return (
      <ul className={rootclass} style={rootstyle} {...ulProps}>
        {children}
      </ul>
    );
  }
  if (core === 'li') {
    const { ...liProps } = rest as ListItemProps & CoreProps;
    return (
      <li className={rootclass} style={rootstyle} {...liProps}>
        {children}
      </li>
    );
  }
  if (core === 'div') {
    const { ...divProps } = rest as DivProps & CoreProps;
    return (
      <div className={rootclass} style={rootstyle} {...divProps}>
        {children}
      </div>
    );
  }
  if (core === 'strong') {
    const { ...strongProps } = rest as StrongProps & CoreProps;
    return (
      <strong className={rootclass} style={rootstyle} {...strongProps}>
        {children}
      </strong>
    );
  }
  if (core === 'h1') {
    const { role, ...h1Props } = rest as HeadingProps & CoreProps;
    return (
      <h1 role="presentation" className={rootclass} style={rootstyle} {...h1Props}>
        {children}
      </h1>
    );
  }
  if (core === 'h2') {
    const { ...h2Props } = rest as HeadingProps & CoreProps;
    return (
      <h2 className={rootclass} style={rootstyle} {...h2Props}>
        {children}
      </h2>
    );
  }
  if (core === 'h3') {
    const { ...h3Props } = rest as HeadingProps & CoreProps;
    return (
      <h3 className={rootclass} style={rootstyle} {...h3Props}>
        {children}
      </h3>
    );
  }
  if (core === 'h4') {
    const { ...h4Props } = rest as HeadingProps & CoreProps;
    return (
      <h4 className={rootclass} style={rootstyle} {...h4Props}>
        {children}
      </h4>
    );
  }
  if (core === 'h5') {
    const { ...h5Props } = rest as HeadingProps & CoreProps;
    return (
      <h5 className={rootclass} style={rootstyle} {...h5Props}>
        {children}
      </h5>
    );
  }
  if (core === 'h6') {
    const { ...h6Props } = rest as HeadingProps & CoreProps;
    return (
      <h6 className={rootclass} style={rootstyle} {...h6Props}>
        {children}
      </h6>
    );
  }
  if (core === 'p') {
    const { ...pProps } = rest as ParagraphProps & CoreProps;
    return (
      <p className={rootclass} style={rootstyle} {...pProps}>
        {children}
      </p>
    );
  }
  if (core === 'kbd') {
    const { ...kbdProps } = rest as KbdProps & CoreProps;
    return (
      <kbd className={rootclass} style={rootstyle} {...kbdProps}>
        {children}
      </kbd>
    );
  }
  if (core === 'blockquote') {
    const { ...blockquoteProps } = rest as BlockQuoteProps & CoreProps;
    return (
      <blockquote className={rootclass} style={rootstyle} {...blockquoteProps}>
        {children}
      </blockquote>
    );
  }
  if (core === 'q') {
    const { ...qProps } = rest as QuoteProps & CoreProps;
    return (
      <q className={rootclass} style={rootstyle} {...qProps}>
        {children}
      </q>
    );
  }
  if (core === 'iframe') {
    const { title, ...iframeProps } = rest as IframeProps & CoreProps;
    return (
      <iframe title={title} className={rootclass} style={rootstyle} {...iframeProps}>
        {children}
      </iframe>
    );
  }
  if (core === 'label') {
    const { htmlFor, ...labelProps } = rest as LabelProps & CoreProps;
    return (
      <label className={rootclass} style={rootstyle} htmlFor={htmlFor} {...labelProps}>
        {children}
      </label>
    );
  }
  if (core === 'input') {
    const { ...inputProps } = rest as InputProps & CoreProps;
    return <input className={rootclass} style={rootstyle} {...inputProps} />;
  }
  if (core === 'fieldset') {
    const { ...fieldsetProps } = rest as FieldsetProps & CoreProps;
    return (
      <fieldset className={rootclass} style={rootstyle} {...fieldsetProps}>
        {children}
      </fieldset>
    );
  }
  if (core === 'legend') {
    const { ...legendProps } = rest as LegendProps & CoreProps;
    return (
      <legend className={rootclass} style={rootstyle} {...legendProps}>
        {children}
      </legend>
    );
  }
  if (core === 'textarea') {
    const { ...textareaProps } = rest as TextareaProps & CoreProps;
    return <textarea className={rootclass} style={rootstyle} {...textareaProps} />;
  }
  if (core === 'img') {
    const { alt, ...imgProps } = rest as ImgProps & CoreProps;
    return <img alt={alt} className={rootclass} style={rootstyle} {...imgProps} />;
  }
  if (core === 'svg') {
    const { ...svgProps } = rest as SVGProps & CoreProps;
    return (
      <svg className={rootclass} style={rootstyle} {...svgProps}>
        {children}
      </svg>
    );
  }
  if (core === 'audio') {
    const { srcLang, label = '', ...audioProps } = rest as AudioProps & CoreProps;
    return (
      <audio className={rootclass} style={rootstyle} {...audioProps}>
        {children}
        <track kind="captions" srcLang={srcLang} label={label} />
      </audio>
    );
  }
  if (core === 'video') {
    const { srcLang, label = '', ...videoProps } = rest as VideoProps & CoreProps;
    return (
      <video className={rootclass} style={rootstyle} {...videoProps}>
        {children}
        <track kind="captions" srcLang={srcLang} label={label} />
      </video>
    );
  }

  if (!core) {
    throw new Error(
      "Prop 'core' is required for core : component. You Must Define, like a core='div'!"
    );
  }

  return core;
};

Core.classes = classes;
Core.displayName = 'ioeri/Core';
