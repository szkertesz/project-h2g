import { ReactNode } from 'react'
import classes from './Button.module.scss';

interface IButton {
    children: ReactNode,
    onClick?: () => void;
    disabled?: boolean;
    isGhost?: boolean;
    type?: 'button' | 'reset' | 'submit';
    dataTestId?: string;
    id?: string;
}

function Button(props: IButton) {
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
            data-testid={props.dataTestId}
            id={props.id}
        >
            {props.children}
        </button>
    );
}

export default Button