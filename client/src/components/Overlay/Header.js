import React from 'react'

import {HiOutlineLogout} from 'react-icons/hi'
import {FaSignInAlt} from 'react-icons/fa'

const Header = ({ username, currentTab }) => {
    const [signedIn, setSignedIn] = React.useState(false)
  return (
    <div className='overlay-header'>
        <h3 className='usernam'>{username}</h3>
        <h1 className='current-tab'>{currentTab}</h1>
        <div className='header-buttons--container'>
            { signedIn ? 
                <button className='logout'><HiOutlineLogout size={25}/></button> 
                : <button className='signin'><FaSignInAlt size={20}/></button> 
            }
        </div>
    </div>
  )
}

export default Header