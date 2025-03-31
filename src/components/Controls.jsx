import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { counterActions, privacyActions } from '../store';

const Controls = () => {
    const dispatch = useDispatch();
    const inputElement= useRef();

    const handleIncrement = () => {
       dispatch(counterActions.increment());
    };
    const handleadd = () => {
        
        dispatch(counterActions.add(inputElement.current.value));
        inputElement.current.value=""
     };
     const handlesub = () => {
        dispatch(counterActions.subtract(inputElement.current.value));
        inputElement.current.value=""
     };
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
     };

     const handleprivacy = () => {
        dispatch(privacyActions.toggle());
     };
  return (
    <div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleIncrement} >+1</button>
        <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
        <button type="button" className="btn btn-warning" onClick={handleprivacy}>Privacy Toggle</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type='number' placeholder='Enter a number' className="number-input" ref={inputElement}/>
        <button type="button" className="btn btn-info" onClick={handleadd} >ADD</button>
        <button type="button" className="btn btn-danger" onClick={handlesub}>SUBTRACT</button>
      </div>
    </div>
  )
}

export default Controls