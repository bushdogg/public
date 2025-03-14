import React from 'react';

const GradientPosition = ({gradientIndex, gradientType, xposition, yposition, handleGradientsChange }) => {

    return (
        <>
        {gradientType ==='radial' || gradientType ==='conic' ?
        <div>
            Position
            <label>
                X
                <input 
                className="border p-2"
                type="number" 
                min={-20}
                max={200}
                value={xposition}
                onChange={(e) => handleGradientsChange(gradientIndex,'xposition', e.target.value)}
                ></input>
            </label>
            <label>
                Y
                <input 
                className="border p-2"
                type="number" 
                min={-20}
                max={200}
                value={yposition}
                onChange={(e) => handleGradientsChange(gradientIndex, 'yposition', e.target.value)}
                ></input>
            </label>
        </div>
        : null}
        </>
    )
}

export default GradientPosition