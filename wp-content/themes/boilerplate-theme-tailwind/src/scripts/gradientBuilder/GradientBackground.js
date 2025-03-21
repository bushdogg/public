import React, {useState, useEffect} from 'react';
import Toggle from 'react-toggle'

const GradientBackground = ({gradientIndex}) => {
    const [width, setWidth] = useState(0)
    const [widthUOM, setWidthUOM] = useState('auto')
    const [height, setHeight] = useState(0)
    const [heightUOM, setHeightUOM] = useState('auto')
    const [repeatX, setRepeatX] = useState(false)
    const [repeatY, setRepeatY] = useState(false)

    return (
        <>
            <label>
                Background Size:
                <div className='flex gap-3'>
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
                            <option value="auto">auto</option>
                            <option value="%">%</option>
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                        </select>
                    </label>
                    <label>
                        <Toggle
                            defaultChecked={false}
                            checked={repeatX}
                            onChange={()=>setRepeatX(!repeatX)} />
                        <span>Repeat</span>
                    </label>

                </div>

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
        </>
    )
}

export default GradientBackground;