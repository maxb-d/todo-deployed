import React from 'react'
import TodoHeader from './TodoHeader'
import Todo from './Todo'

const TodoApp = ({ pendingTodos, completedTodos }) => {
  return (
    <div className='todo-app'>
        <TodoHeader 
            collectionTitle={'🔥 Tick List 🔥'}
            pendingTodos={pendingTodos}
            completedTodos={completedTodos}
        />

        <div className='pending-content'>
            <h1 className='pending-title'>In Progress - {pendingTodos}</h1>
            <Todo />
        </div>
        <div className='complete-content'>
            <h1 className='complete-title'>Completed - {completedTodos}</h1>
            <Todo />
        </div>
    </div>
  )
}

export default TodoApp