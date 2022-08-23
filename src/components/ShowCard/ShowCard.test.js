/**
 * @jest-environment jsdom
 */

import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import ShowCard from '.';

describe('ShowCard', () => {

    beforeEach(() => {
        render(<ShowCard data={{description: 'Test description'}}/>)
    })

    it('Displays the appor. description', () => {

        const desc = screen.queryByRole('paragraph');

        expect(desc).toBeInTheDocument();
        expect(desc.textContent).toEqual('Test description');
        

    })

})
