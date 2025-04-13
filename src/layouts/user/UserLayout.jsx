import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='userLayout'>
      <Outlet></Outlet>
    </div>
  )
}

export default UserLayout
