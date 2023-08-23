import { LinkProps } from 'next/link';
import { UnstyledButtonProps } from '../UnstyledButton';
import { EXTENDS_LoaderProps } from '../Loader';
import { EXTENDS_IndicatorProps } from '../Indicator';
import { CursorProps, InitialFit, InitialOrientation, InitialSize, LonghandColoringProps, LonghandTextingProps, PositioningProps, RadiusProps, RecordClassNames, RecordStyles, ViewPortProps, arm_Size, getRecordStyleProps, _NODE } from '../../core/types';
import { AnchorProps, DivProps } from '../Core';
export type NextButtonOrder = 'root' | 'wrapper' | 'leftSection' | 'inner' | 'rightSection' | 'loader' | 'indicator';
export type ButtonStylesNames = 'root' | 'inner' | 'loader' | 'section' | 'label';
export type NextButtonVariant = 'base' | 'default' | 'filled' | 'gradient' | 'light' | 'outline' | 'subtle' | 'transparent' | 'white';
export type NexButtonGradientOrder = 'from' | 'via' | 'to' | 'deg';
export type NextButtonGradientProps = getRecordStyleProps<NexButtonGradientOrder, 'gradient'>;
type NextButtonStyleProps = RecordStyles<NextButtonOrder>;
type NextButtonClassProps = RecordClassNames<NextButtonOrder>;
type arm_DESTRUCTURING_getNextButtonStyleVarsProps = ViewPortProps & LonghandColoringProps & LonghandTextingProps & RadiusProps & CursorProps & PositioningProps & NextButtonGradientProps;
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
export type getNextButtonStyleVarsProps = DESTRUCTURING_getNextButtonStyleVarsProps & NextButtonStyleProps & NextButtonClassProps;
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
export type NextButtonAllProps = (hand_AnchorProps & NextButtonProps & {
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
}) | (hand_ButtonProps & NextButtonProps & {
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
}) | (DivProps & NextButtonProps & {
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
export declare const NextButton: {
    (props: NextButtonAllProps & arm_NextButtonAllProps): import("react/jsx-runtime").JSX.Element;
    classes: any;
    displayName: string;
};
export {};
