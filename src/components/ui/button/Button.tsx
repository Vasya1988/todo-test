import React, { MouseEventHandler } from 'react';
import Styles from './Button.module.sass';

interface ButtonProps {
    name: string,
    eventClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps>= ({name, eventClick}) => {
    return (
        <>
            <button onClick={eventClick}>{name}</button>
        </>
    )
};

export default Button;