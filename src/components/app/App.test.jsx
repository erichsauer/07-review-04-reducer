/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    render(<App />);

    screen.getByRole('button', { name: 'undo' });
    screen.getByRole('button', { name: 'redo' });
  });
});
