import { CSSProperties, ReactNode } from 'react';

export {};

export type PropertyValue<TValue> = TValue extends Array<infer AValue>
  ? Array<AValue extends infer TUnpacked & {} ? TUnpacked : AValue>
  : TValue extends infer TUnpacked & {}
  ? TUnpacked
  : TValue;

export type Fallback<T> = { [P in keyof T]: T[P] | NonNullable<T[P]>[] };

/** Common Values */
export type Commons = 'inherit' | 'initial' | 'revert' | 'unset';

export type NamedColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'currentColor'
  | 'currentcolor'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'transparent'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen';

/** Initials Values */
export type _STRING = (string & {});

export type InitialSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export type InitialFz = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type InitialCompactSize =
  | InitialSize
  | 'auto'
  | 'fit-content'
  | 'max-content'
  | 'min-content'
  | number
  | (string & {});

export type InitialFit = 'fit';

export type InitialFull = 'full';

export type InitialOrientation = 'horizontal' | 'vertical';

export type InitialFloatSide = 'top' | 'right' | 'bottom' | 'left';

export type InitialFloatPlacement = 'end' | 'start';

/** Class & Style Props */
export interface CLASSNAME {
  className?: string;
}

export interface STYLE {
  style?: CSSProperties;
}

export type _NODE = ReactNode;

/**
   *### Secara spesifik hanya export children dari ReactNode
   ```typescript
  export type Children = {
    children?: ReactNode;
  };
   ```
   */
export type ChildrenProps = {
  children?: ReactNode;
};

/**
 sample:
```
  type MyComponentProps = getRecordStyleProps<'size' | 'color', 'customStyles'>;

  const MyComponent = (props: MyComponentProps) => {
    // props.customStyles akan berisi nilai
    Partial<Record<'size' | 'color', string>>
    // Contoh: Mengakses nilai customStyles untuk properti 'size'
    const sizeStyle = props.customStyles?.size;
    // Contoh: Mengakses nilai customStyles untuk properti 'color'
    const colorStyle = props.customStyles?.color;
    // Contoh: menggunakan properti customStyles
    customStyles={{ color: 'purple', size: '32px', }}
  ```
  };
 */
export type getRecordStyleProps<T extends string, U extends string> = {
  [K in U]?: Partial<Record<T, string>>;
};

/** ### RecordClassNames : Partial<Record<T, string>>,
 *- all properties in the className will be considered as options (can be undefined).
 *- allows to provide or not provide value for each property without error.
 *### Sample:
 * ```js
   import { RecordClassNames } from './RecordClassNames';
   ------------------------------------------------------------
 * type ComponentProps = RecordClassNames<'root' | 'wrapper' | 'leftIcon' | 'inner' | 'rightIcon'>;
   ------------------------------------------------------------
   type SomeOtherComponentProps = RecordClassNames<'main' | 'content' | 'header'>;
 * ```
 */

export type RecordClassNames<T extends string> = {
  classNames?: Partial<Record<T, string>>;
} & CLASSNAME;

/** ### RecordStyles : Partial<Record<T, CSSProperties>>,
 *- all properties in style will be considered as options (can be undefined).
 *- allows to provide or not provide value for each property without error.
 *
 *### Sample:
 * ```js
   import { RecordStyles } from './RecordStyles';
   ------------------------------------------------------------
 * type ComponentProps = RecordStyles<'root' | 'wrapper' | 'leftIcon' | 'inner' | 'rightIcon'>;
   ------------------------------------------------------------
   type SomeOtherComponentProps = RecordStyles<'main' | 'content' | 'header'>;
 * ```
 */
export type RecordStyles<T extends string> = {
  styles?: Partial<Record<T, CSSProperties>>;
} & STYLE;

export type arm_Radius = InitialSize | InitialFull;
export type handRadius = Record<arm_Radius, string>;
export type Radius = keyof handRadius;

export type arm_FloatPosition = InitialFloatSide | `${InitialFloatSide}-${InitialFloatPlacement}`;
export type FloatingPosition = {
  /**
   * **`FloatingPosition`** : untuk menentukan floating position
   *- `example`:
   *
   * menentukan posisi `::before` atau `::after` sebagai indikator
   *- `syntax`
   *
   * bottom | bottom-end | bottom-start | left | left-end | left-start | right | right-end | right-start | top | top-end | top-start
   */
  floatingPosition?: arm_FloatPosition;
};

/**
 * @summary
 *```js
 * type arm_Size = (string & {}) | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"
 *
 * ```
 * initial value : *null*
 */
export type arm_Size = InitialSize | (string & {});

export interface SizeProps {
  /**
   * The **`size`** CSS property specifies the height and width of an element. By default, the property defines the size of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the size of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   */
  size?: InitialSize | (string & {}) | number | undefined;
}

export type arm_Color = NamedColor | 'currentcolor' | (string & {});

export interface ColorProps {
  c?: NamedColor | 'currentcolor' | Commons | (string & {});
}

