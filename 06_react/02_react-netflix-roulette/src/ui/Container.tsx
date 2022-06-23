import {ReactNode} from 'react'
import classes from './Container.module.css'

interface Props {
    children?: ReactNode;
}

function Container(props: Props) {
    return <div className={classes.container}>{props.children}</div>;
}

export default Container;
