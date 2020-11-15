import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {Hello} from "./test.component";
import '@testing-library/jest-dom/extend-expect'


describe('useResizObserver()', function () {
    it('should return the correct initial offsetWidth', async function (done) {
        render(<Hello />);
        expect(await screen.findByTestId('offsetWidth')).toHaveTextContent('58');
        done();
    });
});