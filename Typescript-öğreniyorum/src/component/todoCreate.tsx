import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewtodo] = useState<string>("")

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Lütfen bir todo giriniz!")
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewtodo("")

    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewtodo(e.target.value)
                }}
                type="text" className='todo-input' placeholder='Todo Giriniz...' />
            <button onClick={handleCreateTodo} className='todo-buton'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate
