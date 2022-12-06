// import React to enable components for testing
import React from 'react';
// import About component to be tested
import About from '..';

// incorporate React testing Library
// RENDER function in Jest creates a simulated DOM in a Node environment to approximate the DOM (actual components are not rendered)
// CLEANUP function removes components from the DOM to prevent memory leaking, and data collision between tests
import { render, cleanup } from '@testing-library/react';

// import extend-expect library from jest-dom package
import '@testing-library/jest-dom/extend-expect';

// call cleanup function using afterEach global function from Jest to ensure that after each test, there won't be any leftover memory data that could give false results
afterEach(cleanup);

// use describe function to declare the component you're testing - render About test
describe('About component', () => {

    // first test - the baseline to verify that component is rendering. in IT function - first argument is a string declaring what is tested, second arg - callback running the test
    it('renders', () => {
        render(<About />);
    });

    // second test - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // use asFragment function that returns a snapshot of the About component
        const { asFragment } = render(<About/>);

        // test and compare if the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})