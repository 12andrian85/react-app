import React from 'react'

function SliderComp({ setValue, handleInput, textColor, bgColor }) {
  const inputStyle = {
    appearance: 'none',
    height: 25,
    width: '100%',
    background: 'lightgray',
    cursor: 'pointer',

  }


  return (
    <>
      <div className='w-100'>
        <input type="range"
          style={inputStyle}
          min='0'
          max={100}
          value={setValue}
          onInput={handleInput}
        />
      </div>
      <span
        style={{
          color: textColor,
          background: bgColor,
          height: `${setValue * 3}px`,
          width: `${setValue * 3}px`,
          // fontSize: `${setValue * 1}px`,``
          fontSize: `${setValue < 10 ? setValue == 5 : setValue * 2}px`,
          fontWeight: 600,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >{setValue}</span>
    </>
  )
}

export default SliderComp