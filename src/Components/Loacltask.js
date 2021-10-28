import React from 'react';
import './Localtask.css';

const Loacltask = (props) => {
    
    return (
        <>
        <div className="apis container">
            <h6 className="apicenter">{props.id}</h6>
            <h6 className="apicenter">{props.text}</h6>
            <h6 className="apicenter">{props.comp}</h6>
            <button className=" del" onClick={() => {
                props.onSelect(props.id)
            }}>Delete</button>
            
        </div>
    </>
        
    )
}

export default Loacltask
