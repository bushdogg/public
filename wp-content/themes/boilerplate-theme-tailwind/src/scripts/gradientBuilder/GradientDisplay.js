import React from 'react';

const GradientDisplay = ({gradientIndex, activeGradient, visible, handleGradientsChange, background, height, width}) => {

    return (
        <>
        <div className={`inline-block relative border border-black`}
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
                {visible ? <img src={require('../../images/visible.png')}></img>:<img src={require('../../images/hide.png')}></img>}
            </div>
        </div>
        {activeGradient === gradientIndex ? <div>{background}</div> : null}
        </>
    )
}

export default GradientDisplay;
