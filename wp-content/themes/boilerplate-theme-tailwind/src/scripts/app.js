import React, { useState, useEffect, useRef, Component } from "react";
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'
import Canvas from './Canvas2Component'   
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import axios from 'axios';

const image = acf_vars.my_localized_var.url

const getXCoord = (i, xSplit, Xsegment) => {
    //const currentRow = Math.floor(i / xSplit);
    const currentCol = (i % xSplit);
    //console.log(i)
    return currentCol * Xsegment
}

const getYCoord = (i, xSplit, Ysegment) => {
    //const currentCol = (i % xSplit);
    const currentRow = Math.floor(i / xSplit);

    return currentRow * Ysegment
}

const getSubXCoord = (index, i , xSplit, Xsegment, subSplitX, subsegmentSizeX) => {
    
    const currentCol = (index % xSplit);
    const parnetXCoord = currentCol * Xsegment
    const childCol = (i % subSplitX);
    //console.log(i)
    //return parnetXCoord + (childCol * subsegmentSize)
    return childCol * subsegmentSizeX
}

const getSubYCoord = (index, i, xSplit, Ysegment, subSplitY, subsegmentSizeY) => {
    const currentRow = Math.floor(index / xSplit);
    const parentYCoord = currentRow * Ysegment
    const childRow = Math.floor(i / subSplitY);
    //return parentYCoord + (childRow * subsegmentSize)
    return childRow * subsegmentSizeY
}

const getTileX = (i, horizontalSplit, verticalSplit) => {
    const currentRow = Math.floor(i / horizontalSplit) + 1;
    const tileHeight = 100 / verticalSplit;
  
    return tileHeight * currentRow - tileHeight;
  };

  const getSubTileX = (i,subIndex, horizontalSplit, verticalSplit, subSplitX, subSplitY) => {
    const currentRow = Math.floor(i / horizontalSplit) + 1;
    const currentSubRow = Math.floor(subIndex / subSplitX) + 1;
    const tileHeight = 100 / verticalSplit;
    const tileSubHeight = 100 / verticalSplit / subSplitY;
    const tileReturn = tileHeight * currentRow - tileHeight;
    var obj = {
        subIndex: subIndex,
        currentRow: currentRow,
        currentSubRow: currentSubRow,
        tileHeight: tileHeight,
        tileReturn: tileReturn,
        subSplitX: subSplitX,
        subSplitY: subSplitY,
        horizontalSplit: horizontalSplit,
        verticalSplit: verticalSplit

    }
    //console.log(obj)
    return tileReturn + (tileSubHeight * currentSubRow - tileSubHeight);
  };
  
  const getTileY = (i, horizontalSplit) => {
    const currentCol = (i % horizontalSplit) + 1;
    const tileWidth = 100 / horizontalSplit;
  
    return (100 / horizontalSplit) * currentCol - tileWidth;
  };

  const getSubTileY = (i,subIndex, horizontalSplit, subSplitX) => {
    const currentCol = (i % horizontalSplit) + 1;
    const tileWidth = 100 / horizontalSplit;
    const currentSubCol = (subIndex % subSplitX) + 1;
    const tileSubWidth = 100 / horizontalSplit / subSplitX;
    const tileReturn = (100 / horizontalSplit) * currentCol - tileWidth

    return tileReturn + ((100 / horizontalSplit / subSplitX) * currentSubCol - tileSubWidth);
  };
  
  const getSubTileX2 = (index, subIndex, xSplit, subSplitX) => {
    //const currentParentRow = Math.floor(index / xSplit) + 1;
    const currentParentCol = (index % xSplit) + 1;
    //const currentSubRow = Math.floor(subIndex / subSplitX) + 1;
    const currentSubParentCol = (subIndex % subSplitX) + 1;
    
    const parentTileWidth = 100 / xSplit;
    const subTileWidth = parentTileWidth / subSplitX;
    //console.log(subTileHeight)
    //console.log(currentSubRow)
    const parentXTile = (parentTileWidth * currentParentCol) - parentTileWidth
    //console.log(parentXTile + (subTileHeight * currentSubRow - subTileHeight))
    var obj = {
        function: 'getSubTileX',
        index: index,
        subIndex: subIndex,
        xSplit: xSplit,
        subSplitX: subSplitX,
        currentParentCol: currentParentCol,
        parentTileWidth: parentTileWidth,
        subTileWidth: subTileWidth,
        parentXTile: parentXTile,
        return: parentXTile + (subTileWidth * currentSubParentCol - subTileWidth)
    }
    //console.log(obj)
    //console.log(currentSubParentCol)
    return parentXTile + (subTileWidth * currentSubParentCol - subTileWidth);
  };
  const getSubTileY2 = (index, subIndex, ySplit, subSplitY) => {
    //const currentParentCol = (index % xSplit) + 1;
    //const currentSubParentCol = (subIndex % subSplitY) + 1;
    const currentParentRow = Math.floor(index / ySplit) + 1;
    const currentSubParentRow = Math.floor(subIndex / subSplitY) + 1;
    const parentTileHeight = 100 / ySplit;
    const subTileHeight = 100 / subSplitY;
    const parentYTile = (100 / ySplit ) * currentParentRow - parentTileHeight;

    var obj = {
        function: 'getSubTileY',
        //index: index,
        subIndex: subIndex,
        currentSubParentRow: currentSubParentRow,
        //ySplit: ySplit,
        subSplitY: subSplitY,
        //parentTileHeight: parentTileHeight,
        subTileHeight: subTileHeight,
        //parentYTile: parentYTile,
        return: currentSubParentRow * subTileHeight - subTileHeight
    }
    console.log(obj)
    return currentSubParentRow * subTileHeight - subTileHeight;
  };

