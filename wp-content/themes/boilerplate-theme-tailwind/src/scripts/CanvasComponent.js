import { useEffect, useRef, useState } from "react";

const Canvas = ({ height, width, img, x, y, size, id, customPresets, setCustomPresets }) => {
    
    const canvas = React.useRef();

    function handleClick() {
        var zoomCtx = document.getElementById('zoom-in').getContext('2d');
        //zoomCtx.imageSmoothingEnabled = true;
        //zoomCtx.mozImageSmoothingEnabled = true;
        //zoomCtx.webkitImageSmoothingEnabled = true;
        //zoomCtx.msImageSmoothingEnabled = true;

        var image = new Image()
        image.src = img

        //console.log(obj)
        zoomCtx.drawImage(image, x, y, 5, 5, 0, 0, 300, 300);

        const ctx = canvas.current.getContext('2d');
        var xyarray = [[2,0], [2,2] ,[2, 4], [0,0], [4,0], [0,4], [4,4]]
        // var valuesArray = [0,50,100]
        var positionArray = ['top', 'middle', 'bottom', 'topleft','topright', 'bottomleft','bottomright']

        //console.log(xyarray.length);
        //console.log($data);

        var customPresetArray = []
        for (let i=0; i<xyarray.length; i++) { 
            // console.log(xyarray[i]);

            const pixel = ctx.getImageData(xyarray[i][0], xyarray[i][1], 1, 1, {willReadFrequently: true});
            const data = pixel.data;
            const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
            customPresetArray.push(rgba)
            //var rgbdiv = document.getElementById('rgb-' + positionArray[i]);
            //rgbdiv.dataset.position = positionArray[i]

            ///const rgbVal = 'rgb(255,255,255)'
            //const hex = rgb2hex(rgbVal,rgba)
            // console.log(hex);
            //rgbdiv.dataset.colorHex = hex
            //rgbdiv.innerHTML = positionArray[i] + ': ' + hex;
        }
        setCustomPresets(customPresetArray)

    }

    React.useEffect(() => {
    const context = canvas.current.getContext("2d", { willReadFrequently: true});
    const image = new Image();
    image.src = img
    image.onload = () => {
        context.drawImage(image, x, y, size, size,0,0,size,size);
        };
    },[]);

    return <canvas ref={canvas} height={height} width={width} img={img} dataset-x={x} dataset-y={y} size={size} id={id} onClick={handleClick} />;
};

export default Canvas;
