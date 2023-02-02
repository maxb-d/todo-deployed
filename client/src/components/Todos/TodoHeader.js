import React from 'react'

const TodoHeader = ({ pendingTodos, completedTodos, collectionTitle }) => {
  return (
    <div className='todo-header'>
        <div className='todo-stats'>
            <h4 className='todos-pending'>Pending: {pendingTodos}</h4>
            <h4 className='todos-completed'>Completed: {completedTodos}</h4>
        </div>
        <div className='todo-head'>
            <button className='go-back'>{'<'}</button>
            <h1 className='collection-title'>{collectionTitle}</h1>
        </div>
        <div className='todo-add'>
            <button className='add'>+</button>
            <h1>Add new todo</h1>
        </div>
    </div>
  )
}

export default TodoHeader