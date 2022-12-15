import React from 'react';
import Nav from '..';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//now that you added props to the Nav, it needs to be reflected in the testing units as well
const categories = [
    {
        name: 'portraits',
        description: 'Portraits of people in my life'
    }
]
// mock functions to use as props
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

// use describe function to declare the component you're testing - render About test
describe('Nav component', () => {

    // first test - the baseline to verify that component is rendering. in IT function - first argument is a string declaring what is tested, second arg - callback running the test
    it('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    // second test - compare snapshot versions of the DOM node structure
    it('matches snapshot', () => {
        // use asFragment function that returns a snapshot of the About component
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        // test and compare if the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
});

// create test for emoji visibility, doesn't have to be separated just looks cleaner
describe('emoji is visible', () => {
    it('renders emoji into the h2', () => {

        // the query to return the element containing the emoji
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        // can also query by aria-label value
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

// create a test for link visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
});