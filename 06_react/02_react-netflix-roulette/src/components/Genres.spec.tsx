import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Genres from './Genres';

describe('Genres', () => {
    it('should render component', () => {
        const { container } = render(
            <Provider store={store}>
                <Genres />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