const Tiles = ({idsuffix, refContainer,  tiles, handleTileClick, xSplit, ySplit, xsegmentSize, ysegmentSize, selectedX, selectedY, clicked, color, clickedValue, clickedObject, clickedObjectValue, subObjectArray, subSplitX, subSplitY, subsegmentSizeX, subsegmentSizeY, canvasRef, zoomCanvasSize, selectedTilesArray}) => {
    //console.log(typeof(tiles))
    //console.log(tiles)
    //const tilesArray = Object.values(tiles)[0]
    //console.log(typeof(subObjectArray));
    //console.log(Object.keys(subObjectArray))
    //console.log(Object.values(subObjectArray))
    //console.log(Object.keys(subObjectArray));
    //console.log(subObjectArray['1'].id);
    //console.log(subObjectArray);
    
    function handleClick(e) {
        //var id = e.target.id
        //var count = id.split('-').length-1
        
        //if (count>0) {
        //    id=id.split('-')[1]
        //}
        //console.log(id)
        //id  = id.replace(idsuffix,'')
        //id  = id.replace('-','')
        
        //index(Number(id))
        var x = Number(e.currentTarget.getAttribute('dataset-xval'))
        var y = Number(e.currentTarget.getAttribute('dataset-yval'))
        selectedX(x)
        selectedY(y)
        
        //clicked(!clickedValue)
        color('')
        clickedObject(clickedObjectValue)

        if (canvasRef.current) {
            let canvasMultiplierX = zoomCanvasSize / xsegmentSize
            let canvasMultiplierY = zoomCanvasSize / ysegmentSize

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = image;
            img.onload = () => {
                //ctx.clearRect(0, 0, canvas.width, canvas.height);
                //ctx.drawImage(img, x, y, xsegmentSize, ysegmentSize, 0, 0, xsegmentSize*canvasMultiplierX, ysegmentSize*canvasMultiplierY);
            }
        }
    }
    return (
        <>
            
            {tiles.map((v, i) => (
                subObjectArray!=undefined && subObjectArray[i].value.length === 0 ?
                    <div
                    key={i}
                    className="tile "
                    style={{
                        width: `${100 / xSplit}%`,
                        height: `${100 / ySplit}%`,
                        top: `${getTileX(i, xSplit, ySplit)}%`,
                        left: `${getTileY(i, xSplit)}%`,
                        background: selectedTilesArray.includes(i) ? 'rgba(0, 0, 0, 0.2)' : 'none'
                    }}>
                    </div> : subObjectArray[i].value.map((c,x) => (
                        <div
                        id={`${idsuffix}-${i}-${x}`}
                        key={x}
                        className="subtile "
                        style={{
                            width: `${100 / xSplit / subSplitX}%`,
                            height: `${100 / ySplit / subSplitY}%`,
                            top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
                            left: `${getSubTileY(i, x,xSplit, subSplitX)}%`,
                        }}>
                    </div>
                    ))
            ))}
            {tiles.map((v, i) => (
                subObjectArray[i].value.length === 0 ?
                <div
                    key={i}
                    id={`${idsuffix}-${i}`}
                    className="tileBorder "
                    style={{
                    width: `${100 / xSplit}%`,
                    height: `${100 / ySplit}%`,
                    top: `${getTileX(i, xSplit, ySplit)}%`,
                    left: `${getTileY(i, xSplit)}%`
                    }}
                >
                    <div className="tileBorderContent "
                        id={`${idsuffix}-${i}`}
                        ref={refContainer}

                        dataset-index={i}
                        dataset-subindex={null}
                        dataset-xval={getXCoord(i,xSplit,xsegmentSize)}
                        dataset-yval={getYCoord(i,xSplit,ysegmentSize)}
                        dataset-col={i % xSplit}
                        dataset-row={Math.floor(i / xSplit)}

                        onClick={(e) => handleTileClick(e)}
                    ></div>
                </div> : subObjectArray[i].value.map((c,x) => ( 
                                     <div
                                     key={x}
                                     id={`${idsuffix}-${i}-${x}`}
                                     className="subtileBorder "
                                     style={{
                                     width: `${100 / xSplit / subSplitX}%`,
                                     height: `${100 / ySplit / subSplitY}%`,
                                     top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
                                     left: `${getSubTileY(i, x, xSplit, subSplitX)}%`
                                     
                                     }}
                                 >
                                     <div className="subtileBorderContent "
                                         id={`${idsuffix}-${i}-${x}`}
                                         dataset-index={i}
                                         dataset-subindex={x}
                                         dataset-xval={getSubXCoord(i,x,xSplit,xsegmentSize, subSplitX, subsegmentSizeX)}
                                         dataset-yval={getSubYCoord(i,x,ySplit,ysegmentSize, subSplitY, subsegmentSizeY)}
                                         dataset-col={i % xSplit}
                                         dataset-row={Math.floor(i / xSplit)}
                                         onClick={(e) => handlTileClick(e)}

                                     ></div>
                                 </div>
                ))
            ))}
            
        </>
    )
}

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
  
    return (
      <div className="tools">
        <button className="inline-flex justify-center items-center xaspect-square whitespace-nowrap rounded-full border border-primary bg-primary p-2 text-sm font-medium tracking-wide text-on-primary transition hover:opacity-75 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:border-primary-dark dark:bg-primary-dark dark:text-on-primary-dark dark:focus-visible:outline-primary-dark" onClick={() => zoomIn()}>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-5 fill-on-primary dark:fill-on-primary-dark" fill="currentColor">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
        </button>
        <button className="inline-flex justify-center items-center xaspect-square whitespace-nowrap rounded-full border border-primary bg-primary p-2 text-sm font-medium tracking-wide text-on-primary transition hover:opacity-75 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:border-primary-dark dark:bg-primary-dark dark:text-on-primary-dark dark:focus-visible:outline-primary-dark" onClick={() => zoomOut()}>
            <span className="text-2xl">&#8722;</span>
        </button>
        <button onClick={() => resetTransform()}>x</button>
      </div>
    );
  };


