import React, {useState, useEffect} from 'react';
import GradientDisplay from './GradientDisplay.js'
import GradientTools from './GradientTools.js'

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

const GradientBuilder = ({gradients, activeGradient, handleActiveGradient, handleAddGradient, handleGradientsChange, height, width, activeStop, handleActiveStop, handleGradientsStopChange, handleAddStop, handleRemoveStop, handleStopBlur, handleColorSwitch}) => {
    //const [gradients, setGradients] = useState([]);
    //console.log(gradients)
        function BackgroundFromGradients (item) {
            //console.log(item)
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
            
            //console.log(l_gradient)
            return l_gradient
        }
    
    return (
        <>
            <div className='grid'>
                   <div onClick={() => handleActiveGradient(-1)}>
                        <button
                        className="outline rounded-lg bg-blue-700 text-white text-center px-4 py-2"
                        onClick={handleAddGradient}
                        >Add</button>
                    </div>
                    {
                        gradients.map((x,i) => (
                            
                            <div className={activeGradient===i ? `border-2 border-red-700` : null}
                                onClick={() => handleActiveGradient(i)}
                            >
                                <GradientDisplay
                                activeGradient={activeGradient}
                                gradientIndex={i}
                                visible={x.visible}
                                background={BackgroundFromGradients(gradients[i])}
                                height={height}
                                width={width}
                                handleGradientsChange={handleGradientsChange}
                                ></GradientDisplay>

                                {x.visible && activeGradient===i ? 
                                <GradientTools
                                gradientIndex={i}
                                handleGradientsChange={handleGradientsChange}
                                gradient={x}
                                handleGradientsStopChange={handleGradientsStopChange}
                                handleAddStop={handleAddStop}
                                handleAddGradient={handleAddGradient}
                                activeStop={activeStop}
                                handleActiveStop={handleActiveStop}
                                handleRemoveStop={handleRemoveStop}
                                handleStopBlur={handleStopBlur}
                                handleColorSwitch={handleColorSwitch}
                                ></GradientTools>
                                : null
                                }
                            
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default GradientBuilder;
