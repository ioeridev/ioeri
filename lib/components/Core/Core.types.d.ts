/// <reference types="react" />
import { AnchorTargetsProps, ClickedProps, CursorProps, LonghandColoringProps, LonghandTextingProps, PositioningProps, RadiusProps, TransitionProps, ViewPortProps } from '../../core';
export type SRCLANG = 'auto' | 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh' | 'ar' | 'id' | 'it' | 'ko' | 'pt' | 'ru' | 'th' | 'vi' | 'nl' | 'tr' | 'sv' | 'pl' | 'hi' | 'no' | 'fi' | 'cs' | 'da' | 'el' | 'he' | 'hu' | 'ro' | 'sk' | 'uk' | (string & {});
export type LABEL = '' | (string & {});
export type BodyProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
export type SectionProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;
export type MainProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;
export type HeaderProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;
export type FooterProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;
export type KbdProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;
export type NavProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;
export type SmallProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;
export type DetailsProps = React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
export type SummaryProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type AnchorProps = AnchorTargetsProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target'>;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;
export type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export type MenuProps = React.MenuHTMLAttributes<HTMLMenuElement>;
export type MenuItemProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type OrderedListProps = React.OlHTMLAttributes<HTMLOListElement>;
export type UnOrderedListProps = React.HTMLAttributes<HTMLUListElement>;
export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;
export type ParagraphProps = React.AllHTMLAttributes<HTMLParagraphElement>;
export type StrongProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type SpanProps = React.AllHTMLAttributes<HTMLSpanElement>;
export type BlockQuoteProps = React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
export type QuoteProps = React.QuoteHTMLAttributes<HTMLQuoteElement>;
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type ArticleProps = React.AllHTMLAttributes<HTMLElement>;
export type EmbedProps = React.EmbedHTMLAttributes<HTMLEmbedElement>;
export type IframeProps = React.IframeHTMLAttributes<HTMLIFrameElement>;
export type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
export type LegendProps = React.HTMLAttributes<HTMLLegendElement>;
export type BdoProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type AudioProps = {
    /**
     * ```js
     * 'en': Inggris
     * 'es': Spanyol
     * 'fr': Prancis
     * 'de': Jerman
     * 'ja': Jepang
     * 'zh': Mandarin
     * 'ar': Arab
     * 'id': Indonesia
     * 'it': Italia
     * 'ko': Korea
     * 'pt': Portugis
     * 'ru': Rusia
     * 'th': Thailand
     * 'vi': Vietnam
     * 'nl': Belanda
     * 'tr': Turki
     * 'sv': Swedia
     * 'pl': Polandia
     * 'hi': Hindi
     * 'no': Norwegia
     * 'fi': Finlandia
     * 'cs': Ceko
     * 'da': Denmark
     * 'el': Yunani
     * 'he': Ibrani
     * 'hu': Hungaria
     * 'ro': Rumania
     * 'sk': Slovakia
     * 'uk': Ukraina
        ```
     */
    srcLang?: SRCLANG;
    label?: LABEL;
} & React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
export type VideoProps = {
    /**
     * ```js
     * 'en': Inggris
     * 'es': Spanyol
     * 'fr': Prancis
     * 'de': Jerman
     * 'ja': Jepang
     * 'zh': Mandarin
     * 'ar': Arab
     * 'id': Indonesia
     * 'it': Italia
     * 'ko': Korea
     * 'pt': Portugis
     * 'ru': Rusia
     * 'th': Thailand
     * 'vi': Vietnam
     * 'nl': Belanda
     * 'tr': Turki
     * 'sv': Swedia
     * 'pl': Polandia
     * 'hi': Hindi
     * 'no': Norwegia
     * 'fi': Finlandia
     * 'cs': Ceko
     * 'da': Denmark
     * 'el': Yunani
     * 'he': Ibrani
     * 'hu': Hungaria
     * 'ro': Rumania
     * 'sk': Slovakia
     * 'uk': Ukraina
        ```
     */
    srcLang?: SRCLANG;
    label?: LABEL;
} & React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export type ProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement>;
export type SVGProps = React.SVGProps<SVGSVGElement>;
export type CaptionProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type CenterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type ColProps = React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
export type ColGroupProps = React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
export type arm_CoreProps = LonghandColoringProps & ClickedProps & ViewPortProps & RadiusProps & CursorProps & TransitionProps & PositioningProps & LonghandTextingProps;
export type DESTRUCTURING_CoreProps = arm_CoreProps & {
    unstyled?: boolean;
    centered?: boolean;
    flex?: 'left-center' | 'centered' | 'right-center' | 'top-center' | 'bottom-center' | 'left-start' | 'left-end' | 'right-start' | 'right-end' | 'between-center' | 'between-start' | 'between-end' | 'around-center' | 'around-start' | 'around-end' | 'evenly-center' | 'evenly-start' | 'evenly-end';
};
export type CoreProps = {
    children?: React.ReactNode;
} & DESTRUCTURING_CoreProps;
/**
 *### CoreAllProps
 * dikirimkan ke komponen utama CoreProps
 */
