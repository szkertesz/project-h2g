import {ReactNode} from 'react'
import classes from './Container.module.scss'

interface Props {
    children?: ReactNode;
    className?: {}
}

function Container(props: Props) {
    return (
        <div className={`${classes.container} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Container;
