import React from "react";

type Alert = {
    id: string,
    start: number,
    end: number,
    timestamp: number,
    stopIds: [],
    routeIds: [],
    url: object,
    header: object,
    description: Desc
}

type Desc = {
    someTranslation: string,
    translations: Translations
}

type Translations = {
    en: string,
    hu: string
}

type Props = {
    alerts: any[]
}

function List({alerts}: Props) {
    const renderHTML = (rawHTML: string) => React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

    return <ul>
        {alerts.map((alert: Alert) => {
           return <li>
                <article>
                    {renderHTML(alert.description.translations.hu)}
                </article>
            </li>
        })}
    </ul>
}

export default List