export type CoreAllProps = (BodyProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <body> | body
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'body';
}) | (SectionProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <section> | Section
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'section';
}) | (MainProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <main> | Main
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'main';
}) | (AnchorProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <a> | Anchor
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'a';
}) | (CenterProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <center> | center
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'center';
}) | (CaptionProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <caption> | caption
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'caption';
}) | (ColProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <col> | col
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'col';
}) | (ColGroupProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <colgroup> | colgroup
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'colgroup';
}) | (ArticleProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <article> | Article
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'article';
}) | (ButtonProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <button>| button
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'button';
}) | (DivProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <div> | div
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'div';
}) | (EmbedProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <embed> | Embed
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'embed';
}) | (SpanProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <span> | Span
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'span';
}) | (FormProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <form> | Form
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'form';
}) | (ParagraphProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <p> | Paragraph
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'p';
}) | (MenuProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <menu> | Menu
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'menu';
}) | (MenuItemProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <menuitem> | Menuitem > tidak menerima children
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'menu-item';
}) | (IframeProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <iframe> | iframe
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'iframe';
}) | (OrderedListProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <ol> | OrderedList
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'ol';
}) | (UnOrderedListProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <ul> | UnOrderedList
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'ul';
}) | (ListItemProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <li> | ListItems
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'li';
}) | (HeadingProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <h1> | Heading-1
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'h1';
}) | (HeadingProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <h2> | Heading-2
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'h2';
}) | (HeadingProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <h3> | Heading-3
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'h3';
}) | (HeadingProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <h4> | Heading-4
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'h4';
}) | (HeadingProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <h5> | Heading-5
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'h5';
}) | (HeadingProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <h6> | Heading-6
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'h6';
}) | (SmallProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <small> | small
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'small';
}) | (StrongProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <strong> | strong (bold)
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'strong';
}) | (KbdProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <kbd> | kbd
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'kbd';
}) | (BdoProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <bdo> | bdo
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'bdo';
}) | (DetailsProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <details> | details
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'details';
}) | (SummaryProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <summary> | summary
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'summary';
}) | (QuoteProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <q> | Quote
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'q';
}) | (BlockQuoteProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <blockquote cite="http://..."> | BlockQuote
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'blockquote';
}) | (LabelProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <label> | Label
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'label';
}) | (InputProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <input> | Input
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'input';
}) | (TextareaProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <textarea> | Textarea
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'textarea';
}) | (AudioProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <audio>{children}<track /></audio> | audio
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'audio';
}) | (VideoProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <video>{children}<track /></video> | video
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'video';
}) | (ImgProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <img> | Textarea
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'img';
}) | (SVGProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <svg> | svg
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'svg';
}) | (ProgressProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <progress> | progress
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'progress';
}) | (FieldsetProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <fieldset> | fieldset
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'fieldset';
}) | (LegendProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <legend> | legend
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'legend';
}) | (NavProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <nav> | nav
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'nav';
}) | (HeaderProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <header> | Header
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'header';
}) | (FooterProps & CoreProps & {
    /**
     *- Meneruskan semua properti valid dari masing-masing component
     * ```js
     * core: "form" | "label" | "summary" | "button" | "article" | "img" | "main" | "menu" | "menu-item" | "a" | "body" | "section" | "div" | "p" | "iframe" | "ol" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "h6" | "small" | "kbd" | "bdo" | "q" | "blockquote" | "svg" | "details" | "details" | "label" | "input" | "textarea" | "embed" | "audio" | "video" | "progress" | "fieldset" | "legend" | "nav" | "header" | "footer" | "caption" | "center" | "col" | "colgroup"
     *
     * selected: <footer> | Footer
     * ```
     * @see [IOERI](https://github.com/ioeridev/ioeri)
     */
    core: 'footer';
});
