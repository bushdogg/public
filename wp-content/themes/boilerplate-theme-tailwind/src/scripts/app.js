import React, { useState, useEffect, useRef, Component, act } from "react";
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'
import Canvas from './Canvas2Component'   
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import axios from 'axios';
import GradientBuilder from "./gradientBuilder/GradientBuilder";


// Access the post ID variable passed from PHP
if (typeof post_id_object !== 'undefined') {
    var post_id = post_id_object.post_id;
    //console.log(post_id); // Output the post ID to the browser console
}

const image = acf_vars.my_localized_var.url
    function convertHexToRgbA(hexVal) {
        let ret;

        // If the hex value is valid.
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) {

            // Getting the content after '#',
            // eg. 'ffffff' in case of '#ffffff'
            ret = hexVal.slice(1);

            // Splitting each character
            ret = ret.split('');

            // Checking if the length is 3
            // then make that 6
            if (ret.length == 3) {
                let ar = [];
                ar.push(ret[0]);
                ar.push(ret[0]);
                ar.push(ret[1]);
                ar.push(ret[1]);
                ar.push(ret[2]);
                ar.push(ret[2]);
                ret = ar;
            }

            // Starts with '0x'(in hexadecimal)
            ret = '0x' + ret.join('');

            // Converting the first 2 characters
            // from hexadecimal to r value
            let r = (ret >> 16) & 255;

            // Converting the second 2 characters
            // to hexadecimal to g value
            let g = (ret >> 8) & 255;

            // Converting the last 2 characters
            // to hexadecimal to b value
            let b = ret & 255;

            // Appending all of them to make
            // the RGBA value
            return 'rgba(' + [r, g, b].join(',') + ',1)';
        }
    }
  // Function to convert RGBA to Hex
  const rgbaToHex = (rgba) => {
    const parts = rgba.match(/(\d+), (\d+), (\d+), (\d?\.?\d+)/);
    const r = parseInt(parts[1]).toString(16).padStart(2, '0');
    const g = parseInt(parts[2]).toString(16).padStart(2, '0');
    const b = parseInt(parts[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  };

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

const getSubYCoord = (index, i, xSplit, Ysegment, subSplitX, subsegmentSizeY) => {
    const currentRow = Math.floor(index / xSplit);
    const parentYCoord = currentRow * Ysegment
    const childRow = Math.floor(i / subSplitX);
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
    //console.log(obj)
    return currentSubParentRow * subTileHeight - subTileHeight;
  };

const Tiles = ({idsuffix, refContainer,  tiles, handleTileClick, handleSubTileClick, xSplit, ySplit, xSegmentSize, ySegmentSize, selectedX, selectedY, clicked, clickedValue, clickedObject, clickedObjectValue, subSplitX, subSplitY, subsegmentSizeX, subsegmentSizeY, canvasRef, zoomCanvasSize, selectedTilesArray, selectedSubTilesArray}) => {
    //console.log(tiles)
    return (
        <>
            {Object.entries(tiles).map((v, i) => (
                tiles[i].subTiles.length===0 || typeof(tiles[i])==='string' ?
                <div
                    ref={refContainer}
                    key={i}
                    id={`${idsuffix}-${i}`}
                    dataset-index={i}
                    className={`absolute -top-[1px] -right-[1px] border-[#f3f3f39c] bottom-0 left-0 border-l border-b ${Math.floor(i / xSplit) === 0 ? 'border-t':'border-t-0'} `}
                    //className={Math.floor(i / xSplit) === 0 ? 'border-t':'border-t-0'}
                    style={{
                        width: `${100 / xSplit}%`,
                        height: `${100 / ySplit}%`,
                        top: `${getTileX(i, xSplit, ySplit)}%`,
                        left: `${getTileY(i, xSplit)}%`,
                        background: selectedTilesArray.includes(i) ? 'rgba(0, 0, 0, 0.4)' : 'none',
                        
                    }}
                    onClick={(e) => handleTileClick(e)}
                    >
                </div>
                :
                tiles[i].subTiles.map((c,x) => (
                    <div
                    id={`${idsuffix}-${i}-${x}`}
                    dataset-parent={i}

                    key={x}
                    className={`absolute top-0 right-0 bottom-0 left-0 border-[#f3f3f39c] border-l border-b`}
                    style={{
                        width: `${100 / xSplit / subSplitX}%`,
                        height: `${100 / ySplit / subSplitY}%`,
                        top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
                        left: `${getSubTileY(i, x,xSplit, subSplitX)}%`,
                        background: selectedTilesArray.includes(i) && selectedSubTilesArray.includes(x) ? 'rgba(0, 0, 0, 0.4)' : 'none'
                    }}
                    onClick={(e)=> handleSubTileClick(e)}
                    >
                </div>
                ))
            ))
        }
                
            
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
    const [gradients, setGradients] = useState([]);
    const [backgrounds, setBackgrounds] = useState([]);
    const [activeGradient, setActiveGradient] = useState();
    const [activeStop, setActiveStop] = useState({}); // State for the active stop
    const [selectedTiles, setSelectedTiles] = useState([]); // Updated to handle multiple selections
    const [tileHeight, setTileHeight] = useState(0);
    const [tileWidth, setTileWidth] = useState(0);
    const [img, setImg] = useState();
    const [imageHeight, setImageHeight] = useState(100)
    const [imageWidth, setImageWidth] = useState(100)
    const [xSplit, setxSplit] = useState(10);
    const [ySplit, setySplit] = useState(10);
    const [stops, setStops] = useState([{ color: 'rgba(255, 255, 255, 1)', position_from: 0, position_to: null }, { color: 'rgba(0, 0, 0, 1)', position_from: 100, position_to: null }]);
    const [zoom, setZoom] = useState(10);
    const [clicked, setClicked] = useState(false);
    const [divClicked, setDivClicked] = useState({});
    const [xSegmentSize, setXSegmentSize] = useState(imageWidth / xSplit);
    const [ySegmentSize, setYSegmentSize] = useState(imageHeight / ySplit);
    const [subSplitX, setSubSplitX] = useState(5);
    const [subSplitY, setSubSplitY] = useState(5);
    const [subsegmentSizeX, setSubSegmentSizeX] = useState(xSegmentSize / subSplitX);
    const [subsegmentSizeY, setSubSegmentSizeY] = useState(ySegmentSize / subSplitY);
    // const [horizontalSubSplit, setHorizontalSubSplit] = useState(10);
    // const [verticalSubSplit, setVerticalSubSplit] = useState(10);
    const [saving, setSaving] = useState(false);

    const [color, setColor] = useState('');
    const [background, setBackground] = useState('');
    //const degrees = 90//color ? parseInt(color?.split(',')[0]?.split('(')[1]) : 90
    // const [degrees, setDegrees] = useState(180);

    const [customPresets, setCustomPresets] = useState([]);
    let initalDataArray = Array.from({ length: xSplit * ySplit });
    const [dataArray, setDataArray] = useState(initalDataArray);
    const { gradientType, setLinear, setRadial, addPoint, deletePoint, degrees, setPointLeft, currentLeft, selectedPoint, setSelectedPoint, handleChange } = useColorPicker(color, setColor);
    const [selectedX, setSelectedX] = useState();
    const [selectedY, setSelectedY] = useState();
    const [selectedSubY, setSelectedSubY] = useState();
    const [selectedSubX, setSelectedSubX] = useState();
    //const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState();
    const [imageBuffer, setImageBuffer] = useState(0);
    const [split, setSplit] = useState(false);
    const [splitParents, setSplitParents] = useState([]);
    const [canvasElement, setCanvasElement] = useState(document.getElementById('canvas-2'));
    const [expandBuilder, setExpandBuilder] = useState(false);

    //const element = document.getElementById('canvas-2');
    //if (element!=null) {
    //   console.log(element.getBoundingClientRect())
    //}

    
    const [zoomCanvasSize, setZoomCanvasSize] = useState({
        width: 0,
        height: 0,
    });
    const [clickedObject, setClickedObject] = useState();
    const [zoomImage, setZoomImage] = useState();
    //const [segmentSize, setSegmentSize] = useState(5);
    //const [imageColumns, setImageColumns] = useState(0)
    const aspectRatio = ySegmentSize / xSegmentSize
    function initalTilesArray () {
        let array = Array.from({ length: xSplit * ySplit });
        for (let index = 0; index < array.length; index++) {
            var element = array[index];
            element = {
                gradients: [],
                subTiles: []
            }
            array[index]=element
            
        }
        return array
    }
    const [tiles, setTiles] = useState(initalTilesArray());
    //const tiles = Array.from({ length: xSplit * ySplit });
    function initalSubTilesArray () {
        let array = Array.from({ length: subSplitX * subSplitY });
        for (let index = 0; index < array.length; index++) {
            var element = array[index];
            element = {
                gradients: []
            }
            array[index]=element
            
        }
        return array
    }
7
    const subTiles = Array.from(initalSubTilesArray());

    const zoomImg = (newImage) => {
        //console.log(newImage)
        setZoomImage(newImage)
    }
    function handleBackgroundChange(val) {
        setBackground(val)
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

      function handleClickedObject(val) {
        setClickedObject(val)
      }
      function handleActiveStop(gradientIndex, stopIndex) {
        //console.log('handleActiveStop')
        setActiveStop({gradientIndex: gradientIndex, stopIndex: stopIndex})
      }
      function handleGradientsChange(index, key, val) {
        const newTiles = [...tiles]
        if (selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined) {
            newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[index][key] = val
        } else if (selectedTilesArray[0]!=undefined) {
            newTiles[selectedTilesArray[0]].gradients[index][key] = val
        }
        //const newGradients = [...tiles[selectedTilesArray].gradients]
        //newGradients[index][key] = val
        //newTiles[selectedTilesArray[0]].gradients = newGradients
        //console.log(newGradients)
        //setGradients(newGradients)
        setTiles(()=>newTiles)
    }

    function handleGradientsStopChange (gradientindex, index, key, value) {
        const newTiles = [...tiles]
        if (selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined) {
            newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[index][key] = value
        } else if (selectedTilesArray[0]!=undefined) {
            newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[index][key] = value
            //console.log(value)
        }
        //const newGradients = [...tiles[selectedTilesArray].gradients]
        //console.log(gradients[gradientindex].stops)
        
        //newGradients[gradientindex].stops[index][key] = value;
        //setGradients(newGradients);
        //newTiles[selectedTilesArray[0]].gradients = newGradients
        setTiles(()=>newTiles)
      };

    function handleColorSwitch (gradientindex) {
        const newTiles = [...tiles]
        if (selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined) {
            let numStops = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops.length
            switch (numStops) {
                case 2:
                    newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[0].color = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[1].color
                    newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[1].color = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[0].color
                    break
            }
            
            
        } else if (selectedTilesArray[0]!=undefined) {
            
            let numStops = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops.length
            switch (numStops) {
                case 2:
                    let stop0Color = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[0].color
                    let stop1Color = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[1].color
                    newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[0].color = stop1Color
                    newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[1].color = stop0Color
                    console.log(newTiles)
                    break
            }
        }
        //const newGradients = [...tiles[selectedTilesArray].gradients]
        //console.log(gradients[gradientindex].stops)
        
        //newGradients[gradientindex].stops[index][key] = value;
        //setGradients(newGradients);
        //newTiles[selectedTilesArray[0]].gradients = newGradients
        setTiles(()=>newTiles)
    };

    function handleAddStop (gradientindex, position) {
        const newTiles = [...tiles]
        if (selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined) {
            const newGradients = [...newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients]
            const newStops = [...newGradients[gradientindex].stops, { color: 'rgba(255, 255, 255, 1)', position_from: position, position_to: null }];
            newGradients[gradientindex].stops = newStops.sort((a, b) => a.position_from - b.position_from)
            newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients = newGradients
        } else if (selectedTilesArray[0]!=undefined) {
            const newGradients = [...newTiles[selectedTilesArray[0]].gradients]
            const newStops = [...newGradients[gradientindex].stops, { color: 'rgba(255, 255, 255, 1)', position_from: position, position_to: null }];
            newGradients[gradientindex].stops = newStops.sort((a, b) => a.position_from - b.position_from)
            newTiles[selectedTilesArray[0]].gradients = newGradients
        }
        //setStops(newStops.sort((a, b) => a.position_from - b.position_from)); // Sort stops by position
        //setGradients(newGradients)
        
        setTiles(()=>newTiles)
    };
    function handleRemoveStop (gradientindex, index) {
        const newTiles = [...tiles]
        if (selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined) {
            var newStops = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops.filter((_, i) => i !== index);
            newStops = newStops.sort(function (a, b) {
                if (a.position_from < b.position_from) return -1
                if (a.position_from > b.position_from) return 1
                if (a.position_to < b.position_to) return -1
                if (a.position_to > b.position_to) return 1
    
                } ); // Sort stops by position
            newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops = newStops
        } else if (selectedTilesArray[0]!=undefined ) {
            var newStops = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops.filter((_, i) => i !== index);
            newStops = newStops.sort(function (a, b) {
                if (a.position_from < b.position_from) return -1
                if (a.position_from > b.position_from) return 1
                if (a.position_to < b.position_to) return -1
                if (a.position_to > b.position_to) return 1
    
                } ); // Sort stops by position
            newTiles[selectedTilesArray[0]].gradients[gradientindex].stops = newStops
        }
        setTiles(()=>newTiles)
      };
      function handleStopBlur (gradientindex) {
        //console.log('blur')
        const newTiles = [...tiles]
        if (selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined) {
            var newStops = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops
            newStops = newStops.sort(function (a,b) {
                if (a.position_from < b.position_from) return -1
                if (a.position_from > b.position_from) return 1
                if (a.position_to < b.position_to) return -1
                if (a.position_to > b.position_to) return 1
            })
            newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops = newStops
        } else if (selectedTilesArray[0]!=undefined) {
            var newStops = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops
            newStops = newStops.sort(function (a,b) {
                if (a.position_from < b.position_from) return -1
                if (a.position_from > b.position_from) return 1
                if (a.position_to < b.position_to) return -1
                if (a.position_to > b.position_to) return 1
            })
            //console.log(newStops)
            newTiles[selectedTilesArray[0]].gradients[gradientindex].stops = newStops
        }
        setTiles(()=>newTiles)
      };

    function handleAddGradient() {
        var newTiles = [...tiles]
        if (selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined) {
            newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients.push({ visible: true, gradientType: 'linear', radialShape: '', angle: 90, xposition: 50, yposition: 50, stops: [{color: 'rgba(255, 255, 255, 1)', position_from: 0, position_to: null }, { color: 'rgba(0, 0, 0, 1)', position_from: 100, position_to: null }]})
            setActiveGradient(newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients.length-1)
            //console.log(newTiles)
        } else if (selectedTilesArray[0]!=undefined) {
            newTiles[selectedTilesArray[0]].gradients.push({ visible: true, gradientType: 'linear', radialShape: '', angle: 90, xposition: 50, yposition: 50, stops: [{color: 'rgba(255, 255, 255, 1)', position_from: 0, position_to: null }, { color: 'rgba(0, 0, 0, 1)', position_from: 100, position_to: null }]})
            setActiveGradient(newTiles[selectedTilesArray[0]].gradients.length-1)
            
        }
        //console.log(newTiles)
        setTiles(() => newTiles)
    }
    function handleCanvasDimensions(dimensions) {
        //console.log('handleCanvasDimensions: ' + JSON.stringify(dimensions))
        let width = dimensions.width
        let height = (imageHeight / imageWidth) * width
        setZoomCanvasSize({width: width, height: height})
        //console.log('handleCanvasDimensions: ' + JSON.stringify(zoomCanvasSize))
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
              return background;
            } else {
              // The rest haven't changed
              return c;
            }
          });
        //console.log(newDataArray)

        var newTiles = [...tiles]
        if (selectedTilesArray[0] !=undefined && selectedSubTilesArray[0] !=undefined) {
            newTiles[selectedTilesArray[0]].subTiles = subTiles
            //newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]] = visibleBackgrounds()
            //console.log('[0][0]' + newTiles[selectedTilesArray[0]][0])

            //console.log('UpdateDataArray:' + newTiles[selectedTilesArray[0][selectedSubTilesArray[0]]])
        } else if (selectedTilesArray[0] !=undefined && selectedSubTilesArray[0] ===undefined) {
            
            //newTiles[selectedTilesArray[0]] = visibleBackgrounds()
        }
        setTiles(newTiles)
        //console.log(newTiles)
        //setDataArray(newDataArray)
    }
    async function getToken(password, username) {
        return axios({
          method: "post",
          url: "http://react-example.local/wp-json/jwt-auth/v1/token",
          data: { username: username, password: password }
        }).then(res => res.data.token);
      }
      
      async function doSomething(body, token) {
        return axios({
          method: "post",
          url: 'http://react-example.local/wp-json/wp/v2/css-image/'+post_id,
          headers: { 
                'Content-type': 'application/json',
                'Authorization': `Bearer  ${token}`
           },
            data:body
          
        })
      }
      const UpdateDBTable = async (req, res) => {
        setSaving(() => true)
        var arrayObj = []
        for (let i = 0; i < tiles.length; i++) { 
            if (tiles[i].subTiles.length > 0) {
                for (let x = 0; x < tiles[i].subTiles.length; x++) {
                    if (tiles[i].subTiles[x].gradients[0] !=undefined) {
                        //let obj = {index: i, color: visibleBackgrounds('Update DB',tiles[i].subTiles[x].gradients, false), sub_index: x}
                        let obj = {index: i, color: JSON.stringify(tiles[i].subTiles[x].gradients), sub_index: x}
                        arrayObj.push(obj)
                    }
                }
            } else if (tiles[i].gradients[0] !=undefined) {
                //let obj = {index: i, color: visibleBackgrounds('Update DB',tiles[i].gradients, true), sub_index: null}
                let obj = {index: i, color: JSON.stringify(tiles[i].gradients), sub_index: null}
                //console.log(obj)
                arrayObj.push(obj)
            }
        }
            // POST
        var postBody = {
            "acf": {
                "css_coordinates": arrayObj
            }
        }
        const token = await getToken("admin", "admin");
        const responseClear = await doSomething(
            {
                "acf": {
                    "css_coordinates": []
                }
            }, token);
        const response = await doSomething(postBody, token);
        //res.json({ objectVariableRetrievedFromAxiosRequests: token });
        if (response.status === 200) {
            setSaving(() => false)
        }
        //console.log(response)
    }
    const handleSubTileClick = (e) => {
        if (!e.shiftKey) {
            let parentIndex = Number(e.currentTarget.getAttribute('dataset-parent'))
            if (parentIndex!=selectedTilesArray[0]) {
                setSelectedSubTilesArray(()=>[])
                setSelectedTilesArray(()=>[parentIndex])
                setSplit(true)
            }
        }
    }
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
            if (currentIndex!=selectedTilesArray[0]) {
                setSelectedSubTilesArray(()=>[])
                setSelectedTilesArray(() => [currentIndex]);
                setSplit(false)
                //console.log(selectedTilesArray[0])
                //console.log(selectedSubTilesArray[0])
                //console.log(tiles)
            }

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
    };
    const drawSubImageSegment = () => {
        console.log(canvasRef.current)
        if (canvasRef.current && image && selectedSubTilesArray.length === 1) {
            
            const canvas = canvasRef.current;
            const canvasWidth = canvas.offsetWidth
            console.log(canvasWidth)
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            const img = new Image();
            img.src = image;
            img.onload = () => {
                let xcoord = getXCoord(selectedTilesArray[0],xSplit,xSegmentSize)
                let ycoord = getYCoord(selectedTilesArray[0],xSplit,ySegmentSize)
                let xsubcoord = getSubXCoord(selectedTilesArray[0],selectedSubTilesArray[0],xSplit,xSegmentSize,subSplitX,subsegmentSizeX)
                let ysubcoord = getSubYCoord(selectedTilesArray[0],selectedSubTilesArray[0],xSplit,ySegmentSize,subSplitX,subsegmentSizeY)

                let obj = {
                    xcoord: xcoord,
                    ycoord: ycoord,
                    subxcoord: xsubcoord,
                    subycoord: ysubcoord,
                    subsegmentSizeX: subsegmentSizeX,
                    subsegmentSizeY: subsegmentSizeY,
                    subSplitX: subSplitX,
                    subSplitY: subSplitY


                }
                //console.log(obj)
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img,
                    xcoord + xsubcoord, 
                    ycoord + ysubcoord,
                    subsegmentSizeX, subsegmentSizeY, 0, 0, canvas.width, canvas.height)
            }
        }
    }

    const drawImageSegment = (indices) => {
        //console.log(canvasRef.current)
        if (canvasRef.current && image) {
            var destX = 0
            var destY = 0
            var col=0
            var row=0
            var i = 0
            const canvas = canvasRef.current;
            let width = canvas.offsetWidth
            let height = (imageHeight / imageWidth) * width 
            setZoomCanvasSize({width: width, height: height})
            //console.log(zoomCanvasSize)
            
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            const img = new Image();
            img.src = image;
            img.onload = () => {

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                //let canvasMultiplierX = (zoomCanvasSize*aspectRatio) / xSegmentSize
                //let canvasMultiplierY = zoomCanvasSize / ySegmentSize
                var obj = {
                    //canvasMultiplierX: canvasMultiplierX,
                    //canvasMultiplierY: canvasMultiplierY,
                    xSegmentSize: xSegmentSize,
                    ySegmentSize: ySegmentSize,
                    canvasHeight: canvas.height,
                    canvasWidth: canvas.width,
                    tileX: getXCoord(indices[0],xSplit,xSegmentSize),
                    tileY: getYCoord(indices[0],xSplit,ySegmentSize),
                    xSplit: xSplit,
                    ySplit: ySplit,
                }
                //console.log(obj);
                ctx.drawImage(img, getXCoord(indices[0],xSplit,xSegmentSize), getYCoord(indices[0],xSplit,ySegmentSize), xSegmentSize, ySegmentSize, 0, 0, canvas.width, canvas.height);
                if (indices.length === 1) {
                    // if (subIndex != undefined && split) {
                    //     console.log('Split')
                    //     ctx.drawImage(img, selectedX + selectedSubX, selectedY+selectedSubY, subsegmentSizeX, subsegmentSizeY, 0, 0, canvas.width, canvas.height);
                    // } else {
                        
                    // }

                } else if (indices.length > 1) {
                    indices.forEach( (item) => {
                        // const x = (item.index % xSplit) * xSegmentSize;
                        // const y = Math.floor(item.index / xSplit) * ySegmentSize;
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
                        //     destX = col * xSegmentSize * zoom
                        //     destY = row * ySegmentSize * zoom
                        //     var obj = {index: item.index, x: x, y: y, destX: destX, destY: destY, row: item.row, col: item.col}
                        //     console.log(obj)
                        //     ctx.drawImage(img, x, y, xSegmentSize, ySegmentSize, destX, destY, xSegmentSize * zoom, ySegmentSize * zoom);

                        // } else {

                            // ctx.drawImage(img, x, y, xSegmentSize, ySegmentSize, destX, destY, xSegmentSize * zoom, ySegmentSize * zoom);
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
            var obj = {
                //event: event,
                //rect: rect,
                canvasHeight: canvas.height,
                canvasWidth: canvas.width,
                x: x,
                y: y,
                //rectLeft: rect.left,
                //clientX: event.clientX, 
                //rectTop: rect.top,
                //clientY: event.clientY,
                }
            //console.log(obj)

            const imageData = ctx.getImageData(x, y, 1, 1).data;
            const pickedColor = `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, ${imageData[3] / 255})`;
            //console.log(pickedColor)
            
            if (activeStop.gradientIndex!=null && activeStop.stopIndex!=null ) {
                handleGradientsStopChange(activeStop.gradientIndex, activeStop.stopIndex, 'color', pickedColor)
            }
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
    function getCanvasContainerHeight() {
        let element = document.getElementById('canvas-container')
        if (element!=null) {
            let rect = element.getBoundingClientRect()
            
            return Number.parseInt(rect.width * aspectRatio)
            
            //return 200
        }
    }
    function getCanvasContainerWidth() {
        let element = document.getElementById('canvas-container')
        if (element!=null) {
            let rect = element.getBoundingClientRect()
            
            return Number.parseInt(rect.width )
            
            //return 200
        }
    }

    function handleClearSplit() {
        setSelectedSubTilesArray([])
        if (selectedTilesArray[0]!=undefined) {
            var newTiles = [...tiles]
            newTiles[selectedTilesArray[0]].subTiles = []

            setTiles(newTiles)
            setSplit(false)
        }
    }
    function handleSplit(e) {
        if (e.target.checked) {
            if (selectedTilesArray[0]!=undefined) {
                var newTiles = [...tiles]
                newTiles[selectedTilesArray[0]].subTiles = subTiles
    
                setTiles(newTiles)
                setSplit(true)
            }
        } else {
            handleClearSplit()
        }

    }
    function handleActiveGradient(val) {
        setActiveGradient(val)
    }
    
    
    
    function visibleBackgrounds (from,item, all = false) {
        let visiblebackgrounds = []
        //console.log(tiles)
        if (item==undefined){
            //console.log(from)
            return 'none'
        }
            item.forEach(function (item) {
                if (item.visible || all) {
                    let l_gradient = null
                    l_gradient = item.gradientType + '-gradient('
            
                    switch (item.gradientType) {
                        case 'linear':
                            l_gradient = l_gradient + item.angle + 'deg, '
                            break
                        case 'radial':
                            l_gradient = l_gradient + item.radialShape + item.xposition + '% ' + item.yposition + '%,' 
                            break
                        case 'conic':
                            l_gradient = l_gradient + 'from ' + item.angle + 'deg at '  + item.xposition + '% ' + item.yposition + '%,'
                            break
                    }
                    for (let index = 0; index < item.stops.length; index++) {
                        //let rgbColor = convertHexToRgbA(item.stops[index].color)
                        let rgbColor = item.stops[index].color
                        l_gradient =l_gradient + ' ' + rgbColor + ' ' + item.stops[index].position_from + '%'
                        if (item.stops[index].position_to != null) {
                            l_gradient = l_gradient + ' ' + item.stops[index].position_to + '%'
                        }
                        if (index < item.stops.length-1) {
                            l_gradient = l_gradient + ','
                        } else if (index === item.stops.length-1) {
                            l_gradient = l_gradient + ')'
                        }
                    }
                    visiblebackgrounds.push(l_gradient)
                }
            })
        
        return visiblebackgrounds.toString()

    }
    const GetTilesFromDB = async (req, res) => {
        //const token = await getToken("admin", "admin");
        
        const response = await axios({
            method: "get",
            url: 'http://react-example.local/wp-json/wp/v2/css-image/'+post_id+'?_fields=acf'
            //headers: { 
            //    'Content-type': 'application/json'
                //'Authorization': `Bearer  ${token}`
            //}
        })
        //console.log(response.data.acf.css_coordinates)
        setTiles(() => initalTilesArray)
        if (response.data.acf.css_coordinates.length > 0) {

            var newTiles = [...tiles]
            response.data.acf.css_coordinates.forEach((item) => {
                console.log(item)
                if (Number.parseInt(item.sub_index) >= 0) {
                    newTiles[item.index].subTiles[item.sub_index].gradients = JSON.parse(item.color)
                } else {
                    newTiles[item.index].gradients = JSON.parse(item.color)
                }
            })
            console.log(newTiles)
            setTiles(() => newTiles)
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
        
        //console.log('postid' + post_id)
        if (post_id !=undefined) {
            GetTilesFromDB()
        }
        
        
        },[])
        useEffect(() => {
            setSplit(false)
            setSelectedTilesArray([])
            setSelectedSubTilesArray([])
            setXSegmentSize(imageWidth / xSplit)
            setYSegmentSize(imageHeight / ySplit)
                //UpdateDataArray()
            //setTiles(initalTilesArray)

        },[xSplit, ySplit, imageHeight, imageWidth])

        useEffect(() => { 

            setSubSegmentSizeX(xSegmentSize / subSplitX)
            setSubSegmentSizeY(ySegmentSize  / subSplitY)

             if (split === true && selectedTilesArray[0]!=undefined) {
                var newTiles = [...tiles]
                newTiles[selectedTilesArray[0]].subTiles = subTiles
                setTiles(() => newTiles)
             }

        },[split, subSplitX, subSplitY])

         useEffect(() => {
            if (refContainer.current) {
                //console.log(refContainer.current.getBoundingClientRect().width)
                setTileHeight(refContainer.current.offsetHeight)//*.83);
                setTileWidth(refContainer.current.offsetWidth) //.83);
            }

         },[refContainer])
         useEffect(() => {
            //setSplit(false)
            //setSelectedSubTilesArray([])
            //console.log('Selected Tiles Array - draw Image Segment')
            drawImageSegment(selectedTilesArray)
            //UpdateDataArray()
            //setGradients(GradientFromBackgrounds)

         },[selectedTilesArray])
         useEffect(() => {
            
            if (selectedSubTilesArray.length === 1 && split === true && selectedTilesArray.length === 1) {
                drawSubImageSegment()

                setSplit(false)
            } else if (selectedSubTilesArray.length === 0 && split === false && selectedTilesArray.length === 1) {
                drawImageSegment(selectedTilesArray)
                
            }

         },[selectedSubTilesArray])
        //  useEffect(() => {
        //     if (canvasElement!=null) {
        //         let rect = canvasElement.getBoundingClientRect()
        //         let width = rect.width
        //         let height = (imageHeight / imageWidth)* width
        //         setZoomCanvasSize({
        //             width: width,
        //             height: height,
        //         })
        //         console.log(zoomCanvasSize)
        //     }

        //     // if (canvasRef.current) {
        //     //     let width = canvasRef.current.offsetWidth
        //     //     let height = (imageHeight / imageWidth)* width
        //     //     setZoomCanvasSize({
        //     //         width: width,
        //     //         height: height,
        //     //     })
        //     //     console.log(zoomCanvasSize)
        //     // }

        //  },[canvasElement])

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
              <label htmlFor="xSegmentSize">X Segment Size</label>
              <input
                type="number"
                id="xSegmentSize"
                value={xSegmentSize}
              />
            </div>
            <div className="input">
              <label htmlFor="ySegmentSize">Y Segment Size</label>
              <input
                type="number"
                id="ySegmentSize"
                value={ySegmentSize}
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
                <div>
                    <button
                    className="outline outline-blue-800 py-3 px-2"
                    onClick={UpdateDBTable}>Update DB Table</button>
                    {saving ?
                        <div>Saving...</div>
                    : null}

                </div>
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
            <div
                        onClick={()=> setExpandBuilder(!expandBuilder)}
            >
                {!expandBuilder ? '>' : 'X'}
            </div>
            <div 
            className="grid grid-cols-5 grid-rows-5 gap-4 border">
                <div 
                    className={expandBuilder ? 'flex gap-4 col-span-5 row-span-3 border' : 'col-span-2 row-span-3 border'}
                    >
                    <div 
                        id='canvas-container'
                        className="relative"
                        //className={`h-[${zoomCanvasSize.height}]px w-full relative`}
                        style={{
                            //height: `${zoomCanvasSize.height===0?100:Number.parseInt(zoomCanvasSize.height)}px`,
                            //width: `${zoomCanvasSize.width===0?100:Number.parseInt(zoomCanvasSize.width)}px`,
                            height: `${getCanvasContainerHeight()}px`,
                            maxHeight: `${getCanvasContainerHeight()}px`,
                            width: `100%`,
                            maxWidth: '500px'
                        }}
                        >
                            {/* <div className=""> */}
                                <Canvas 
                                    //className={`h-[${zoomCanvasSize.height}]px w-full`}
                                    canvasRef={canvasRef}
                                    handleCanvasDimensions={handleCanvasDimensions}
                                    aspectRatio={aspectRatio}
                                    height={getCanvasContainerHeight()}
                                    width={getCanvasContainerWidth()}
                                    //imageWidth={imageWidth}
                                    //draw={draw} 
                                    //height={zoomCanvasSize} 
                                    //width={zoomCanvasSize*aspectRatio} 
                                    //clicked={clicked} 
                                    //stateChanger={zoomImg} 
                                    handleCanvasClick={handleCanvasClick} />
                                            {selectedTilesArray.length > 0 ? 
                                                tiles[selectedTilesArray[0]].subTiles.map((t, i) => (
                                                    selectedTilesArray[0] !=undefined && split === true ?
                                                        <div
                                                            key={i}
                                                            className="absolute inline-block "
                                                            style={{
                                                            width: `${100 / subSplitX}%`,
                                                            height: `${100 / subSplitY}%`,
                                                            top: `${getTileX(i, subSplitX, subSplitY)}%`,
                                                            left: `${getTileY(i, subSplitX)}%`
                                                            }}
                                                        >
                                                        </div> : null
                                                    
                                                )): null
                                            }
                                            {selectedTilesArray.length > 0 ? 
                                                tiles[selectedTilesArray[0]].subTiles.map((t, i) => (
                                                    selectedTilesArray[0] !=undefined && split === true ?
                                                        <div
                                                        key={i}
                                                        className=" absolute left-0 top-0"
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
                                                            dataset-xval={getSubXCoord(selectedTilesArray[0],i, xSplit,xSegmentSize,subSplitX,subsegmentSizeX)}
                                                            dataset-yval={getSubYCoord(selectedTilesArray[0],i, ySplit,ySegmentSize,subSplitX,subsegmentSizeY)}
                                                            onClick={(e) => handleZoomClick(e)}
                                                        ></div>
                                                    </div> : null
                                                    
                                                )): null
                                            }
                            {/* </div> */}
                        </div>
                        <div
                            style={{
                                background: 
                                    selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined 
                                    ?
                                    tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]]!=undefined ?
                                         `${visibleBackgrounds('builderdisplay1',tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients)}`
                                     :null :
                                      selectedTilesArray[0]!=undefined ?
                                      `${visibleBackgrounds('builderdisplay2',tiles[selectedTilesArray[0]].gradients)}` 
                                    : null,
                                //height: `${Number.parseInt(zoomCanvasSize.height)}px`,
                                //width: `${Number.parseInt(zoomCanvasSize.width)}px`,
                                    height: `${getCanvasContainerHeight()}px`,
                                    maxHeight: `${getCanvasContainerHeight()}px`,
                                    width: `100%`,
                                    maxWidth: '500px'
                            }}
                        >
                        {selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined  ?
                            visibleBackgrounds('builderdisplay1',tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients)
                        : selectedTilesArray[0]!=undefined ?
                            visibleBackgrounds('builderdisplay2',tiles[selectedTilesArray[0]].gradients): null}
                        </div>
                        <GradientBuilder
                            gradients={selectedTilesArray[0]!=undefined && selectedSubTilesArray[0]!=undefined ? tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients : selectedTilesArray[0]!=undefined ? tiles[selectedTilesArray[0]].gradients : []}
                            handleGradientsChange={handleGradientsChange}
                            handleAddGradient={handleAddGradient}
                            handleGradientsStopChange={handleGradientsStopChange}
                            handleAddStop={handleAddStop}
                            handleRemoveStop={handleRemoveStop}
                            handleStopBlur={handleStopBlur}
                            activeStop={activeStop}
                            handleActiveStop={handleActiveStop}
                            activeGradient={activeGradient}
                            handleActiveGradient={handleActiveGradient}
                            height={zoomCanvasSize.height}
                            width={zoomCanvasSize.width}
                            handleColorSwitch={handleColorSwitch}
                        ></GradientBuilder>
                </div>
                <div className="col-span-3 row-span-3 col-start-3 border">
                <div className="imageWrapperx w-full ">
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
                                            xSplit={xSplit}
                                            ySplit={ySplit}
                                            xSegmentSize={xSegmentSize}
                                            ySegmentSize={ySegmentSize}
                                            selectedX={handleSelectedX}
                                            selectedY={handleSelectedY}
                                            clicked={handleClicked}
                                            clickedValue={clicked}
                                            clickedObject={handleClickedObject}
                                            clickedObjectValue={'canvas'}
                                            subSplitX={subSplitX}
                                            subSplitY={subSplitY}
                                            subsegmentSizeX={subsegmentSizeX}
                                            subsegmentSizeY={subsegmentSizeY}
                                            //canvasRef={canvasRef}
                                            //zoomCanvasSize={zoomCanvasSize}
                                            handleTileClick={handleTileClick}
                                            refContainer={refContainer}
                                            selectedTilesArray={selectedTilesArray}
                                            selectedSubTilesArray={selectedSubTilesArray}
                                            handleSubTileClick={handleSubTileClick}
                                            
                                            ></Tiles>
                                    </TransformComponent> 
                                    </>
                                )}
                            </TransformWrapper>
                        </div>
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
                                            className="inline-block placeholder"
                                            dataset-xsplit={xSplit}
                                            style={{
                                                width: `${tileWidth*xSplit}px`,
                                                height: `${tileHeight*ySplit}px`
                                            }}
                                        ></div>
                                        {Object.entries(tiles).map((v, i) => (
                                            
                                            tiles[i].subTiles.length===0 ?
                                            <div
                                                key={i}
                                                id={`id3-${i}`}
                                                dataset-index={i}
                                                dataset-background={v}
                                                className={`absolute inline-block -top-[1px] -right-[1px] border-[#1f1d1d] bottom-0 left-0 border-l border-b ${Math.floor(i / xSplit) === 0 ? 'border-t':'border-t-0'} `}
                                                //className={Math.floor(i / xSplit) === 0 ? 'border-t':'border-t-0'}
                                                style={{
                                                    width: `${100 / xSplit}%`,
                                                    height: `${100 / ySplit}%`,
                                                    top: `${getTileX(i, xSplit, ySplit)}%`,
                                                    left: `${getTileY(i, xSplit)}%`,
                                                    //background: selectedTilesArray.includes(i) ? 'rgba(0, 0, 0, 0.4)' : 'none',
                                                    background: `${visibleBackgrounds('griddisplay1',tiles[i].gradients)}`,
                                                    borderStyle: typeof(v)==='string' ? `none` : 'solid',
                                                    border: typeof(v)==='string' ? `0px 0px 0px 0px` : '0px 0px 1px 1px',
                                                    
                                                }}
                                                >
                                            </div>
                                            :
                                            tiles[i].subTiles.map((c,x) => (
                                                <div
                                                id={`id3-${i}-${x}`}
                                                key={x}
                                                className={`absolute inline-block top-0 right-0 bottom-0 left-0 border-[#f3f3f39c] border-l border-b`}
                                                style={{
                                                    width: `${100 / xSplit / subSplitX}%`,
                                                    height: `${100 / ySplit / subSplitY}%`,
                                                    top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
                                                    left: `${getSubTileY(i, x,xSplit, subSplitX)}%`,
                                                    background: 
                                                    tiles[i].subTiles[x].gradients.length>0 ?
                                                        `${visibleBackgrounds('griddisplay2',tiles[i].subTiles[x].gradients)}`
                                                        : 'none'
                                                }}>
                                            </div>
                                            ))
                                        ))
                                    }
                                    </TransformComponent> 
                                    </>
                                )}
                                </TransformWrapper>
                    </div>
                </div>
                <div className="col-span-3 row-span-2 col-start-3 row-start-4 border">

                </div>
            </div>


        </div>
      );

}
