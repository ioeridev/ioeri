import { setNumberVars, setStringVars } from './set-vars.types';

export function setVars(size: unknown, prefix = 'size'): string {
  const convert = typeof size === 'number' ? `${size}px` : (size as string);
  return setNumberVars(size) ? convert : `var(--${prefix}-${size})`;
}

export function stringVars(size: unknown, prefix = 'size'): string {
  const convert = typeof size === 'number' ? `${size}px` : (size as string);
  return setStringVars(size) ? convert : `var(--${prefix}-${size})`;
}

export function valVars(value: unknown, prefix?: unknown): string {
  const convert = typeof value === 'number' ? `${value}px` : (value as string);
  return setStringVars(value) ? convert : `${prefix}`;
}

export function setVal(value: unknown, prefix?: unknown) {
  const VAL = typeof value === 'number' ? `${value}px` : (value as string);
  if (prefix === undefined) {
    return VAL;
  }
  return valVars(VAL, `${prefix}`);
}

export function setSize(size: unknown, prefix: unknown) {
  return setVars(size, `${prefix}`);
}

export function setColor(color: unknown, prefix: unknown) {
  if (color === undefined) {
    return `${prefix}`;
  }
  return stringVars(color, `${prefix}`);
}

export function setRadius(size: unknown, prefix: unknown) {
  if (size === undefined) {
    return `${prefix}`;
  }
  return setVars(size, 'ioeri-radius');
}

export function setLength(size: unknown, prefix: unknown) {
  if (size === undefined) {
    return `var(--${prefix})`;
  }
  return setVars(size, 'ioeri-length');
}

export function setSpacing(size: unknown) {
  return setVars(size, 'ioeri-spc');
}

export function setFontSize(size: unknown) {
  return setVars(size, 'ioeri-fz');
}

export function setShadow(size: unknown) {
  if (!size) {
    return 'none';
  }
  return setVars(size, 'ioeri-shadow');
}
