import { render, screen } from '@testing-library/react';
import Portal, {createContainerAndAppendToBody} from "./Portal";

describe('Portal', () => {
    it('should render component', () => {
        const containerId = 'test-portal-container';
        const { container } = render(<Portal containerId={containerId} />);
        screen.debug();
        expect(container).toMatchSnapshot();
    });
    it('should render component', () => {
        createContainerAndAppendToBody('test-portal-container')
        const { container } = render(<Portal containerId={'test-portal-container'}/>);
        screen.debug();
        expect(container).toMatchSnapshot();
    });
})
