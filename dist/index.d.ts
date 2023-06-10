import React, { FunctionComponent } from 'react';
declare type MouseEvents = 'click' | 'mousedown' | 'mouseup';
declare type TouchEvents = 'touchstart' | 'touchend';
interface Props extends React.HTMLAttributes<HTMLElement> {
    onClickAway: (event: MouseEvent | TouchEvent) => void;
    mouseEvent?: MouseEvents;
    touchEvent?: TouchEvents;
    as?: React.ElementType;
}
declare const ClickAwayListener: FunctionComponent<Props>;
export default ClickAwayListener;
