import React from 'react';
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
export declare const UnstyledButton: React.ForwardRefExoticComponent<{
    /**
     * Anda dapat secara langsung menambahkan alamat href menuju alamat internal lain,
     *
     * kami membuat fungsi href menggunakan useRouter - 'next/router'.
     */
    href?: string | undefined;
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
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
