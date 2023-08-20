import React, { useState } from 'react';
import './App.css';
//repository of images to use in carousal
import imagez from './images.js';


//carousal definition
export default function Gallery() {
    const [index, setIndex] = useState(0);

    // changes the index for image selection by either incrementing or resetting
    function handleClick() {
      if (index >= imagez.length-1){
        setIndex(0)
      } else{
        setIndex( index + 1);
      }
    }

    // sets current image based on index 
    let currentImage = imagez[index];
    console.log(currentImage)

    //
    return(
        <div className='container'>
            <h1 className='heading'>The Great Carousal</h1>
            <img className='image' src={currentImage}></img>
            <button
            onClick = {handleClick}
            className='button'
            >Next Image</button>
        </div>
    )
}
