import { render, screen, fireEvent } from '@testing-library/react';
import StringCalc from './string-calc';

describe('StringCalc Component', () => {
    
    test('renders input and output fields', () => {
        render(<StringCalc />);
        const inputElement = screen.getByRole('textbox');
        const outputElement = screen.getByText(/Output :/i);
        expect(inputElement).toBeInTheDocument();
        expect(outputElement).toBeInTheDocument();
    });

    test('calculates sum of positive numbers', () => {
        render(<StringCalc />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: '1,2,3' } });
        const outputElement = screen.getByText(/Output : 6/i);
        expect(outputElement).toBeInTheDocument();
    });

    test('displays error for negative numbers', () => {
        render(<StringCalc />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: '1,-2,3' } });
        const outputElement = screen.getByText(/Output : Negative Numbers Not Allowed/i);
        expect(outputElement).toBeInTheDocument();
    });

    test('handles empty input gracefully', () => {
        render(<StringCalc />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: '' } });
        const outputElement = screen.getByText(/Output : 0/i);
        expect(outputElement).toBeInTheDocument();
    });
    
    test('handles input with non-numeric values', () => {
        render(<StringCalc />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'a,b,c' } });
        const outputElement = screen.getByText(/Output : 0/i);
        expect(outputElement).toBeInTheDocument();
    });

});
