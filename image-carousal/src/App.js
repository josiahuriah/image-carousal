import React, { useState } from 'react';
import './App.css';
//repository of images to use in carousal
import imagez from './images.js';


//carousal definition
export default function Gallery() {
    const [index, setIndex] = useState(0);

    // changes the index for image selection by either incrementing or resetting
    const handleNextImage = () => {(index >= imagez.length-1) ? setIndex(0) : setIndex(index + 1)};

    //changes the index for image selection by either decrementing or setting to end of image list
    const handlePrevImage = () => {(index===0) ? setIndex(imagez.length - 1) : setIndex(index - 1)};

    // sets current image based on index 
    let currentImage = imagez[index];
    console.log(currentImage)

    //
    return(
        <div className='container'>
            <h1 className='heading'>The Great Carousal</h1><br></br>
            <span>
            <button
            onClick = {handleNextImage}
            className='prev-button button'
            >Previous Image</button>
            <img className='image' alt={currentImage} src={currentImage}></img>
            <button
            onClick = {handlePrevImage}
            className='next-button button'
            >Next Image</button>
            </span>
        </div>
    )
}
