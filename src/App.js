import React, {useState} from 'react';

//prevents the contact form from showing when user initially navigates to the homepage
const [contactSelected, setContactSelected] = useState(false);

import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

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
        <Nav 
            categories={categories} 
            setCurrentCategory={setCurrentCategory} 
            currentCategory={currentCategory}
            contactSelected={contactSelected}    
            setContactSelected={setContactSelected}
        ></Nav>
        <main>
            {!contactSelected ? (
                <>
                    <Gallery currentCategory={currentCategory}></Gallery>
                    <About></About>
                </>
            ) : (
                <ContactForm></ContactForm>
            
            )}
        </main>
    </div>
  );
}

export default App;
