import React from 'react';

// import commercial photos from PhotoList
import PhotoList from '../PhotoList';

// importing helper function to capitalize the name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery( {currentCategory} ) {

    const {name, description} = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            
            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    )
};

export default Gallery;