import React, { useState } from 'react'
import Button from './Button'

const CardElement = () => {
    const [temperature, setTemperature] = useState(0)

    const HandleClickPlus = () => {
        setTemperature(temperature + 1)

    }
    const HandleClickMinus = () => {
        setTemperature(temperature - 1)
    }
    return (
        <div className="continer">
            <div className="card">
                <div className={`wrapper ${temperature > 0 ? 'bg-danger' : 'bg-info'}`}>
                    <span>{temperature}° C</span>
                </div>
                <div className='d-flex mx-auto'>
                    <Button
                        onClick={HandleClickMinus}
                        text='-' />
                    <Button
                        text='+'
                        onClick={HandleClickPlus}
                    />

                </div>
            </div>
        </div>
    )
}

export default CardElement