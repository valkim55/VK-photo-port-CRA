import React, {useState} from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';



function App() {

    //prevents the contact form from showing when user initially navigates to the homepage
    const [contactSelected, setContactSelected] = useState(false);

    /* moved categories state and its setter from Nav into here because we need currentCategory be accessible to Gallery as well, 
    since Gallery is not a child of Nav you can't pass categories as props from Gallery to Nav, instead you lifting the categories to the parent component - App, 
    and then pass the categories to Nav inside of App.js*/    
    const [categories] = useState([
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
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
