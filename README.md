# ioeri #1

For "leading", pronounced /yori/, `🔊` like "iori" (spoken Yoruba).

## [core - component ui repository](https://github.com/ioeridev/ioeri)

<div align="left">
  <a href="https://www.npmjs.com/package/ioeri">
    <img src="https://badgen.net/npm/v/ioeri" alt="version" />
  </a>
  <a href="https://npmjs.org/package/ioeri">
    <img src="https://badgen.now.sh/npm/dm/ioeri" alt="downloads" />
  </a>
</div>

Functional React - Next.js components library package module.

### `Required`

`*React library`
`*Next.js ^13.3.0`

### Installation [core - component ui:](https://github.com/ioeridev/ioeri)

using [npm](https://www.npmjs.com/package/ioeri)

```cirru
npm install ioeri@latest
```

using [yarn](https://yarnpkg.com/)

```cirru
yarn add ioeri@latest
```

<details open>
<summary>Getting Started</summary>

- Now you have access to all core functions and macros from this package!
- Most of what we do is create simple - somewhat complex modules that can be used in a variety of projects.
- When you need a slightly complex component function, it's possible to add a library to get the function.
- Sometimes only for a few parts or even one part of the project but it's very important.
- In another section we need a similar code but with different conditions or components.
- We created a simple logic to combine only a few selected components or `Polymorphic Valid Components Property's`.
- Summarize several different components into one basic component according to the calling of the component name which will be followed by the default property.

### \*Note:

Import from `ioeri`:

Sometimes some cases the editor will give you a suggestion to import a component from `'ioeri/lib/components/[Component]'` or `'ioeri/lib'` and it is wrong,
then switch path to `'ioeri'`

## Sample:

```cirru
import { Animated, Core, NextButton } from 'ioeri/lib/components/NextButton';
import { Animated, Core, NextButton } from 'ioeri/lib';
```

`fix in`

```cirru
import { Animated, Core, NextButton } from 'ioeri';
```

</details>

<details>
<summary>Click to see usage</summary>

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
<Animated
  type="pop-over"
  variant="tooltip"
  placement="bottom-start"
  fz="h1" // styling font-size using template font style h1 for trigger component
  h={40} // styling height trigger component
  w={350} // styling width trigger component
  withArrow
  popover="dropover tooltip dropover tooltip dropover tooltip dropover tooltip"
  classNames={{
    root: 'class for root component',
    trigger: 'class for trigger component',
    popover: 'class for popover or dropdown component',
  }}
  getStylePlacement={{
    arrow: {
      c: '#424242',
      size: '5px',
      l: 10,
    },
  }}
>
  Animated Children Trigger
</Animated>
```

```js
<Animated
  type="skew-card-hover"
  h={400}
  w={300}
  fz="h1"
  flex="centered"
  offsetShine={1300}
  getStyleShine={{
    blur: 60,
    size: 150,
    offset: {
      x: 900,
      y: 1500,
    },
  }}
>
  <Animated
    type="running-text-2"
    w={300}
    fz="h1"
    flex="centered"
    placeholders="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quos, sequi a ad officia porro libero voluptatibus similique veniam soluta eum sapiente, vel alias laboriosam perferendis ut iusto eaque sunt quae quisquam rerum. Autem omnis quos laborum, iusto voluptatum nesciunt reprehenderit, eius fugit, esse suscipit quis aperiam. Facere cupiditate tempore, illo non consequatur odit dicta deserunt dolore modi repellat maxime natus dolores asperiores saepe quibusdam cumque iusto quidem placeat recusandae velit tenetur minus. Sed vel, alias eius impedit facere quidem ipsa est dolor, asperiores, ullam commodi eaque fugit rem dolores non! Mollitia doloribus iusto placeat porro totam ipsum consequatur consectetur?"
  />
</Animated>
```

```js
<NextButton
  href="/next"
  core="anchor" // "anchor" <Link> | "button" | "div"
  leftSection={<Icon />} // ReactNode
  rightSection={<Components />} // ReactNode
  // optional for styling settings
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
  orientation="vertical" // "horizontal" | "vertical" - if vertical leftSection will be topSection and rightSection will be bottomSection
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

</details>

### Polymorphic Valid Components Property's

One component that you can change into several other components as needed with the same style.

🚨

In practice, some of our syntax/code approach may be incompatible with the library and version you are using.

🏗️

You can join for testing or take part in providing updates.

## Contributors

<a href="https://github.com/ioeridev/ioeri/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ioeridev/ioeri" />
</a>

[Become a contributor](https://github.com/ioeridev/ioeri/blob/master/CONTRIBUTING.md)

## License

MIT

[© ioeridev](https://github.com/ioeridev/ioeri/blob/master/LICENSE)
