# ioeri #1

For "leading", pronounced /yori/, `🔊` like "iori" (spoken Yoruba).

Functional React - Next.js components library package module.

## Installation [core - component ui:](https://github.com/ioeridev/ioeri/tree/master)

```cirru
npm install ioeri@latest
```

or - using yarn

```cirru
yarn add ioeri@latest
```

Now you have access to all core functions and macros from this package!

Then import `ioeri`:

### \*Note:

Sometimes some cases the editor will give you a suggestion to import a component from `'ioeri/lib/components/[ComponentName]'` or `'ioeri/lib'` and it is wrong,
then switch path to `'ioeri'`

## Sample:

```cirru
import { Core, NextButton } from 'ioeri/lib/components/NextButton';
import { Core, NextButton } from 'ioeri/lib';
```

`fixed`

```cirru
import { Core, NextButton } from 'ioeri';
```

```js
<Core core="a" fz="h6">
  Anchor component
</Core>
// or
<Core core="button" useRouter={useRouter()} href="...">
  <Core core="h1" p={16} m={16} flex="between-center">
    <Core core="div" fz="h1" fz="22px">
      div fontSizeh1
    </Core>
    <Core core="span" fz="h5" ff="Inter" fz={16}>
      Heading1 fontSizeh5
    </Core>
  </Core>
</Core>
```

```js
<NextButton
  href="/next"
  component="button" // "anchor" <Link> | "button" | "div"
  leftSection={<Icon />} // ReactNode
  rightSection={<Components />} // ReactNode
  clicked // boolean - set transform when ::active
  disabled // boolean
  indicator // boolean
  indicatorActive //boolean - set indicator animate (@keyframe)
  indicatorBordered //boolean - set border indicator
  variant="gradient" // type variant background-color
  loading // boolean
  compact // sizing 1x1 - remove leftSection & rightSection
  rd="xl" // border-radius
  w="100%" // width
  size="md" // default size
  cursor="wait" // set cursor
  indicatorType="bar" // select indicator type
  indicatorPos="right-end"
  indicatorSize={18}
  orientation="vertical"
  justify="space-between"
  getStyleIndicator={{ offset: '8px' }}
  getStyleLoader={{ color: 'red', size: 'md' }}
  gradient={{ from: 'red', to: 'orange', deg: '70', via: 'yellow' }}
  // or
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
```

### `Required`

`*React library`
`*Next.js ^13.3.0`

One component that you can change into several other components as needed with the same style.

### Polymorphic Valid Components

<details open>
<summary>Getting Started</summary>

- Most of what we do is create simple - somewhat complex modules that can be used in a variety of projects.
- When you need a slightly complex component function, it's possible to add a library to get the function.
- Sometimes only for a few parts or even one part of the project but it's very important.
- In another section we need a similar code but with different conditions or components.
- We created a simple logic to combine only a few selected components or `Polymorphic Valid Components`.
- Summarize several different components into one basic component according to the calling of the component name which will be followed by the default property.

</details>

🚨

In practice, some of our syntax/code approach may be incompatible with the library and version you are using.

🏗️

You can join for testing or take part in providing updates.

## Contributors

<a href="https://github.com/ioeridev/ioeri/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ioeridev/ioeri" />
</a>

[Become a contributor](https://github.com/ioeridev/ioeri/blob/main/CONTRIBUTING.md)

## License

MIT [© ioeridev](https://github.com/ioeridev)
