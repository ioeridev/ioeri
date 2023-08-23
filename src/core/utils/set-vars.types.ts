export function setNumberVars(value: unknown) {
  if (typeof value === 'number') {
    return true;
  }

  if (typeof value === 'string') {
    if (value.startsWith('calc(') || value.startsWith('var(')) {
      return true;
    }

    return /[0-9]/.test(value.trim().replace('-', '')[0]);
  }

  return false;
}

export function setStringVars(value: unknown) {
  if (typeof value === 'number') {
    return false;
  }

  if (typeof value === 'string') {
    return true;
  }

  return false;
}
