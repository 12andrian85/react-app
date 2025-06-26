import React from 'react'
import './LockSlider.css'
export default function LockSlider({  handleRelease, handleInput, sliderValue, width, }) {
    let sliderStyle = {
        appearance: 'none',
        width: width || '300px',
        height: '50px',
        background: `rgba(188, 190,188, 0.50)`,
        outline: 'none',
        borderRadius: '50px',

    }
    return (
        <div>
            <input
                className='slider'
                type="range"
                style={sliderStyle}
                value={sliderValue}
                onInput={handleInput}
                onMouseUp={handleRelease}
                onTouchEnd={handleRelease}
            />
        </div>
    )
}
