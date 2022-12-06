import React from 'react';

function Nav() {

    // to keep the code DRY define the categories in an array and then map through this array to list each category
    // use object literals for each category so the data can be reused elsewhere in the app
    const categories = [
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
    ];

    // define a function that will run when a category name is being clicked
    function categorySelected(name) {
        console.log(`${name} is clicked`)
    };

    return(
        <header>
            <h2>
                <a href="/"> <span role="img" aria-label="camera">📸</span> Oh Snap! </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about"> About me</a>
                    </li>

                    <li>
                        <span>Contact</span>
                    </li>

                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={ () => categorySelected(category.name) }> {category.name} </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;