export default function App() {
    const canvasRef = useRef(null);
    const refContainer = useRef(null);
    const [selectedTilesArray, setSelectedTilesArray] = useState([]);
    const [selectedSubTilesArray, setSelectedSubTilesArray] = useState([]);

    const [selectedTiles, setSelectedTiles] = useState([]); // Updated to handle multiple selections
    const [gradients, setGradients] = useState({});
    const [tileHeight, setTileHeight] = useState(0);
    const [tileWidth, setTileWidth] = useState(0);
    
    const [zoom, setZoom] = useState(10);
    const [clicked, setClicked] = useState(false);
    const [divClicked, setDivClicked] = useState({});
    const [xsegmentSize, setXSegmentSize] = useState(0);
    const [ysegmentSize, setYSegmentSize] = useState(0);
    const [subsegmentSizeX, setSubSegmentSizeX] = useState(5);
    const [subsegmentSizeY, setSubSegmentSizeY] = useState(5);
    const [xSplit, setxSplit] = useState(10);
    const [ySplit, setySplit] = useState(10);
    // const [horizontalSubSplit, setHorizontalSubSplit] = useState(10);
    // const [verticalSubSplit, setVerticalSubSplit] = useState(10);
    const [overlap, setOverlap] = useState(0);
    const [img, setImg] = useState();
    const [imageHeight, setImageHeight] = useState(100)
    const [imageWidth, setImageWidth] = useState(100)
    const [color, setColor] = useState('');
    //const degrees = 90//color ? parseInt(color?.split(',')[0]?.split('(')[1]) : 90
    // const [degrees, setDegrees] = useState(180);

    const [customPresets, setCustomPresets] = useState([]);
    let initalArray = Array.from({ length: xSplit * ySplit });
    const [dataArray, setDataArray] = useState(initalArray);
    const { gradientType, setLinear, setRadial, addPoint, deletePoint, degrees, setPointLeft, currentLeft, selectedPoint, setSelectedPoint, handleChange } = useColorPicker(color, setColor);
    const [selectedX, setSelectedX] = useState();
    const [selectedY, setSelectedY] = useState();
    const [selectedSubY, setSelectedSubY] = useState();
    const [selectedSubX, setSelectedSubX] = useState();
    //const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState();
    const [imageBuffer, setImageBuffer] = useState(0);
    const [split, setSplit] = useState();
    const [splitParents, setSplitParents] = useState([]);
    const [subSplitX, setSubSplitX] = useState(5);
    const [subSplitY, setSubSplitY] = useState(5);
    const [zoomCanvasSize, setZoomCanvasSize] = useState(200);
    const [clickedObject, setClickedObject] = useState();
    const [zoomImage, setZoomImage] = useState();
    //const [segmentSize, setSegmentSize] = useState(5);
    //const [imageColumns, setImageColumns] = useState(0)
    const aspectRatio = xsegmentSize / ysegmentSize
    const tiles = Array.from({ length: xSplit * ySplit });
    const subTiles = Array.from({ length: subSplitX * subSplitY });
    const initalsubObjectArray = () => {
        //let output = new Array(tiles.length).fill([]);
        var newArray=[]
        var newObj = {}
        for (let index = 0; index < tiles.length; index++) {
            newObj = {
                id: index,
                value: []
            }
             newArray.push(newObj)
         }
        var output = newArray;
        //console.log( (output) );
        return output

        // var keys = []
        // var values = []
        // for (let index = 0; index < tiles.length; index++) {
        //     //keys.push(`${index}`)
        //     //values.push([])

        // }
        // const keyValuePairs = keys.map((key, index) => [key, values[index]]);
        // const object = Object.fromEntries(keyValuePairs);
        // return object
    }

    const [subObjectArray, setSubObjectArray] = useState(initalsubObjectArray());
    //const subObjectArray = initalsubObjectArray()
    const zoomImg = (newImage) => {
        //console.log(newImage)
        setZoomImage(newImage)
    }

      function handleSelectedX(val) {
        setSelectedX(val)
      }
      function handleSelectedY(val) {
        setSelectedY(val)
      }

      function handleClicked(val) {
        setClicked(val)
      }
      function handleColor(val) {
        setColor(val)
      }
      function handleClickedObject(val) {
        setClickedObject(val)
      }
    function UpdateDataArray () {
        // var newDataArray = []
        // for (let index = 0; index < dataArray.length; index++) {
        //     let countDash = index.toString().split('-').length-1
        // }
        // const newDataArray = dataArray.map((c, i) => {
        //     let countDash = i.toString().split('-').length-1
        //     if (countDash===0) {
        //         if (i === selectedTilesArray[0] && selectedSubTilesArray.length === 0) {
        //             return color;

        //         } else if (i === selectedTilesArray[0] && selectedSubTilesArray.length === 1) {

        //         }
        //     } else if (countDash===1) {
        //     }
        const newDataArray = dataArray.map((c, i) => {
            if (i === selectedTilesArray[0]) {
                //console.log('here')
              // Increment the clicked counter
              return color;
            } else {
              // The rest haven't changed
              return c;
            }
          });
        //console.log(newDataArray)
        debugger
        if (selectedTilesArray.length ===1 && selectedSubTilesArray.length === 1) {
            var newSubDataArray = {...subObjectArray}
            //console.log('UpdateDataArray :subObjectArray:' + JSON.stringify(subObjectArray))
            //console.log('UpdateDataArray :selectedTile:' + newSubDataArray[selectedTilesArray[0]].value)
            var tempObj = newSubDataArray[selectedTilesArray[0]].value
            //console.log(tempObj.length)
            var emptyArray = []
            for (let index = 0; index < tempObj.length; index++) {
                let c = null
                if (index === selectedSubTilesArray[0]) {
                    c = color
                }
                emptyArray.push(c)
                
            }
            
            //console.log('UpdateDataArray tempObj:' + JSON.stringify(tempObj))
            //console.log('UpdateDataArray emptyObj:' + JSON.stringify(emptyArray))
            //console.log('UpdateDataArray typeof:' + typeof(newSubDataArray[selectedTilesArray[0]].value))
            newSubDataArray[selectedTilesArray[0]].value = emptyArray
            setSubObjectArray(newSubDataArray)
        }
        
        setDataArray(newDataArray)

    }
    function UpdateDBTable () {
        var arrayObj = []
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i] !=undefined) {
                let obj = {index: i, color: dataArray[i]}
                arrayObj.push(obj)
            }
        }
            // POST
        var postBody = {
            "acf": {
                "css_coordinates": arrayObj
            }
        }
        let config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${myThemeParams.BearerToken}`
            }
        }
        axios.post('http://react-example.local/wp-json/wp/v2/css-image/5', postBody, config)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error with POST request:', error);
        });
    }
    //const X = arrayRange(0, imageWidth, xsegmentSize)
    //const Y = arrayRange(0, imageHeight, ysegmentSize)
    // const arrayRange = (start, stop, step) =>
    //     Array.from(
    //     { length: (stop - start) / step + 1 },
    //     (value, index) => start + index * step
    //     );
    // function handleSplit(e) { 
    //     let splitTemp = {}
    //     setSplit(e.target.checked)

    //     if (index != undefined && split===true) {
    //         splitTemp = {[index]: subTiles};
    //         console.log(subTiles)
    //         console.log(split)
    //     }

    // }
    const handleTileClick = (e) => {
        
        
        // if (copyFrom === true) {
        //     let currentIndex = Number(e.currentTarget.getAttribute('dataset-index'))
        //     const defaultGradient = { angle: 0, stops: [{ color: '#ffffff', position: 0 }, { color: '#000000', position: 100 }] };
        //     const gradient = gradients[currentIndex] || defaultGradient;

        //     //console.log('handleTick-CopyFrom: ' + gradient)
        //     //setGradients([selectedTiles[0]): gradient;
        //     if (!selectedTiles[0].index) {
        //         setAddColorStop(null);
        //     }
        // } else 
        if (!e.shiftKey) {
            
            let currentIndex = Number(e.currentTarget.getAttribute('dataset-index'))
            //console.log('Current index: ' + currentIndex)
            setSelectedTilesArray([currentIndex]);

            // if (currentIndex!=index) {
            //     //setSplit(false)
            //     setIndex(currentIndex)
            // } else {
            //     return
            // }
            // var x = Number(e.currentTarget.getAttribute('dataset-xval'))
            // var y = Number(e.currentTarget.getAttribute('dataset-yval'))
            // setSelectedX(x)
            // setSelectedY(y)
            
            // setSelectedTiles([{index: currentIndex, col: Number(e.currentTarget.getAttribute('dataset-col')), row: Number(e.currentTarget.getAttribute('dataset-row')) }]);
            
            // drawImageSegment([{index: currentIndex, col: Number(e.currentTarget.getAttribute('dataset-col')), row: Number(e.currentTarget.getAttribute('dataset-row')) }]);
            // const defaultGradient = { angle: 0, stops: [{ color: '#ffffff', position: 0 }, { color: '#000000', position: 100 }] };
            // const gradient = gradients[currentIndex] || defaultGradient;
            // // console.log('handleTick-Defult Gradient: ' + JSON.stringify(defaultGradient))
            // // console.log('handleTick-Gradient: ' + JSON.stringify(gradient))
            // // console.log('handleTick-Gradients: ' + JSON.stringify(gradients))

            // setGradients((prevGradients) => ({
            //     ...prevGradients,
            //     [currentIndex]: gradient,
            // }));
            //console.log(gradient)
            // if (!gradients[currentIndex]) {
            //     //setAddColorStop(null);
            // }
            //handleGradientChange(gradient);
        } else if (e.shiftKey) {
            // let currentIndex = Number(e.currentTarget.getAttribute('dataset-index'))
            // if (!checkTile(currentIndex)) {
            //     let valid = false
            //     let rowcol = ''
            //     //check new tile is in same Row or Col
            //        if (selectedTiles.length === 1 && (selectedTiles[0].col === Number(e.currentTarget.getAttribute('dataset-col')) || selectedTiles[0].row === Number(e.currentTarget.getAttribute('dataset-row')))) {
            //         valid = true
            //     } else if (selectedTiles.length > 1) {

            //         //check if row or col are equal for first two elements
            //         if (selectedTiles[0].col === selectedTiles[1].col) 
            //         {
            //             rowcol = 'col'
            //             if (selectedTiles[0].col === Number(e.currentTarget.getAttribute('dataset-col'))) {
            //                 valid 7= true
            //             }
            //         } else if (selectedTiles[0].row === selectedTiles[1].row) {
            //             rowcol = 'row'
            //             if (selectedTiles[0].row === Number(e.currentTarget.getAttribute('dataset-row'))) {
            //                 valid = true
            //             }
            //         }
            //     }
            //     if (valid) {
            //         var newArray = selectedTiles.slice();
            //         var newArray2 = selectedTilesArray.slice();
            //         newArray.push({index: currentIndex, col: Number(e.currentTarget.getAttribute('dataset-col')), row: Number(e.currentTarget.getAttribute('dataset-row')) });
            //         setSelectedTiles(newArray);
            //         newArray2.push(currentIndex);
            //         setSelectedTilesArray(newArray2);
            //         //console.log(newArray)
            //         drawImageSegment(newArray);
            //     } else {
            //         alert('Please select tiles in same row or column')
            //     }
            // }
        }
        //console.log(subObjectArray)
    };
    const drawSubImageSegment = () => {
        if (canvasRef.current && image && selectedSubTilesArray.length === 1) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = image;
            img.onload = () => {
                let xcoord = getXCoord(selectedTilesArray[0],xSplit,xsegmentSize)
                let ycoord = getYCoord(selectedTilesArray[0],xSplit,ysegmentSize)
                let xsubcoord = getSubXCoord(selectedTilesArray[0],selectedSubTilesArray[0],xSplit,xsegmentSize,subSplitX,subsegmentSizeX)
                let ysubcoord = getSubYCoord(selectedTilesArray[0],selectedSubTilesArray[0],ySplit,ysegmentSize,subSplitY,subsegmentSizeY)

                let obj = {
                    subxcoord: getSubXCoord(selectedTilesArray[0],selectedSubTilesArray[0],xSplit,xsegmentSize,subSplitX,subsegmentSizeX),
                    subycoord: getSubYCoord(selectedTilesArray[0],selectedSubTilesArray[0],ySplit,ysegmentSize,subSplitY,subsegmentSizeY),
                }
                console.log(obj)
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img,
                    xcoord + xsubcoord, 
                    ycoord + ysubcoord,
                    subsegmentSizeX, subsegmentSizeY, 0, 0, canvas.width, canvas.height);

            }
        }
    }

    const drawImageSegment = (indices) => {
        if (canvasRef.current && image) {
            var destX = 0
            var destY = 0
            var col=0
            var row=0
            var i = 0
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = image;
            img.onload = () => {

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let canvasMultiplierX = (zoomCanvasSize*aspectRatio) / xsegmentSize
                let canvasMultiplierY = zoomCanvasSize / ysegmentSize
                var obj = {
                    canvasMultiplierX: canvasMultiplierX,
                    canvasMultiplierY: canvasMultiplierY,
                    xsegmentSize: xsegmentSize,
                    ysegmentSize: ysegmentSize,
                    canvasHeight: canvas.height,
                    canvasWidth: canvas.width,
                    tileX: getXCoord(indices[0],xSplit,xsegmentSize),
                    tileY: getYCoord(indices[0],xSplit,ysegmentSize),

                }
                //console.log(obj);
                ctx.drawImage(img, getXCoord(indices[0],xSplit,xsegmentSize), getYCoord(indices[0],xSplit,ysegmentSize), xsegmentSize, ysegmentSize, 0, 0, canvas.width, canvas.height);
                if (indices.length === 1) {
                    // if (subIndex != undefined && split) {
                    //     console.log('Split')
                    //     ctx.drawImage(img, selectedX + selectedSubX, selectedY+selectedSubY, subsegmentSizeX, subsegmentSizeY, 0, 0, canvas.width, canvas.height);
                    // } else {
                        
                    // }

                } else if (indices.length > 1) {
                    indices.forEach( (item) => {
                        // const x = (item.index % xSplit) * xsegmentSize;
                        // const y = Math.floor(item.index / xSplit) * ysegmentSize;
                        // if (i>0) {
                        //     //col = index % xSplit > col ? col++ : col
                        //     if (item.index % xSplit > col) {
                        //         col++
                        //     }
                        //     if (Math.floor(item.index / xSplit) > row) {
                        //         row++
                        //     }
                        //     //const col = Math.floor(x / tileWidth);
                        //     //const row = Math.floor(y / tileHeight);
                        //     destX = col * xsegmentSize * zoom
                        //     destY = row * ysegmentSize * zoom
                        //     var obj = {index: item.index, x: x, y: y, destX: destX, destY: destY, row: item.row, col: item.col}
                        //     console.log(obj)
                        //     ctx.drawImage(img, x, y, xsegmentSize, ysegmentSize, destX, destY, xsegmentSize * zoom, ysegmentSize * zoom);

                        // } else {

                            // ctx.drawImage(img, x, y, xsegmentSize, ysegmentSize, destX, destY, xsegmentSize * zoom, ysegmentSize * zoom);
                        // }
                        i++
                    });
                }
            };
        }
    };
    const handleCanvasClick = (event) => {
        //console.log(event)
        //console.log('Ref:' + canvasRef.current)
        if (event.target) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const imageData = ctx.getImageData(x, y, 1, 1).data;
            const pickedColor = `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, ${imageData[3] / 255})`;
            //console.log(color)
            handleChange(pickedColor)
        }
    };

    function handleZoomClick(e) {
        //setClickedObject('zoom')
        var subidx = Number(Number(e.currentTarget.getAttribute('dataset-subindex')))
        setSelectedSubTilesArray([subidx])
        //console.log(subidx)
        //setSubIndex(subidx)
        // var x = Number(e.currentTarget.getAttribute('dataset-xval'))
        // var y = Number(e.currentTarget.getAttribute('dataset-yval'))
        // setSelectedSubX(x)
        // setSelectedSubY(y)
        // drawImageSegment(selectedTiles)
        // //setClicked(!clicked)

    }
    function handleClick(e) {
        setClickedObject('canvas')
        var idx = parseInt(e.currentTarget.id)
        setIndex(idx)
        var x = Number(e.currentTarget.getAttribute('dataset-xval'))
        var y = Number(e.currentTarget.getAttribute('dataset-yval'))
        setSelectedX(x)
        setSelectedY(y)
        
        var obj = {
            img: image,
            x: x,
            y: y,
            xseg: xsegmentSize,
            yseg: ysegmentSize
        }
        setSplit(false)
        setClicked(!clicked)
        setColor('')

    }
    function handleClearSplit() {
        setSelectedSubTilesArray([])
        if (selectedTilesArray[0]!=undefined) {
            var newSubObjectArray = {...subObjectArray}
            newSubObjectArray[selectedTilesArray[0]].value = []

            setSubObjectArray(newSubObjectArray)
            setSplit(false)
        }
    }
    function handleSplit(e) {
        if (e.target.checked) {
            if (selectedTilesArray[0]!=undefined) {
                var newSubObjectArray = {...subObjectArray}
                newSubObjectArray[selectedTilesArray[0]].value = subTiles
    
                setSubObjectArray(newSubObjectArray)
                setSplit(true)
            }
        } else {
            handleClearSplit()
        }

    }

    useEffect(() => {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = image
        img.onload = () => {
            setImageHeight(img.height);
            setImageWidth(img.width);
        }
        setImg(img)
        
        },[])
        useEffect(() => {
            //console.log("Horizontal changed to", xSplit);
            //console.log("Vertical changed to", ySplit);
            //console.log('Set Segment Size: useEffect 2')
            //console.log(imageWidth)
            //console.log(xSplit)
            setXSegmentSize(imageWidth / xSplit)
            setYSegmentSize(imageHeight / ySplit)

            },[xSplit, ySplit, xsegmentSize, ysegmentSize, imageHeight, imageWidth])
        useEffect(() => {
            UpdateDataArray()
            //console.log(subObjectArray)
            //console.log('useEffect Update color')
        },[color])

        useEffect(() => { 
            // if (index != undefined && split===true) {
            //     console.log(subTiles)
            // }
            //console.log('useEffect Update setSubObjectArray')
            
            setSubSegmentSizeX(xsegmentSize / subSplitX)
            setSubSegmentSizeY(ysegmentSize  / subSplitY)
            //handlesubObjectArray()

            // var object = initalsubObjectArray()

            // for (let idx = 0; idx < subObjectArray.length; idx++) {
            //     if (idx != selectedTilesArray[0] ){
            //         object[idx].value = subObjectArray[idx].value
            //     }
            // }

            // //console.log(object)
            // if (split === true && selectedTilesArray[0]!=undefined) {
            //     object[selectedTilesArray[0]].value = subTiles
            //     //console.log(subSplitY)
            //     //console.log(subTiles)
            //     //console.log(object)
            // } 
            // //else if (split === false && selectedTilesArray[0]!=undefined && selectedSubTilesArray.length === 0) {
            // //    object[selectedTilesArray[0]].value = []
            //  //   setSubIndex(null)
            // //}
            // console.log('useeffect split:' + JSON.stringify(object))
            // setSubObjectArray(object)
            //console.log(subObjectArray)
        },[split, subSplitX, subSplitY])

         useEffect(() => {
            if (refContainer.current) {
                //console.log(refContainer.current.getBoundingClientRect().width)
                setTileHeight(refContainer.current.offsetHeight*.83);
                setTileWidth(refContainer.current.offsetWidth*.83);
            }

         },[refContainer])
         useEffect(() => {
            setSplit(false)
            setSelectedSubTilesArray([])
            //console.log('Selected Tiles Array - draw Image Segment')
            drawImageSegment(selectedTilesArray)

         },[selectedTilesArray])
         useEffect(() => {
            
            if (selectedSubTilesArray.length === 1 && split === true && selectedTilesArray.length === 1) {
                drawSubImageSegment()

                setSplit(false)
            } else if (selectedSubTilesArray.length === 0 && split === false && selectedTilesArray.length === 1) {
                drawImageSegment(selectedTilesArray)
                
            }
            console.log(subObjectArray)

         },[selectedSubTilesArray])
    return (
        <div className="App">
    
          <div className="form">
            <div className="input">
              <label htmlFor="xSplit">
                X Split
              </label>
              <input
                type="number"
                id="xSplit"
                value={xSplit}
                onChange={(e) => setxSplit(Number(e.target.value))}
              />
            </div>
    
            <div className="input">
              <label htmlFor="ySplit">Y Split</label>
              <input
                type="number"
                id="ySplit"
                value={ySplit}
                onChange={(e) => setySplit(Number(e.target.value))}
              />
            </div>
            <div className="input">
              <label htmlFor="subSplitX">Sub Split X</label>
              <input
                type="number"
                id="subSplitX"
                value={subSplitX}
                onChange={(e) => setSubSplitX(Number(e.target.value))}
              />
            </div>
            <div className="input">
              <label htmlFor="subSplitY">Sub Split Y</label>
              <input
                type="number"
                id="subSplitY"
                value={subSplitY}
                onChange={(e) => setSubSplitY(Number(e.target.value))}
              />
            </div>
    
            <div className="input">
              <label htmlFor="xsegmentSize">X Segment Size</label>
              <input
                type="number"
                id="xsegmentSize"
                value={xsegmentSize}
              />
            </div>
            <div className="input">
              <label htmlFor="ysegmentSize">Y Segment Size</label>
              <input
                type="number"
                id="ysegmentSize"
                value={ysegmentSize}
              />
            </div>
    
            <div className="input">
              <label htmlFor="imageWidth">Image Width</label>
              <input
                type="number"
                id="imageWidth"
                value={imageWidth}
              />
            </div>
            <div className="input">
              <label htmlFor="imageHeight">Image Height</label>
              <input
                type="number"
                id="imageHeight"
                value={imageHeight}
              />
            </div>
            <div className="input">
              <label htmlFor="zoom">Zoom</label>
              <select
                    id="zoom"
                    name="zoom"
                    value={zoom}
                    onChange={e => setZoom(Number(e.target.value))}
                >
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="input">
              <label htmlFor="imageBuffer">ImageBuffer</label>
              <input
                type="number"
                id="imageBuffer"
                value={imageBuffer}
                onChange={(e) => setImageBuffer(e.target.value)}
              />
            </div>
            </div>
            <div>
                <div style={{background: selectedTilesArray.length === 1 ? 'red' : 'none'}}>
                    Index: {selectedTilesArray[0]}
                </div>
                <div>
                    <label for="split">Split</label>
                    <input id="split" type="checkbox" checked={split} onChange={(e) => handleSplit(e)} defaultChecked={false}></input>
                    <button onClick={handleClearSplit}>Clear Split</button>
                </div>
                <div style={{background: selectedSubTilesArray.length === 1 ? 'red' : 'none'}}>
                    Sub Index: {selectedSubTilesArray[0]}
                    <button
                        onClick={()=>setSelectedSubTilesArray([])}
                    >Clear</button>
                </div>
            </div>
            <div>{color}</div>
            <div className="grid border border-blue-800 grid-flow-col grid-rows-3 gap-4">
                <div className="border row-span-3">
                    <div>
                        <div className="flex flex-row">
                            <div className={`h-[${zoomCanvasSize}px] w-[${zoomCanvasSize*aspectRatio}px] relative`}>
                                <div className="inline-block  ">
                                <Canvas 
                                    className="imageWrapper2XX inline-block absolute" 
                                    canvasRef={canvasRef}
                                    //draw={draw} 
                                    height={zoomCanvasSize} 
                                    width={zoomCanvasSize*aspectRatio} 
                                    //clicked={clicked} 
                                    stateChanger={zoomImg} 
                                    handleCanvasClick={handleCanvasClick} />
                                            {subObjectArray[selectedTilesArray[0]] != undefined &&
                                                subObjectArray[selectedTilesArray[0]].value.map((t, i) => (
                                                    selectedTilesArray[0] !=undefined && split === true ?
                                                        <div
                                                            key={i}
                                                            // id={`id-${Math.round(getXCoord(i,xSplit,xsegmentSize))}-${getYCoord(i,xSplit,ysegmentSize)}`}
                                                            className="tile2XX absolute inline-block "
                                                            style={{
                                                            width: `${100 / subSplitX}%`,
                                                            height: `${100 / subSplitY}%`,
                                                            top: `${getTileX(i, subSplitX, subSplitY)}%`,
                                                            left: `${getTileY(i, subSplitX)}%`
                                                            }}
                                                        >
                                                        </div> : null
                                                    
                                                ))
                                            }
                                            {subObjectArray[selectedTilesArray[0]] != undefined &&
                                                subObjectArray[selectedTilesArray[0]].value.map((t, i) => (
                                                    selectedTilesArray[0] !=undefined && split === true ?
                                                        <div
                                                        key={i}
                                                        className="tileBorderxx absolute left-0 top-0"
                                                        style={{
                                                        width: `${100 / subSplitX}%`,
                                                        height: `${100 / subSplitY}%`,
                                                        top: `${getTileX(i, subSplitX, subSplitY)}%`,
                                                        left: `${getTileY(i, subSplitX)}%`
                                                        }}
                                                    >
                                                        <div className="tileBorderContentxx absolute -top-[1px] -right-[1px] border bottom-0 left-0 border-[#ffffff18]"
                                                            dataset-index={selectedTilesArray[0]}
                                                            dataset-subindex={i}
                                                            dataset-xval={getSubXCoord(selectedTilesArray[0],i, xSplit,xsegmentSize,subSplitX,subsegmentSizeX)}
                                                            dataset-yval={getSubYCoord(selectedTilesArray[0],i, ySplit,ysegmentSize,subSplitX,subsegmentSizeY)}
                                                            onClick={(e) => handleZoomClick(e)}
                                                        ></div>
                                                    </div> : null
                                                    
                                                ))
                                            }
    
                    
                                </div>
    
                            </div>
                            <div>
                                    <div
                                    className=""
                                    style={{
                                    background: color,
                                    height: `${zoomCanvasSize}px`,
                                    width: `${zoomCanvasSize * aspectRatio}px`
                                }}
                                ></div>
                            
                            </div>
                        </div>
                    </div>
                    <div>
                    B
                        {/* <input type="number" value={degrees} onChange={handleDegrees} /> */}
                        <ColorPicker value={color} onChange={setColor} height={100} width={290} hideColorTypeBtns={false} presets={customPresets} />
                    </div>
                </div>
    
                <div className="col-span-4">D
                    <div className="imageWrapper">
                         <TransformWrapper
                            initialScale={1}
                            initialPositionX={200}
                            initialPositionY={100}> 
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => ( 
                                <> 
                                <Controls />
                                <TransformComponent> 
                                    <img className="image" src={image} alt="" />
                                    <Tiles 
                                        idsuffix={'t1'}
                                        tiles={tiles}
                                        subObjectArray={subObjectArray}
                                        xSplit={xSplit}
                                        ySplit={ySplit}
                                        xsegmentSize={xsegmentSize}
                                        ysegmentSize={ysegmentSize}
                                        selectedX={handleSelectedX}
                                        selectedY={handleSelectedY}
                                        clicked={handleClicked}
                                        color={handleColor}
                                        clickedValue={clicked}
                                        clickedObject={handleClickedObject}
                                        clickedObjectValue={'canvas'}
                                        subSplitX={subSplitX}
                                        subSplitY={subSplitY}
                                        subsegmentSizeX={subsegmentSizeX}
                                        subsegmentSizeY={subsegmentSizeY}
                                        canvasRef={canvasRef}
                                        zoomCanvasSize={zoomCanvasSize}
                                        handleTileClick={handleTileClick}
                                        refContainer={refContainer}
                                        selectedTilesArray={selectedTilesArray}
                                        
                                        ></Tiles>
                                 </TransformComponent> 
                                </>
                             )}
                        </TransformWrapper>
                        
                    </div>
    
                    <div className="col-span-4">
                    E
                        <div>
                            <div className="imageWrapper2XX inline-block overflow-hidden absolute">
                            <TransformWrapper
                                initialScale={1}
                                initialPositionX={200}
                                initialPositionY={100}> 
                                {({ zoomIn, zoomOut, resetTransform, ...rest }) => ( 
                                    <>
                                    <Controls />
                                    <TransformComponent> 
                                        <div 
                                            className="inline-block"
                                            style={{
                                                //height: `${Number(imageHeight) + Number(xSplit)}px`,
                                                //width: `${Number(imageWidth) + Number(ySplit)}px`
                                                width: `${tileWidth*xSplit}px`,
                                                height: `${tileHeight*ySplit}px`
                                                //height: `${100}%`,
                                                //width: `${100}%`,
                                                //width: `${Number(imageWidth)}px`
                                            }}
                                        ></div>
                                        {/* <img className="imag2" height={imageHeight} width={imageWidth}  alt="" /> */}
                                        {tiles.map((t, i) => (
                                            subObjectArray!=undefined && subObjectArray[i].value.length === 0 ?
                                            <div
                                                key={i}
                                                // id={`id-${Math.round(getXCoord(i,xSplit,xsegmentSize))}-${getYCoord(i,xSplit,ysegmentSize)}`}
                                                
                                                className="tile2XX absolute inline-block "
                                                style={{
                                                // width: `${100 / xSplit}%`,
                                                // height: `${100 / ySplit}%`,
                                                width: `${tileWidth}px`,
                                                height: `${tileHeight}px`,
                                                top: `${getTileX(i, xSplit, ySplit)}%`,
                                                left: `${getTileY(i, xSplit)}%`
                                                }}
                                            >
                                        </div>: subObjectArray[i].value.map((c,x) => (
                                        <div
                                            id={`t2-${i}-${x}`}
                                            key={x}
                                            className="subtile "
                                            style={{
                                                width: `${100 / xSplit / subSplitX}%`,
                                                height: `${100 / ySplit / subSplitY}%`,
                                                top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
                                                left: `${getSubTileY(i, x,xSplit, subSplitX)}%`,
                                            }}>
                                        </div>
                                        ))
                                        ))}
                                        {tiles.map((t, i) => (
                                            subObjectArray[i].value.length === 0 ?
                                                <div
                                                    key={i}
                                                    className="tileBorderxx absolute left-0 top-0"
                                                    style={{
                                                    width: `${100 / xSplit}%`,
                                                    height: `${100 / ySplit}%`,
                                                    top: `${getTileX(i, xSplit, ySplit)}%`,
                                                    left: `${getTileY(i, xSplit)}%`
                                                    }}
                                                >
                                                    <div className="tileBorderContentxx absolute -top-[1px] -right-[1px] border bottom-0 left-0 border-[#d3d3d3]"
                                                        id={i}
                                                        dataset-xval={getXCoord(i,xSplit,xsegmentSize)}
                                                        dataset-yval={getYCoord(i,xSplit,ysegmentSize)}
                                                        
                                                        style={{
                                                            background: `${dataArray[i]}`
                                                        }}
                                                    ></div>
                                                </div> : subObjectArray[i].value.map((c,x) => ( 
                                                <div
                                                    key={x}
                                                    id={`t2-${i}-${x}`}
                                                    className="subtileBorderxx absolute left-0 top-0 "
                                                    style={{
                                                    width: `${100 / xSplit / subSplitX}%`,
                                                    height: `${100 / ySplit / subSplitY}%`,
                                                    top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
                                                    left: `${getSubTileY(i, x, xSplit, subSplitX)}%`
                                                    }}
                                                >
                                                    <div className=" absolute -top-[1px] -right-[1px] border bottom-0 left-0 border-[#d3d3d3] "
                                                        // className={subObjectArray[i].value[x] != '' ? `red`:`absolute -top-[1px] -right-[1px] border bottom-0 left-0 border-[#d3d3d3]`}
                                                    
                                                    // 
                                                        id={`t2-${i}-${x}`}
                                                        dataset-xval={getSubXCoord(i,x,xSplit,xsegmentSize, subSplitX, subsegmentSizeX)}
                                                        dataset-yval={getSubYCoord(i,x,ySplit,ysegmentSize, subSplitY, subsegmentSizeY)}
                                                        
                                                        style={{
                                                            background: `${subObjectArray[i].value[x]}`,
                                                            borderStyle: `${subObjectArray[i].value[x] != null ? `none`:`solid`}`
                                                        }}
                                                    ></div>
                                                </div>
                                            ))
                                        ))}

                                </TransformComponent> 
                                </>
                             )}
                             </TransformWrapper>
         
                            </div>
                        </div>
    
                     </div>
    
                </div>
    
    
            </div>
            </div>
      );

}
