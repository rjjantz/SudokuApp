import { render, screen } from '@testing-library/react';
import App from './App.tsx';

describe('App', () => {
    it('renders Sudoku heading', () => {
        render(<App />);
        expect(
            screen.getByRole('heading', { name: /sudoku/i }),
        ).toBeInTheDocument();
    });
});
