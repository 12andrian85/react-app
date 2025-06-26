import { useEffect, useState } from 'react'
import LockSlider from './LockSlider'
import Lockimg from '/moon.jpg'
import Unlockimg from '/home.jpg'
import { AiFillLock } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";

export default function SlideTounlock() {
  const [sliderValue, setSliderValue] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleInput = (e) => {
    const value = (Number(e.target.value));
    setSliderValue(value)

    value === 100 ? setIsOpen(true) : setIsOpen(false)
  };

  const handleRelease = () => {
    if (sliderValue !== 100) {
      setSliderValue(0)
    }
  }

  const backgroundImage = isOpen ?
    `url(${Unlockimg}) center / cover no-repeat` :
    `url(${Lockimg}) center / cover no-repeat`


  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(224 221 221)'
  }, [])

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '80vh',
        width: '340px',
        border: '4px solid #000',
        borderRadius: '25px',
        background: backgroundImage,
        color: 'white',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {isOpen ? <AiFillUnlock style={{ fontSize: '8rem' }} /> :
        <AiFillLock style={{ fontSize: '8rem' }} />}

      {
        isOpen ? <h1>Unlock</h1> :
          <h1>Lock</h1>
      }

      <LockSlider
        width={'250px'}
        handleInput={handleInput}
        handleRelease={handleRelease}
        sliderValue={sliderValue}
      />
    </div>
  )
}
