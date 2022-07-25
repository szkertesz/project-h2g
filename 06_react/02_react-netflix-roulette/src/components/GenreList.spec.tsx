import React from 'react';
import GenreList from './GenreList';
import { render, screen } from '@testing-library/react';

describe('GenreList', () => { // the test suite
    it('should render component', () => { // the test case
        const genres = ['a', 'b', 'c'];
        const { container } = render(<GenreList genres={genres} />);

        // screen.debug();
        expect(container).toMatchSnapshot(); // the assertion
    });
});
