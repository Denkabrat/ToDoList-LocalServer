import React,{memo}  from 'react'
import './Toggle.scss';

const Toggle = memo(({ value, onChange }) => {

    return(
    <div className='toggleDiv'>
        <label className="switch">
            <input 
            type="checkbox" 
            id="toggler"
            onChange={onChange}
            checked={value}/>
            <span className="slider round"></span>
        </label>
    </div>
    )
})


export default Toggle