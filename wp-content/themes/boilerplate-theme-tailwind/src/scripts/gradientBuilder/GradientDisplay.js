import React from 'react';

const GradientDisplay = ({gradientIndex, visible, handleGradientsChange, background, height, width}) => {

    return (
        <>
        <div className={`inline-block relative h-[${height}px] w-[${width}px]`}
            style={{
                background: background != undefined ? `${background}` : 'none',
                height: `${Number.parseInt(height/2)}px`,
                width: `${Number.parseInt(width/2)}px`,
            }}
        >
            <div 
            className={`absolute left-[${Number.parseInt(width/5)}px] w-[30px] h-[30px] border border-black bg-white`}
            style={{
                left: `${Number.parseInt(width/5)}px`,
                top: `${Number.parseInt(height/3)}px`,
                    }}
            onClick={() => handleGradientsChange(gradientIndex, 'visible', !visible)}
            >
                {visible ? 'H':'S'}
            </div>
        </div>
        <div>{background}</div>
        </>
    )
}

export default GradientDisplay;
