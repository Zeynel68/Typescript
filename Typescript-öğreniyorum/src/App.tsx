import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import TodoCreate from './component/todoCreate'
import TodoList from './component/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
