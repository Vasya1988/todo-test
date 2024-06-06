import React, { MouseEventHandler, useContext } from 'react';
import Styles from './Button.module.sass';
import { MyContext } from '../../../context/Context';

interface ButtonProps {
    name: string,
    eventClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps>= ({name, eventClick}) => {

    const {taskStatus} = useContext(MyContext)

    return (
        <>
            <button className={`${Styles.Button} ${name === taskStatus ? 'ActiveButton' : ''}`} onClick={eventClick}>{name}</button>
        </>
    )
};

export default Button;