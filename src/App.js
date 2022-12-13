import React, {useState} from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {

    // moved categories state and its setter from Nav into here because we need currentCategory be accessible to gallery as well, so it should be placed in a parent component
    // to keep the code DRY define the categories in an array and then map through this array to list each category
    // use object literals for each category so the data can be reused elsewhere in the app
    const [categories] = useState([
        {
            name: "Commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            name: "Portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "Food",
            description: "Delicious delicacies"
        },
        {
            name: "Landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
        <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
        <main>
            <Gallery></Gallery>
            <About></About>
        </main>
    </div>
  );
}

export default App;
