// the purpose of this component is to handle the photo rendering logic. now that you can show more than one static photo on the gallery page, you need to make sure the correct category is displayed that represents that image

import React, { useState } from 'react';

// instead of props can use destructured category object as {category} as an argument for PhotoList function
const PhotoList = ({category}) => {

    // using .map method to map through the array of categories with their photos and display them
    const [photos] = useState(
        [
            {
                name: 'Grocery aisle',
                category: 'commercial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Grocery booth',
                category: 'commercial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Building exterior',
                category: 'commercial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Restaurant table',
                category: 'commercial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Cafe interior',
                category: 'commercial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Cat green eyes',
                category: 'portraits',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Green parrot',
                category: 'portraits',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Yellow macaw',
                category: 'portraits',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Pug smile',
                category: 'portraits',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Pancakes',
                category: 'food',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Burrito',
                category: 'food',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Scallop pasta',
                category: 'food',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Burger',
                category: 'food',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Fruit bowl',
                category: 'food',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Green river',
                category: 'landscape',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Docks',
                category: 'landscape',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Panoramic village by sea',
                category: 'landscape',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Domestic landscape',
                category: 'landscape',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            },
            {
                name: 'Park bench',
                category: 'landscape',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
            }
        ]
    );

    // here you're going through each photo in the photos array, trying to find every photo that matches the category selected by user
    // if the match is found, the photo is returned in an array and assigned to currentPhoto, then you .map through the currentPhotos array and render each photo that matches the category selected by user
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className="flex-row"> {currentPhotos.map((image, i) => (
                <img
                    src={require(`../../assets/small/${category}/${i}.jpg`).default}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                />
            ))}
      </div>
        </div>
    )
};

export default PhotoList;