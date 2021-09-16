import { any } from 'async';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Tasks.css';
import TodoCard from './TodoCard';
import Loacltask from './Loacltask';

const Tasks = () => {
    const [inputList, setInputList] = useState("");
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const [todos, setTodos] = useState();
    const [items, setItems] = useState([]);
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    };

    const deleteItems = (id) => {
        console.log('deleted');
        setItems((oldItems) =>  {
            return oldItems.filter(((arrElem, index) => {
                return index !== id;
            }));
        })
    };

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos)
        })
    }, []);
    console.log(todos);
    return (
        <>
            {
                todos ? (
                    <div>
                        {todos.slice(0, 3).map((todo) => (
                            <TodoCard key={todo.id} todo={todo} />
                        ))}
                    </div>
                ) : (
                    <p className="load">Loading...</p>
                )}
                    <hr />
                    <h5 className="local">Local Task</h5>
            {items.map((itemval, index) => {
             return <Loacltask id={index} key={index} text={itemval} onSelect={deleteItems} />
            })}


            <button type="button" class="btn btn-primary tasks" data-toggle="modal" data-target="#exampleModal">
                Add Task
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Today Tasks</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div class="form-group forms">
                                <label className="label" for="exampleFormControlTextarea1">Write Task</label><br/>
                                <input className="inp" type="text" placeholder="add item" value={inputList} onChange={itemEvent} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button  type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={listOfItems} >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks;
