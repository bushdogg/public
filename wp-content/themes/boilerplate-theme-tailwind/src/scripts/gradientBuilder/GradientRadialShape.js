import React, {useState, useEffect} from 'react';

const GradientRadialShape = ({gradientsIndex, radialShape, handleGradientsChange}) => {
    const [shape, setShape] = useState('ellipse')
    const [position, setPosition] = useState('farthest-corner')
    //const [radialShapeCSS, setRadialShapeCSS] = useState()
    const [width, setWidth] = useState(0)
    const [widthUOM, setWidthUOM] = useState('%')
    const [height, setHeight] = useState(0)
    const [heightUOM, setHeightUOM] = useState('%')

    function initialShape () {
        let newShape = ''
        if (radialShape === '') {
            newShape = 'ellipse'
        } if (radialShape.search("circle") > -1) {
            newShape = 'circle'
        }

    }

    useEffect(()=>{
        let radialShapeCSS = ''
        if (shape==='ellipse') {
            radialShapeCSS = position + ' at '
        } else if (shape === 'circle') {
            radialShapeCSS = 'circle ' + position  + ' at '
        } else if (shape ==='custom') {
            radialShapeCSS = width + widthUOM + ' ' + height + heightUOM + ' at '
        }
        //console.log(radialShapeCSS)
        handleGradientsChange(gradientsIndex, 'radialShape', radialShapeCSS)


    },[shape, position, width, widthUOM, height, heightUOM])

    return (
        <>
        <label>
        Shape:
            <select 
                value={shape}
                onChange={e => setShape(e.target.value)}
            >
                <option value="ellipse">Ellipse</option>
                <option value="circle">Circle</option>
                <option value="custom">Custom</option>
            </select>
        </label>
        {shape === 'ellipse' || shape ==='circle' ?
            <label>
            Extend from its center to the:
                <select 
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                >
                    <option value="farthest-corner">farthest corner (default)</option>
                    <option value="farthest-side">farthest side</option>
                    <option value="closest-corner">closest corner</option>
                    <option value="closest-side">closest side</option>
                </select>
            </label>
        :
        shape === 'custom' ?
            <label>
                Custom Size:
                <label>
                    Width:
                    <input type="number"
                        value={width}
                        onChange={e => setWidth(e.target.value)}
                    ></input>
                    <select 
                        value={widthUOM}
                        onChange={e => setWidthUOM(e.target.value)}
                    >
                        <option value="%">%</option>
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                    </select>
                </label>
                <label>
                    Height:
                    <input type="number"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                    ></input>
                    <select 
                        value={heightUOM}
                        onChange={e => setHeightUOM(e.target.value)}
                    >
                        <option value="%">%</option>
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                    </select>
                </label>
            </label>
        :
            null

        }

        
        </>
    )
}

export default GradientRadialShape