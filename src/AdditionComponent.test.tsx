import {describe,expect,it} from '@jest/globals';
import React from 'react';
import AdditionComponent from './AdditionComponent.tsx';
import {render} from '@testing-library/react-native';


describe('AdditionComponent', () => {
    it('should return the sum of two numbers', () => {
        const screen = render(<AdditionComponent a={5} b={5}/>);
        const sum = screen.getByText('5 + 5 = 10');
        expect(sum).toBeTruthy();
    });
});
