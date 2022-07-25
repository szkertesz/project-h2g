import React from 'react';
import Modal from './Modal';
import { render, screen } from '@testing-library/react';

describe('Modal', () => {
    describe('should render', () => {
        it('component', () => {
            const children = `<p>Modal child</p>`
            const isOpen = true
            const size = 'small'
            const handleClose = jest.fn()
            const title = 'modal title'

            const { container } = render(
                <Modal
                    children={children}
                    isOpen={isOpen}
                    size={size}
                    handleClose={handleClose}
                    title={title}
                />
            );
            expect(container).toMatchSnapshot();
        });
    });
});
