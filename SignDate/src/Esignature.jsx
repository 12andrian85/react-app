import React, { useState } from 'react'
import Title from './components/Title'
function Esignature() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('your signature')
  
  return (
    <div className='container text-center'>
      <Title classes={'title'} text={name} />
      <Title classes={'main-title mb-4'} text={!date ? 'DoB' : date} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nam doloribus, rem et, possimus deserunt odit quasi
        porro natus libero ut at tenetur dolor earum enim.
        Provident libero nesciunt modi maxime.
      </p>
      <footer className='position-relative bottom-0'>
        <input 
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input type="text" value={name}
        placeholder='your signature'
          onChange={(e) => setName(e.target.value)}
        />
      </footer>
    </div>
  )
}

export default Esignature