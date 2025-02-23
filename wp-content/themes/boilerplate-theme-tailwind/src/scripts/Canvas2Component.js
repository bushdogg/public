import React from 'react';
//import PropTypes from 'prop-types';

const Canvas = ( {draw, height, width, clicked, stateChanger, canvasRef, handleCanvasClick} ) => { // CHANGED
//   canvasRef = React.useRef();
//   //canvasRef = React.createRef();

//   React.useEffect(() => {
//     if (canvasRef.current) {
//         const context = canvasRef.current.getContext('2d', {willReadFrequently: true}); 
//         draw(context);
//         const dataUrl = canvasRef.current.toDataURL('image/jpeg');
//         stateChanger(dataUrl)
    
//     }
//   },[clicked]);

  return (
    <canvas
      ref={canvasRef}
      width={width}  // CHANGED
      height={height} // CHANGED
      onClick={handleCanvasClick}
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