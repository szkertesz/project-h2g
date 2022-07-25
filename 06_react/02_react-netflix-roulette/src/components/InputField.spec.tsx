import React from 'react';
import InputField from './InputField';
import { render, screen } from '@testing-library/react';

describe('GenreList', () => {
    describe('isFullWidth is true', () => {
        const isFullWidth = true
        it('should render component', () => {
            const id ='test id';
            const type = 'text';
            const labelText = 'label text';
            const value = 3;

            const { container } = render(<InputField id={id} type={type} labelText={labelText} onChange={jest.fn()} value={value} isFullWidth={isFullWidth}/>);
            expect(container).toMatchSnapshot();
        });
    });
    describe('isFullWidth is false', () => {
        const isFullWidth = false
        it('should render component', () => {
            const id ='test id';
            const type = 'text';
            const labelText = 'label text';
            const value = 3;

            const { container } = render(<InputField id={id} type={type} labelText={labelText} onChange={jest.fn()} value={value} isFullWidth={isFullWidth}/>);
            expect(container).toMatchSnapshot();
        });
    });

});
