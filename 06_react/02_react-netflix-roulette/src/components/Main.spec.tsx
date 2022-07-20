import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

jest.mock('../ui/Container', () => () => <div>Container</div>)
describe('Main', () => {
    it('should render component', () => {
        const {container} = render(<Main />);
        expect(container).toMatchSnapshot();
    });
});
