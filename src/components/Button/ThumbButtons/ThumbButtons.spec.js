import { render, screen } from '@testing-library/react';
import ThumbButtons from '../ThumbButtons'

test('when clicked button', () => {
    render(<ThumbButtons />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
