import React from 'react'

import { FiDelete } from 'react-icons/fi'
import { FiEdit2 } from 'react-icons/fi'


const Todo = () => {
  return (
    <div className='todo'>
        <div className='todo-checkbox-complete'></div>
        <h4 className='todo-content'>Cookies</h4>
        <div className='todo--buttons-container'>
            <button className='edit'><FiEdit2 size={25}/></button>
            <button className='delete'><FiDelete size={25}/></button>
        </div>
    </div>
  )
}

export default Todo