import React from 'react';
import GradientStops from './GradientStops.js'
import GradientAngle from './GradientAngle.js'
import GradientPosition from './GradientPosition.js'
import GradientRadialShape from './GradientRadialShape.js'

const GradientTools = ({gradientIndex, gradient, handleGradientsChange, handleGradientsStopChange, handleAngleChange, handleAddStop, activeStop, handleActiveStop, handleRemoveStop, handleStopBlur}) => {
    
    return (
        <>
            <div>
                <div>
                    <p>GRADIENT TYPE </p>
                </div>
                <span class="isolate inline-flex rounded-md shadow-sm">
                    <button 
                        type="button" 
                        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                        style={{
                            background: gradient.gradientType === 'linear' ? 'rgb(74,69,178)' : 'none',
                        }}
                        onClick={() => handleGradientsChange(gradientIndex, 'gradientType','linear')}
                        >LINEAR</button>
                    <button
                    type="button"
                    className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    style={{
                        background: gradient.gradientType === 'radial' ? 'rgb(74,69,178)' : 'none',
                    }}
                    onClick={() => handleGradientsChange(gradientIndex, 'gradientType','radial')}
                
                    >RADIAL</button>
                    <button 
                    type="button" 
                    className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    style={{
                        background: gradient.gradientType === 'conic' ? 'rgb(74,69,178)' : 'none',
                    }}
                    onClick={() => handleGradientsChange(gradientIndex, 'gradientType','conic')}
                    >CONIC</button>
                </span>
                <GradientAngle
                    gradientIndex={gradientIndex}
                    gradientType={gradient.gradientType}
                    angle={gradient.angle}
                    handleGradientsChange={handleGradientsChange}
                >
                </GradientAngle>
                <GradientStops
                    gradientIndex={gradientIndex}
                    stops={gradient.stops}
                    handleGradientsStopChange={handleGradientsStopChange}
                    handleAddStop={handleAddStop}
                    handleRemoveStop={handleRemoveStop}
                    activeStop={activeStop}
                    handleActiveStop={handleActiveStop}
                    handleStopBlur={handleStopBlur}
                ></GradientStops>
                {gradient.gradientType==='radial' ? 
                    <GradientRadialShape 
                        gradientsIndex={gradientIndex}
                        radialShape={gradient.radialShape}
                        handleGradientsChange={handleGradientsChange}
                    >
                    </GradientRadialShape> : null}
                <GradientPosition
                    gradientIndex={gradientIndex}
                    gradientType={gradient.gradientType}
                    xposition={gradient.xposition}
                    handleGradientsChange={handleGradientsChange}
                    yposition={gradient.yposition}
                ></GradientPosition>
            </div>
        </>
    )
}

export default GradientTools;
