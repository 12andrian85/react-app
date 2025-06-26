import React, { useState } from 'react'
import Title from './Title'
import SliderComp from './SliderComp'
function SliderApp() {
    const [slideValue, setSlideValue] = useState(0)

    const handleValueInput = (e) => {
        setSlideValue(e.target.value)
    }

    let bgColor;
    let textColor;
    // const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // bgColor = randomColor
    
    // ---dinamic version---
    bgColor  = `rgb(${[...Array(3)].map(()=> Math.floor(Math.random()*256)).join(',')})`
    
    // ---bad version---
    // if (slideValue < 25) {
    //     bgColor = 'blue'
    //     textColor = 'red'
    // } else if (slideValue > 25 && slideValue <= 50) {
    //     bgColor = 'lightgray'
    // } else if (slideValue > 51 && slideValue <= 75) {
    //     bgColor = 'orange'
    //     textColor= 'blue'
    // } else if(slideValue > 75 ){
    //     bgColor = 'green'
    //     textColor= 'white'
    // } 
    //  if(slideValue == 100 ){
    //     bgColor = 'red'
    // }

    return (
        <>
            <Title text={'Slide to grow'} />
            <SliderComp
                setValue={slideValue}
                handleInput={handleValueInput}
                bgColor={bgColor}
                textColor={textColor}
            />
        </>
    )
}

export default SliderApp