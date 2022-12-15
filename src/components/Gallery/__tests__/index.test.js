import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

// since the Gallery component needs a prop of currentCategory, you can mock it
const portrait = { name: 'portraits', description: 'Portraits of people in my life'};

afterEach(cleanup)
describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    })
})