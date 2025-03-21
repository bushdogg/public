import React, {useState} from 'react';
//import { SketchPicker } from 'react-color'
import Sketch from '@uiw/react-color-sketch';

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

const GradientStops = ({gradientIndex, stops, handleGradientsStopChange, handleAddStop, activeStop, handleActiveStop, handleStopBlur, handleRemoveStop, handleColorSwitch}) => {
    
    const initialDisplayColorPicker = () => {
        let array = []
        if (stops!=undefined){
            for (let index = 0; index < stops.length; index++) {
                array.push([false])
            }
        }
        return array
    }
    const [displayColorPicker, setDisplayColorPicker] = useState(initialDisplayColorPicker);
    const [newStopPosition, setNewStopPosition] = useState(50); // Default position for new stops
    const [color, setColor] = useState( )
      const handleClick = (index) => {
        let newArray = [...displayColorPicker]
        newArray[index] = !newArray[index]
        setDisplayColorPicker(newArray)
      };
    
      const handleClose = (index) => {
        let newArray = [...displayColorPicker]
        newArray[index] = false
        setDisplayColorPicker(newArray)
      };
    
      const handleNewStopPositionChange = (event) => {
        setNewStopPosition(event.target.value);
      };
    
      const styles = {
        'default': {
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      };
  
    return (
        <>
            <div>
                {stops!=undefined ? stops.map((stop, index) => (
                    <div className="flex p-2" key={index} onClick={() => handleActiveStop(gradientIndex,index)} style={{ border: activeStop.stopIndex === index ? '2px solid blue' : 'none' }}>
                        <div className=' pr-2'>
                            <div className=' border-4 border-slate-300' style={ styles.swatch } onClick={() => handleClick(index) }>
                            <div 
                                dataset-color={stop.color}
                                style={{
                                width: '36px',
                                height: '14px',
                                //borderRadius: '2px',
                                background: stop.color
                                //background: `rgba(${ stop.color.r }, ${ stop.color.g }, ${ stop.color.b }, ${ stop.color.a })`
                             }} />
                            </div>
                            { !displayColorPicker[index] ? <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={() => handleClose(index) }/>
                            <Sketch id={`sp-${index}`} color={ rgbaToHex(stop.color) } onChange={ (color) => handleGradientsStopChange(gradientIndex, index, 'color', `rgba(${ color.rgba.r }, ${ color.rgba.g }, ${ color.rgba.b }, ${ color.rgba.a })`) } />
                            </div> : null }
                        </div>
                        <input
                            className="border"
                            type="number"
                            min="0"
                            max="100"
                            value={stop.position_from}
                            onChange={(e) => handleGradientsStopChange(gradientIndex, index, 'position_from', e.target.value)}
                            onBlur={()=> handleStopBlur(gradientIndex)}
                        />
                        <input
                            className="border pr-2 pl-2"
                            type="number"
                            min="0"
                            max="100"
                            value={stop.position_to}
                            onChange={(e) => handleGradientsStopChange(gradientIndex, index, 'position_to', e.target.value)}
                            onBlur={()=> handleStopBlur(gradientIndex)}
                        />

                        <button 
                        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                        onClick={() => handleRemoveStop(gradientIndex, index)}>
                            X
                        </button>
                    </div>
                )): null}
                <div>
                    <label>
                        New Stop Position:
                        <input
                        className='border'
                        type="number"
                        min="0"
                        max="100"
                        value={newStopPosition}
                        onChange={handleNewStopPositionChange}
                        />
                    </label>
                    <button 
                        className="whitespace-nowrap rounded-radius bg-blue-700 border border-blue-700 px-3 py-1 text-white text-sm font-medium tracking-wide "
                        onClick={() => handleAddStop(gradientIndex, newStopPosition)}>Add Color Stop</button>
                    <button 
                        className="whitespace-nowrap rounded-radius bg-blue-700 border border-blue-700 px-3 py-1 text-white text-sm font-medium tracking-wide"
                        onClick={() => handleColorSwitch(gradientIndex)}
                        >Switch Colors</button>
                </div>
            </div>
        </>
    )
}

export default GradientStops