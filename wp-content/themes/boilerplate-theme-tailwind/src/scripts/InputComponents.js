import { useState, useEffect } from 'react';

export default function InputComponents({imageHeight, imageWidth}) {

  return (
    <div>
        <div className="form">
            <div className="input">
                <label htmlFor="imageHeight">
                    Image Height (integer)
                </label>
                <input
                    className="outline"
                    disabled
                    type="number"
                    min="0"
                    max="200000"
                    id="imageHeight"
                    value={imageHeight}
                />
            </div>
            <div className="input">
                <label htmlFor="imageWidth">
                    Image Width (integer)
                </label>
                <input
                    className="outline"
                    disabled
                    type="number"
                    min="0"
                    max="200000"
                    id="imageWidth"
                    value={imageWidth}
                />
            </div>

        </div>
    </div>
  );
}
