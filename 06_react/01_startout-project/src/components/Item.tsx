import React from 'react';
import { Description } from './Description.interface';

function List(props: { description: Description }) {
    const renderHTML = (rawHTML: string) => {
        return React.createElement('article', {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    };
    return <li>{renderHTML(props.description.translations.hu)}</li>;
};


export default List