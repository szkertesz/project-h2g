import React from 'react';
import CustomSelect from './CustomSelect';
import { render, screen } from '@testing-library/react';

describe('CustomSelect component', () => {
    // the test suite
    const options = [
        { value: 'value1', label: 'value 1 label' },
        { value: 'value2', label: 'value 2 label' },
    ];
    const handleChange = jest.fn()

    it('should render a customized Select component', () => {// the test case
        const { container } = render(<CustomSelect options={options} handleChange={handleChange} />);
        expect(container).toMatchSnapshot(); // the assertion
    });
    it('should render the CustomSelect element as it has the role \'combobox\'', () => {
        render(<CustomSelect options={options} handleChange={handleChange} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    })
});
