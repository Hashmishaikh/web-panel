import React from 'react';
import './TodoCard.css';

const TodoCard = (props) => {
    const { todo } = props;
    const {id,title,completed } = todo;
    return (
        <>
        <div className="api">
            <h6 className="apicenter">{id}</h6>
            <h6 className="apicenter">{title} </h6>
            <h6 className="apicenter letter">{` ${completed}`}</h6>
            <button className=" del">Delete</button><hr/>
        </div>
    </>
        
    )
}

export default TodoCard;
