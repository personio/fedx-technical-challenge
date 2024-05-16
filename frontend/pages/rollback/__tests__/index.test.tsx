import { render, screen } from '@testing-library/react';
import Rollback from '..';

describe('Rollback Page', () => {
  it('renders main element with correct className', () => {
    render(<Rollback />);
    const mainElement = screen.getByText('Rollback');

    expect(mainElement).toBeInTheDocument();
  });
});
