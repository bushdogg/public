import { useState, useEffect } from 'react';
import Canvas from './CanvasComponent'

export default function SplitImageComponent({X, Y, imageColumns, segmentSize, imgURL, customPresets, setCustomPresets}) {


  return (
    <div>
        <div
            id="place-holder"
            className="grid gap-x-[1px] gap-y-[1px] w-[500px]"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${imageColumns}, 1fr)`,
                
            }}
            
        >
            {Y.map((y, t) => (
                X.map((x, u) => (
                    <Canvas
                        id={`id-${x}-${y}`}
                        height={segmentSize}
                        width={segmentSize}
                        img={imgURL}
                        size={segmentSize}
                        x={x}
                        y={y}
                        customPresets={customPresets}
                        setCustomPresets={setCustomPresets}
                        
                    ></Canvas>
                ))
            ))
            }
            
            
        </div>
    </div>
  );
}
