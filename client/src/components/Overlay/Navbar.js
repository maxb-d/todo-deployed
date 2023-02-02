import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <h3 className='navbar-todos--title'>Todos Collections</h3>
        <div className='todos-collection'>
            <div className='todo-a'>
                <div className='collection-checkbox-selected'></div>
                <h4 className='collection-name'>{'🔥 Tick List 🔥'}</h4>
            </div>
            <div className='todo-a'>
                <div className='collection-checkbox'></div>
                <h4 className='collection-name'>{'🌴 Holiday Tick List 🌴'}</h4>
            </div>
            <div className='todo-a'>
                <div className='collection-checkbox'></div>
                <h4 className='collection-name'>{'🏈 School Tick List 🏈'}</h4>
            </div>
        </div>
    </div>
  )
}

export default Navbar