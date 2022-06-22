import React from "react";
import Item from './Item'
import { Alert } from "./Alert.interface";
import classes from './List.module.css'


interface Props {
    alerts: Alert[]
}

function List({alerts}: Props) {
    return (
        <ul className={classes.list}>
            {alerts.map((alert: Alert) => {
                return (
                    <li key={alert.id}>
                        <Item description={alert.description} />
                    </li>
                );
            })}
        </ul>
    );
}

export default List