import React from 'react';

const GradientAngle = ({gradientIndex, gradientType, angle, handleGradientsChange}) => {

    return (
        <>
        {gradientType ==='linear' || gradientType ==='conic' ?
        <div>
            <label>
                Angle:
                <input 
                className="border mt-2 p-2"
                type="number" 
                min={0}
                max={360}
                value={angle}
                onChange={(e) => handleGradientsChange(gradientIndex, 'angle',e.target.value)}
                ></input>
            </label>
        </div>
        : null}
        </>
    )
}

export default GradientAngle