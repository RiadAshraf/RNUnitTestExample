/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it,expect,describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import { act, cleanup, fireEvent, render, RenderAPI, waitFor, within } from '@testing-library/react-native';
describe('App', () => {
  it('renders correctly', () => {
    const screen = render(<App />);
    expect(screen).toBeDefined();
  });
    it('renders the app title', () => {
        const screen = render(<App />);
        const title = screen.getByText('RN Unit Text Example App');
        expect(title).toBeDefined();
    });
    it('renders the addition component', () => {
        const screen = render(<App />);
        const additionComponent = screen.getByText('5 + 10 = 15');
        expect(additionComponent).toBeDefined();
    });
});
