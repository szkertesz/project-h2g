import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children?: JSX.Element;
    containerId?: string;
}

export const createContainerAndAppendToBody = (containerId: string) =>{
    const containerElement = document.createElement('div');
    containerElement.setAttribute('id', containerId);
    document.body.appendChild(containerElement);
    return containerElement;
}

const Portal: React.FC<Props> = ({
    children,
    containerId = 'portal-container',
}) => {
    const [containerElement, setContainerElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        let systemCreated = false;
        let element = document.getElementById(containerId) as HTMLElement;
        if (!element) {
            systemCreated = true
            element = createContainerAndAppendToBody(containerId);
        }

        setContainerElement(element);

        return() => {
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element)
            }
        }
    }, [containerId]);

    if (containerElement === null) return null;

    return createPortal(children, containerElement);
};
export default Portal;
