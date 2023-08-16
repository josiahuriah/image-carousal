import React, { useState } from 'react';
import imagez from './images.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
      if (index >= imagez.length-1){
        setIndex(0)
      } else{
        setIndex( index + 1);
      }
    }

    let currentImage = imagez[index];
    console.log(currentImage)

    return(
        <div>
            <button
            onClick = {handleClick}
            >Next Image</button>
            <img src={currentImage}></img>
        </div>
    )
}
