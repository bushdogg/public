import React, { useState } from "react"
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'

function ExampleReactComponent() {
  const [color, setColor] = useState('linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)');
  const { setSolid, setGradient } = useColorPicker(color, setColor);

  return (
    <>
        <div
            className="border border-black"
            style={{
                background: color,
                height: 200,
                width: 200
            }}
        ></div>
        <ColorPicker value={color} onChange={setColor} height={100} width={200} hideColorTypeBtns={true}/>

    </>
    
  )
}

export default ExampleReactComponent
