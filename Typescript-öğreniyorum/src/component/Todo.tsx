import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, upDateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}


function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps

    const dispatch = useDispatch();

    const [edit, setEdit] = useState<boolean>(false);
    const [newTodo, setNewtodo] = useState<string>(content)

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }

        dispatch(upDateTodo(payload))
        setEdit(false);
    }

    return (
        <div>
            <div style={{
                display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                border: "1px solid lightgrey", marginTop: "40px", padding: "10px", borderRadius: "10px"
            }}>
                {edit ? <input style={{ width: "400px", height: "20px", border: "none", borderBottom: "1px solid lightgrey", outline: "none" }} type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewtodo(e.target.value)
                }} /> : <div>{content}</div>}

                <div>

                    {edit ? <FaCheck className='icons' onClick={handleUpdateTodo} style={{ marginRight: "8px" }} /> : <FaEdit onClick={() => setEdit(true)} className='icons' style={{ marginRight: "8px" }} />}
                    <IoMdRemoveCircleOutline className='icons' onClick={handleRemoveTodo} />

                </div>
            </div>

        </div>

    )
}

export default Todo
