import React, { HTMLAttributes } from 'react';
import { ClickedProps, CursorProps, LonghandColoringProps, LonghandTextingProps, RadiusProps, RecordClassNames, RecordStyles, SizeProps, TransitionProps, ViewPortProps } from '../../core';
export type OpenCloseButtonType = 'dots' | 'plus-x' | 'bar-x';
export type OpenCloseButtonOrder = 'root' | 'wrapper' | 'leftLabel' | 'inner' | 'rightLabel';
type OpenCloseButtonStyleProps = RecordStyles<OpenCloseButtonOrder>;
type OpenCloseButtonClassProps = RecordClassNames<OpenCloseButtonOrder>;
interface arm_OpenCloseButtonProps {
    transform?: boolean;
    leftLabel?: React.ReactNode;
    rightLabel?: React.ReactNode;
    type?: OpenCloseButtonType;
}
type handle_OpenCloseButtonProps = SizeProps & LonghandColoringProps & ViewPortProps;
export type OpenCloseButtonProps = arm_OpenCloseButtonProps & OpenCloseButtonStyleProps & OpenCloseButtonClassProps & handle_OpenCloseButtonProps & ClickedProps & RadiusProps & CursorProps & TransitionProps & Pick<LonghandTextingProps, 'ff' | 'fz' | 'fw' | 'lh'> & Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'children'>;
export declare const OpenCloseButton: {
    (props: OpenCloseButtonProps): import("react/jsx-runtime").JSX.Element;
    classes: any;
    displayName: string;
};
export {};
