import { render, screen } from '@testing-library/react';
import { Header } from './header';

test('renders learn react link', () => {
    render(<Header mainTitle="Testing">Children Content</Header>);
    const linkElement = screen.getByText(/testing/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByText(/children/i)).toBeTruthy();
});