export interface ClickedProps {
  /**
   * **`clicked`** removes the style value of the element when pressed using the active modifier.
   *
   * the `clicked` property changes the component to freeze when pressed.
   */
  clicked?: boolean;
}

export interface LonghandColoringProps {
  /**
   * The **`c`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `canvastext`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  c?: NamedColor | 'currentcolor' | Commons | (string & {});
  /**
   * The **`hoverc`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `canvastext`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  hoverc?: CSSProperties['color'];
  /**
   * The **`bg`** | `background` shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * **Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  // bg?: Alternate.Background;
  bg?: NamedColor | 'currentcolor' | Commons | (string & {});
  /**
   * The **`hoverbg`** | `background :hover` shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * **Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  // bg?: Alternate.Background;
  hoverbg?: NamedColor | 'currentcolor' | Commons | (string & {});
  /**
   * The **`bd`** | `border` shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  bd?: CSSProperties['border'];
  /**
   * The **`hoverbd`** | `border :hover` shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  hoverbd?: CSSProperties['border'];
}

export interface PositioningProps {
  /**
   * The **`pos`** for `position` CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Syntax**: `static | relative | absolute | sticky | fixed`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  pos?: CSSProperties['position'];
  /**
   * The **`display`** for `display` CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
   *
   * **Syntax**: `block | contents | flex | flex-root | grid | inline | inline-block | inline-flex | inline-grid | inline-table | list-item | none | table | table-caption | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group | -webkit-box | -webkit-inline-box | inherit | initial | revert | unset`
   *
   * **Initial value**: `inline`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: CSSProperties['display'];
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  wrap?: CSSProperties['flexWrap'];
  /**
   * The **`direct`** for **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  direct?: CSSProperties['flexDirection'];
  /**
   * The CSS **`items`** | `align-items` property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  items?: CSSProperties['alignItems'];
  /**
   * The CSS **`justify`** | **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   *
   */
  justify?: CSSProperties['justifyContent'];
  /**
   * The CSS **`justify`** | **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   *
   */
  content?: CSSProperties['alignContent'];
  /**
   * The **`z`** | `z-index` CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Syntax**: `auto | <integer>`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  z?: string | number;
  /**
   * The **`gap`** | `gap` CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: CSSProperties['gap'];
  /**
   * The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
   *
   * **Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`
   *
   * **Initial value**: `visible`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: CSSProperties['overflow'];
}

export interface TransitionProps {
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: CSSProperties['transition'];
}

/**
 * Target property **`<a>`** :
 *
 * `Please note that some target values may behave differently depending on configuration and browser used.`
 */
export type AnchorTargetsProps = {
  /**
   * Target property **`<a>`** :
   *
   * `Please note that some target values may behave differently depending on configuration and browser used.`
   *
   * **`_self`** : Opens the link in the same window or frame.
   *
   * **`_blank`** : Opens the link in a new window or tab.
   *
   * **`_parent`** : Opens the link in the parent frame (if any).
   *
   * **`_top`** : Opens the link at the very top of the window (closes all frames if any).
   *
   * **`_search`** : Used to search for specific text on the intended page.
   *
   * **`_media`** : Used to indicate specific media content (for example, audio or video).
   *
   * **`_messaging`** : Used to communicate with a specific message channel.
   *
   * **`_email`** : Used to open the default email program with the specified email address.
   *
   * **`_ftp`** : Used to open an FTP program with the specified address.
   *
   * **`_tel`** : Used to open the phone application with the specified phone number.
   *
   * **`_sms`** : Used to open the text messaging application with the specified phone number.
   *
   * **`_file`** : Used to open local files on the user's system.
   *
   * **`_about`** : Used to open information about the intended page.
   *
   * **`_calendar`** : Opens the default calendar application with the specified events.
   *
   * **`_contacts`** : Opens the default contacts application with the specified contact.
   *
   * **`_noopener`** : Opens a link by not allowing the target link to access window.opener on the intended page.
   *
   * **`_noreferrer`** : Opens a link by not sending an HTTP referer to the intended page.
   *
   * **`_external`** : A special value that can be specified by a custom implementation to open a link to an external context or a custom application.
   */
  target?:
    | '_about'
    | '_blank'
    | '_calendar'
    | '_contacts'
    | '_email'
    | '_external'
    | '_file'
    | '_ftp'
    | '_media'
    | '_messaging'
    | '_noopener'
    | '_noreferrer'
    | '_parent'
    | '_search'
    | '_self'
    | '_sms'
    | '_tel'
    | '_top'
    | (string & {});
};

/**
 *### ViewPortProps
 * properti:
 * ```
 * 't', 'r', 'b', 'l', 'h', 'w', 'minH', 'minW', 'p, ...p', 'm, ...m',
 * ```
 * */
export interface ViewPortProps {
  /**
   * The **`Top`** | `Top` `value` CSS property sets top position.
   *
   * `value`: `string` | `number`
   */
  t?: CSSProperties['top'];
  /**
   * The **`Right`** | `Right` `value` CSS property sets right position.
   *
   * `value`: `string` | `number`
   */
  r?: CSSProperties['right'];
  /**
   * The **`Bottom`** | `Bottom` `value` CSS property sets bottom position.
   *
   * `value`: `string` | `number`
   */
  b?: CSSProperties['bottom'];
  /**
   * The **`Left`** | `Left` `value` CSS property sets left position.
   *
   * `value`: `string` | `number`
   */
  l?: CSSProperties['left'];
  /**
   * The **`h`** | `height` CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   */
  h?: CSSProperties['height'];
  /**
   * The **`w`** | `width` CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  w?: CSSProperties['width'];
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  minH?: CSSProperties['minHeight'];
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  minW?: CSSProperties['minWidth'];
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `none`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  maxH?: CSSProperties['maxHeight'];
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  maxW?: CSSProperties['maxWidth'];
  /**
   * The **`p`** | `padding` CSS shorthand property sets the padding area on all four sides of an element at once.
   *
   * **Syntax**: `[ <length> | <percentage> ]{1,4}`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  p?: CSSProperties['padding'];
  /**
   * The **`pl`** | `padding-left` CSS property sets the width of the padding area to the left of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  pl?: CSSProperties['paddingLeft'];
  /**
   * The **`pr`** | `padding-right` CSS property sets the width of the padding area on the right of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  pr?: CSSProperties['paddingRight'];
  /**
   * The **`pt`** | `padding-top` CSS property sets the height of the padding area on the top of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  pt?: CSSProperties['paddingTop'];
  /**
   * The **`pb`** | `padding-bottom` CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  pb?: CSSProperties['paddingBottom'];
  /**
   * The **`py`** | `padding-block` CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `'padding-top'` and `'padding-bottom'`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  py?: CSSProperties['paddingBlock'];
  /**
   * The **`px`** | `padding-inline` CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `'padding-left'` and `'padding-right'`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  px?: CSSProperties['paddingInline'];
  /**
   * The **`m`** | `margin` CSS shorthand property sets the margin area on all four sides of an element.
   *
   * **Syntax**: `[ <length> | <percentage> | auto ]{1,4}`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  m?: CSSProperties['margin'];
  /**
   * The **`ml`** | `margin-left` CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  ml?: CSSProperties['marginLeft'];
  /**
   * The **`mr`** | `margin-right` CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  mr?: CSSProperties['marginRight'];
  /**
   * The **`mat`** | `margin-top` CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  mt?: CSSProperties['marginTop'];
  /**
   * The **`mb`** | `margin-bottom` CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  mb?: CSSProperties['marginBottom'];
  /**
   * The **`my`** | `margin-block` CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `'margin-top'` and `'margin-bottom'`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  my?: CSSProperties['marginBlock'];
  /**
   * The **`mx`** | `margin-inline` CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `'margin-left'` and `'margin-right'`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  mx?: CSSProperties['marginInline'];
}

/** */
export interface LonghandTextingProps {
  /**
   * The **`ff`** | `font-family` CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Syntax**: `[ <family-name> | <generic-family> ]#`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  ff?: CSSProperties['fontFamily'];
  /**
   * The **`fz`** | `font-size` CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative.
   *```js
   *initial_values:
   * "h1" | "h2" | "h3" | "h4" | "h5" | "h6" // with line-height
   * "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" // without line-height
   *```
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fz?: InitialFz | InitialSize | number | (string & {});
  /**
   * The **`fw`** | `font-weight` CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.
   *
   * **Syntax**: `<font-weight-absolute> | bolder | lighter`
   *
   * **Initial value**: `normal`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fw?: CSSProperties['fontWeight'];
  /**
   * The **`lh`** | `line-height` CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Syntax**: `normal | <number> | <length> | <percentage>`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lh?: CSSProperties['lineHeight'];
  /**
   * The **`lts`** | `letter-spacing` CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  lts?: CSSProperties['letterSpacing'];
  /**
   * The **`tt`** | `text-transform` CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   * **Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`
   *
   * **Initial value**: `none`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  tt?: CSSProperties['textTransform'];
  /**
   * The **`ta`** for `text-align` CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * **Syntax**: `start | end | left | right | center | justify | match-parent`
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  ta?: CSSProperties['textAlign'];
  /**
   * The **`ta`** for `text-align` CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * **Syntax**: `start | end | left | right | center | justify | match-parent`
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  td?: CSSProperties['textDecoration'];
}

export interface RadiusProps {
  /**
   * The **`rd`** for `border-radius` CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  rd?: Radius | (string & {}) | number;
}

export interface CursorProps {
  /**
   * The **`cursor`** for `cursor` CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.
   *
   * **Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`
   *
   * **Initial value**: `auto`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CSSProperties['cursor'];
}

// export as namespace Ioeri;
// export = Ioeri;
