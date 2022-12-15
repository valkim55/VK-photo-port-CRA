import React from 'react';

// import commercial photos from PhotoList
import PhotoList from '../PhotoList/index';

// importing helper function to capitalize the name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {

    const {currentCategory} = props;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    )
};

export default Gallery;