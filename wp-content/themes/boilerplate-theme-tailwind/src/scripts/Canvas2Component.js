import React, {useEffect, useState, useRef} from 'react';
//import PropTypes from 'prop-types';

const Canvas = ( { canvasRef, handleCanvasClick, aspectRatio, handleCanvasDimensions, height, width} ) => { // CHANGED
    //const canvasRef = useRef(null);
    function myFunc(element) {
        return element.getBoundingClientRect();
      }
      
      useEffect(() => {
        const elementDimensions = myFunc(canvasRef.current);
        handleCanvasDimensions(() => elementDimensions);
      },[]);

    return (
    <canvas
      id='canvas-2'
      className={`h-full w-full relative`}
      ref={canvasRef}
      width={width}  // CHANGED
      height={height} // CHANGED
      //style={{height: `${100*aspectRatio}%`, 
     //width: `100%`}}
      onClick={(e) => handleCanvasClick(e)}
    />
  )
}

// ADDED
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
//   height: PropTypes.number.isRequired, // ADDED
//   width: PropTypes.number.isRequired, // ADDED
// };

export default Canvas;