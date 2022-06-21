import React from 'react';
import Card from '../ui/Card';
import { Description } from './Description.interface';
import classes from './Item.module.scss'

// Function Component Version
// function List(props: { description: Description }) {
//     const renderHTML = (rawHTML: string) => {
//         return React.createElement('article', {
//             dangerouslySetInnerHTML: { __html: rawHTML },
//         });
//     };
//     return <li>{renderHTML(props.description.translations.hu)}</li>;
// };

// Class Component version
class Item extends React.Component<{description: Description}> {
    render() {
        const renderHTML = (rawHTML: string) => {
            return React.createElement('div', {
                dangerouslySetInnerHTML: { __html: rawHTML },
                className: classes.article__content
            });
        }
        return (
            <Card>
               { renderHTML(this.props.description.translations.hu)}
            </Card>
        )
    };
}

export default Item;