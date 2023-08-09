- We use base props to set the base style taking alternate paths to suit individual UI preferences.

````
## generics.d.ts
 => file untuk mendefinisikan nilai akhir properti sebagai properti global ioeri
 case:`export interface GenericsProps {
       }
       `

## unions.ts

```js
 => file untuk mendefinisikan properti yang membutuhkan atau menggunakan `union type`
 case:
export type InitialIoeriSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type armIoeriSize = 'fit';
etc.
export type IoeriRadiusValues = Record<InitialIoeriSize, string>;
export type IoeriRadius = keyof IoeriRadiusValues;
export interface NextProps {
  rd?: IoeriRadius | (string & {}) | number;
}
````

## arm-digit-vars

=> file untuk mendefinisikan fungsi perubah digit / number

## set-vars

=> file untuk mendefinisikan berbagai fungsi variants properti untuk diubah menjadi `var(--style)`
case: `setRadius, setFontSize, etc`

