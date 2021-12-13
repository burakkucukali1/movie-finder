import { render, screen } from '@testing-library/react';
import ThumbButtons from '../ThumbButtons';
import userEvent from '@testing-library/user-event';

test('Button visibility test', () => {
    render(<ThumbButtons />);
    const buttonUp = screen.getByTestId("arrowUp");
    const buttonDown = screen.getByTestId("arrowDown");

    userEvent.click(buttonUp);
    expect(buttonDown.style.visibility).toBe('hidden');
});
