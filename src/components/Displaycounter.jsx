import React from 'react'
import { useSelector } from 'react-redux'

const Displaycounter = () => {
    const {counterVal} = useSelector((store) => store.counter);
  return (
    <div>
         

         <p className="lead mb-4">Counter current value:{counterVal}</p>
    </div>
  )
}

export default Displaycounter