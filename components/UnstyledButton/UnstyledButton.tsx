import React, { forwardRef } from 'react';

export type UnstyledButtonProps = {
  /**
   * Anda dapat secara langsung menambahkan alamat href menuju alamat internal lain,
   *
   * kami membuat fungsi href menggunakan useRouter - 'next/router'.
   */
  href?: string;
  /**
   * **Push router to internal routes used useRouter()**
   * ***
   *```js
   * sample:
   * useRouter={useRouter()}
   * // or
   * const router = useRouter()
   * useRouter={router}
   *```
   */
  useRouter?: any | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>((props, ref) => {
  const { children, onClick, href, type, useRouter, ...rest } = props;
  const router = useRouter;
  const isFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      ref={ref}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={isFunction}
      data-button="true"
      {...rest}
    >
      {children}
    </button>
  );
});

UnstyledButton.displayName = 'ioeri/UnstyledButton';
