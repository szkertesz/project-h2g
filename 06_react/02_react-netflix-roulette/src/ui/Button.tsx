import {ReactNode} from 'react'
import classes from './Button.module.scss';

interface Button {
    children: ReactNode,
    onClick?: () => void;
    disabled?: boolean;
    isGhost?: boolean;
    type?: 'button' | 'reset' | 'submit'
}

function Button(props: Button) {
    return (
        <button
            type={props.type}
            className={`${classes.button} 
            ${props.isGhost
            ? classes['button--ghost']
            : classes['button--default']}
            `}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button